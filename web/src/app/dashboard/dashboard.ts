import { Component, OnInit, OnDestroy, ElementRef, ViewChild, NgZone } from '@angular/core';
import { forkJoin, of, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DashboardService } from '../services/dashboard.service';
import { AuthService } from '../services/auth.service';

declare const Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  @ViewChild('lineChart',  { static: true }) lineChartRef!:  ElementRef<HTMLCanvasElement>;
  @ViewChild('pieChart',   { static: true }) pieChartRef!:   ElementRef<HTMLCanvasElement>;
  @ViewChild('barChart',   { static: true }) barChartRef!:   ElementRef<HTMLCanvasElement>;
  @ViewChild('focusChart', { static: true }) focusChartRef!: ElementRef<HTMLCanvasElement>;

  today = new Date();
  loading = true;
  error = '';

  successProbability: number | null = null;
  successPredicting = false;
  successClass: 'green' | 'yellow' | 'red' | '' = '';

  userType: string | null = null;
  userTypeClass: 'green' | 'yellow' | 'red' | '' = '';
  clusterPredicting = false;

  summary: any = { tasksCompleted: 0, tasksPending: 0, timeSpent: 0, productivityScore: 0 };
  insights: string[] = [];
  recommendations: string[] = [];
  heatmapCells: { level: number; date: string }[] = [];

  noWeeklyData  = false;
  noFocusData   = false;

  private lineChart:  any;
  private pieChart:   any;
  private barChart:   any;
  private focusChart: any;
  private userId = '';

  score = 0;
  circumference = 2 * Math.PI * 36;
  dashOffset = 2 * Math.PI * 36;

  stats: { icon: string; label: string; value: number; color: string }[] = [];

  private updateStats() {
    this.stats = [
      { icon: '✅', label: 'Tasks Completed Today', value: this.summary.tasksCompleted, color: '#10b981' },
      { icon: '⏳', label: 'Tasks Pending',          value: this.summary.tasksPending,   color: '#f59e0b' },
      { icon: '🕐', label: 'Time Spent Today (min)', value: this.summary.timeSpent,      color: '#6366f1' },
    ];
  }

  constructor(private dash: DashboardService, private auth: AuthService, private zone: NgZone) {}

  ngOnInit() {
    const user = this.auth.getUser();
    if (!user?.id) { this.error = 'Not authenticated'; this.loading = false; return; }
    this.userId = user.id;
    this.loadAll();
  }

  private fetchSuccessPrediction(summary: any, focusTrend: any[]) {
    const totalTasks     = (summary.tasksCompleted ?? 0) + (summary.tasksPending ?? 0);
    const avgFocus       = focusTrend?.length
      ? focusTrend.reduce((s: number, d: any) => s + d.avg_focus, 0) / focusTrend.length
      : 3;
    const avgDistraction = focusTrend?.length
      ? focusTrend.reduce((s: number, d: any) => s + d.avg_distraction, 0) / focusTrend.length
      : 1;
    const avgDuration = focusTrend?.length
      ? focusTrend.reduce((s: number, d: any) => s + (d.avg_duration ?? 60), 0) / focusTrend.length
      : 60;

    if (totalTasks === 0) return;

    this.successPredicting = true;
    this.dash.predictSuccess({
      total_tasks:     totalTasks,
      avg_focus:       parseFloat(avgFocus.toFixed(2)),
      avg_distraction: parseFloat(avgDistraction.toFixed(2))
    }).subscribe({
      next: res => {
        this.successProbability = res.probability;
        this.successClass = res.probability >= 70 ? 'green' : res.probability >= 40 ? 'yellow' : 'red';
        this.successPredicting = false;
      },
      error: () => { this.successPredicting = false; }
    });

    this.clusterPredicting = true;
    this.dash.predictCluster({
      avg_duration:    parseFloat(avgDuration.toFixed(2)),
      avg_focus:       parseFloat(avgFocus.toFixed(2)),
      avg_distraction: parseFloat(avgDistraction.toFixed(2)),
      total_tasks:     totalTasks
    }).subscribe({
      next: res => {
        this.userType = res.label;
        this.userTypeClass =
          res.label === 'Highly Focused'    ? 'green'  :
          res.label === 'Average Performer' ? 'yellow' : 'red';
        this.clusterPredicting = false;
      },
      error: () => { this.clusterPredicting = false; }
    });
  }

  ngOnDestroy() {
    [this.lineChart, this.pieChart, this.barChart, this.focusChart]
      .forEach(c => c?.destroy());
  }

  insightsLoading = false;

  loadAll() {
    this.loading = true;
    this.error = '';

    const safe = <T>(obs: Observable<T>, fallback: T) => obs.pipe(catchError(() => of(fallback)));

    forkJoin({
      summary:  safe(this.dash.getSummary(this.userId),              { tasksCompleted: 0, tasksPending: 0, timeSpent: 0, productivityScore: 0 }),
      trend:    safe(this.dash.getTaskTrend(this.userId),            []),
      category: safe(this.dash.getCategoryDistribution(this.userId), []),
      heatmap:  safe(this.dash.getHeatmap(this.userId),              []),
      weekly:   safe(this.dash.getWeeklyTasks(this.userId),          []),
      focus:    safe(this.dash.getFocusTrend(this.userId),           [])
    }).subscribe({
      next: (res: any) => {
        this.summary  = res.summary;
        this.score = this.summary.productivityScore ?? 0;
        this.dashOffset = this.circumference * (1 - this.score / 100);
        this.updateStats();
        this.buildHeatmap(res.heatmap);
        this.noWeeklyData = !res.weekly?.length;
        this.noFocusData  = !res.focus?.length;
        this.loading = false;
        this.fetchSuccessPrediction(res.summary, res.focus);
        this.renderLineChart(res.trend);
        this.renderPieChart(res.category);
        this.renderBarChart(res.weekly);
        this.renderFocusChart(res.focus);
        this.loadInsights();
      },
      error: (e: any) => {
        this.error   = e?.error?.detail || 'Failed to load dashboard. Is the backend running?';
        this.loading = false;
      }
    });
  }

  private loadInsights() {
    this.insightsLoading = true;
    this.dash.getInsights(this.userId).subscribe({
      next: (res: any) => {
        this.insights        = res.insights;
        this.recommendations = res.recommendations;
        this.insightsLoading = false;
      },
      error: () => { this.insightsLoading = false; }
    });
  }

  refresh() {
    this.dash.invalidate();
    this.dash.clearInsightsCache(this.userId).subscribe({
      next: () => this._doRefresh(),
      error: () => this._doRefresh()  // proceed even if cache-bust fails
    });
  }

  private _doRefresh() {
    [this.lineChart, this.pieChart, this.barChart, this.focusChart]
      .forEach(c => c?.destroy());
    this.lineChart = this.pieChart = this.barChart = this.focusChart = null;
    this.insights = [];
    this.recommendations = [];
    this.loadAll();
  }

  private buildHeatmap(data: { date: string; count: number }[]) {
    const map: Record<string, number> = {};
    data.forEach(d => (map[d.date] = d.count));
    const maxCount = Math.max(...data.map(d => d.count), 1);
    this.heatmapCells = [];
    const today = new Date();
    for (let i = 29; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const key   = d.toISOString().split('T')[0];
      const label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const cnt   = map[key] ?? 0;
      const level = cnt === 0 ? 0 : Math.ceil((cnt / maxCount) * 4);
      this.heatmapCells.push({ level, date: `${label} — ${cnt} tasks` });
    }
  }

  private chartDefaults() {
    return {
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 800 },
      plugins: { legend: { display: false } },
    };
  }

  private axisStyle() {
    return {
      x: { grid: { color: '#1f1f1f' }, ticks: { color: '#6b7280', font: { size: 12 } } },
      y: { grid: { color: '#1f1f1f' }, ticks: { color: '#6b7280', font: { size: 12 }, stepSize: 1 }, beginAtZero: true }
    };
  }

  private renderLineChart(data: { date: string; count: number }[]) {
    if (!this.lineChartRef?.nativeElement) return;
    this.lineChart?.destroy();
    this.lineChart = new Chart(this.lineChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: data.map(d => d.date.slice(5)),
        datasets: [{
          label: 'Tasks Created',
          data: data.map(d => d.count),
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245,158,11,0.08)',
          pointBackgroundColor: '#f59e0b',
          pointRadius: 5, pointHoverRadius: 7,
          tension: 0.4, fill: true, borderWidth: 2.5
        }]
      },
      options: { ...this.chartDefaults(), scales: this.axisStyle() }
    });
  }

  private renderPieChart(data: { category: string; count: number }[]) {
    if (!this.pieChartRef?.nativeElement) return;
    this.pieChart?.destroy();
    const colors = ['#f59e0b', '#6366f1', '#10b981', '#ec4899', '#3b82f6', '#ef4444'];
    this.pieChart = new Chart(this.pieChartRef.nativeElement, {
      type: 'doughnut',
      data: {
        labels: data.map(d => d.category),
        datasets: [{
          data: data.map(d => d.count),
          backgroundColor: colors.slice(0, data.length),
          borderColor: '#111111', borderWidth: 3, hoverOffset: 8
        }]
      },
      options: {
        ...this.chartDefaults(),
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
            labels: { color: '#9ca3af', font: { size: 12 }, padding: 16, boxWidth: 12 }
          }
        },
        cutout: '65%'
      }
    });
  }

  private renderBarChart(data: { date: string; count: number }[]) {
    if (!this.barChartRef?.nativeElement) return;
    this.barChart?.destroy();
    if (!data?.length) return;
    this.barChart = new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: data.map(d => d.date),
        datasets: [{
          label: 'Tasks Completed',
          data: data.map(d => d.count),
          backgroundColor: 'rgba(245,158,11,0.75)',
          borderColor: '#f59e0b',
          borderWidth: 2,
          borderRadius: 8,
          borderSkipped: false,
          hoverBackgroundColor: '#f59e0b'
        }]
      },
      options: {
        ...this.chartDefaults(),
        scales: this.axisStyle(),
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: '#1a1a1a',
            titleColor: '#f59e0b',
            bodyColor: '#9ca3af',
            borderColor: '#2a2a2a',
            borderWidth: 1
          }
        }
      }
    });
  }

  private renderFocusChart(data: { date: string; avg_focus: number; avg_distraction: number }[]) {
    if (!this.focusChartRef?.nativeElement) return;
    this.focusChart?.destroy();
    if (!data?.length) return;
    this.focusChart = new Chart(this.focusChartRef.nativeElement, {
      type: 'line',
      data: {
        labels: data.map(d => d.date),
        datasets: [
          {
            label: 'Avg Focus Score',
            data: data.map(d => d.avg_focus),
            borderColor: '#10b981',
            backgroundColor: 'rgba(16,185,129,0.08)',
            pointBackgroundColor: '#10b981',
            pointRadius: 5, pointHoverRadius: 7,
            tension: 0.4, fill: true, borderWidth: 2.5
          },
          {
            label: 'Avg Distractions',
            data: data.map(d => d.avg_distraction),
            borderColor: '#ef4444',
            backgroundColor: 'rgba(239,68,68,0.06)',
            pointBackgroundColor: '#ef4444',
            pointRadius: 5, pointHoverRadius: 7,
            tension: 0.4, fill: true, borderWidth: 2.5
          }
        ]
      },
      options: {
        ...this.chartDefaults(),
        scales: {
          x: { grid: { color: '#1f1f1f' }, ticks: { color: '#6b7280', font: { size: 12 } } },
          y: { grid: { color: '#1f1f1f' }, ticks: { color: '#6b7280', font: { size: 12 } }, beginAtZero: true, max: 5 }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top',
            labels: { color: '#9ca3af', font: { size: 12 }, padding: 16, boxWidth: 12, usePointStyle: true }
          },
          tooltip: {
            backgroundColor: '#1a1a1a',
            titleColor: '#e2e8f0',
            bodyColor: '#9ca3af',
            borderColor: '#2a2a2a',
            borderWidth: 1
          }
        }
      }
    });
  }
}
