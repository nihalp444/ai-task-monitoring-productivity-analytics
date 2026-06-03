import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, timeout } from 'rxjs/operators';

const BASE = 'http://localhost:8000';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private cache: Record<string, { data: any; ts: number }> = {};
  private TTL = 60_000;

  constructor(private http: HttpClient) {}

  private get<T>(key: string, url: string): Observable<T> {
    const hit = this.cache[key];
    if (hit && Date.now() - hit.ts < this.TTL) return of(hit.data as T);
    return this.http.get<T>(url).pipe(
      timeout(10_000),
      tap(d => (this.cache[key] = { data: d, ts: Date.now() }))
    );
  }

  invalidate() { this.cache = {}; }

  clearInsightsCache(userId: string) {
    return this.http.delete(`${BASE}/dashboard/insights/cache?user_id=${userId}`);
  }

  getSummary(userId: string)              { return this.get<any>   ('summary',  `${BASE}/dashboard/summary?user_id=${userId}`); }
  getTaskTrend(userId: string)            { return this.get<any[]> ('trend',    `${BASE}/dashboard/task-trend?user_id=${userId}`); }
  getCategoryDistribution(userId: string) { return this.get<any[]> ('cat',      `${BASE}/dashboard/category-distribution?user_id=${userId}`); }
  getHeatmap(userId: string)              { return this.get<any[]> ('heatmap',  `${BASE}/dashboard/heatmap?user_id=${userId}`); }
  getInsights(userId: string)             { return this.http.get<any>(`${BASE}/dashboard/insights?user_id=${userId}`).pipe(timeout(15_000)); }
  getWeeklyTasks(userId: string)          { return this.get<any[]> ('weekly',   `${BASE}/dashboard/weekly-tasks?user_id=${userId}`); }
  getFocusTrend(userId: string)           { return this.get<any[]> ('focus',    `${BASE}/dashboard/focus-trend?user_id=${userId}`); }

  predictSuccess(data: { total_tasks: number; avg_focus: number; avg_distraction: number }) {
    return this.http.post<{ success: number; probability: number }>(`${BASE}/predict-success`, data);
  }

  predictCluster(data: { avg_duration: number; avg_focus: number; avg_distraction: number; total_tasks: number }) {
    return this.http.post<{ cluster: number; label: string }>(`${BASE}/predict-cluster`, data);
  }
}
