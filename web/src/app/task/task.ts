import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { TaskService } from '../services/task-services';
import { AuthService } from '../services/auth.service';

interface TaskItem {
  id: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  estimated_time: number;
  due_date: string;
  created_at: string;
  _loading?: boolean;
  _startedAt?: number;   // timestamp when started (ms)
  _elapsed?: number;     // seconds elapsed (updated in zone for display)
  _rafId?: number;       // requestAnimationFrame id
}

@Component({
  selector: 'app-task',
  templateUrl: './task.html',
  styleUrls: ['./task.css']
})
export class TaskComponent implements OnInit, OnDestroy {

  tasks: TaskItem[] = [];
  pageLoading = true;

  modalOpen = false;
  modalTask: TaskItem | null = null;
  focusScore = 3;
  distractionCount = 0;
  modalLoading = false;
  modalError = '';

  toast: { type: 'success' | 'error'; message: string } | null = null;
  private toastTimer: any;

  filter: 'All' | 'Pending' | 'In Progress' | 'Completed' = 'All';

  constructor(
    private taskService: TaskService,
    private auth: AuthService,
    private zone: NgZone
  ) {}

  ngOnInit() { this.loadTasks(); }

  ngOnDestroy() {
    this.tasks.forEach(t => this.stopTimer(t));
    clearTimeout(this.toastTimer);
  }

  get userId(): string { return this.auth.getUser()?.id ?? ''; }

  get filteredTasks(): TaskItem[] {
    return this.filter === 'All' ? this.tasks : this.tasks.filter(t => t.status === this.filter);
  }

  get counts() {
    return {
      all:        this.tasks.length,
      pending:    this.tasks.filter(t => t.status === 'Pending').length,
      inProgress: this.tasks.filter(t => t.status === 'In Progress').length,
      completed:  this.tasks.filter(t => t.status === 'Completed').length,
    };
  }

  loadTasks() {
    this.pageLoading = true;
    this.taskService.getTasks(this.userId).subscribe({
      next: (data) => {
        this.tasks = (data as TaskItem[]).map(t => ({ ...t, _loading: false, _elapsed: 0 }));
        this.pageLoading = false;
      },
      error: () => {
        this.pageLoading = false;
        this.showToast('error', '❌ Failed to load tasks');
      }
    });
  }

  startTask(task: TaskItem) {
    task._loading = true;
    this.taskService.startTask(task.id, this.userId).subscribe({
      next: () => {
        task.status = 'In Progress';
        task._loading = false;
        task._elapsed = 0;
        task._startedAt = Date.now();
        this.startTimer(task);
        this.showToast('success', `▶️ "${task.title}" started`);
      },
      error: (err) => {
        task._loading = false;
        this.showToast('error', '❌ ' + (err?.error?.detail ?? 'Failed to start task'));
      }
    });
  }

  // Use a simple interval outside zone, update elapsed every second via zone.run only when second changes
  private startTimer(task: TaskItem) {
    this.zone.runOutsideAngular(() => {
      let lastSec = 0;
      const tick = () => {
        const elapsed = Math.floor((Date.now() - (task._startedAt ?? Date.now())) / 1000);
        if (elapsed !== lastSec) {
          lastSec = elapsed;
          // Only re-enter zone once per second to update the display value
          this.zone.run(() => { task._elapsed = elapsed; });
        }
        task._rafId = requestAnimationFrame(tick);
      };
      task._rafId = requestAnimationFrame(tick);
    });
  }

  private stopTimer(task: TaskItem) {
    if (task._rafId) {
      cancelAnimationFrame(task._rafId);
      task._rafId = undefined;
    }
  }

  openModal(task: TaskItem) {
    this.modalTask = task;
    this.focusScore = 3;
    this.distractionCount = 0;
    this.modalError = '';
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
    this.modalTask = null;
    this.modalLoading = false;
    this.modalError = '';
  }

  submitComplete() {
    if (!this.modalTask) return;
    if (this.distractionCount < 0) { this.modalError = 'Distraction count cannot be negative.'; return; }

    this.modalLoading = true;
    this.modalError = '';

    this.taskService.completeTask(this.modalTask.id, {
      focus_score: this.focusScore,
      distraction_count: this.distractionCount,
      user_id: this.userId
    }).subscribe({
      next: () => {
        const t = this.tasks.find(x => x.id === this.modalTask!.id);
        if (t) { t.status = 'Completed'; this.stopTimer(t); }
        this.showToast('success', `✅ "${this.modalTask!.title}" completed!`);
        this.closeModal();
      },
      error: (err) => {
        this.modalLoading = false;
        this.modalError = err?.error?.detail ?? 'Failed to complete task.';
      }
    });
  }

  formatElapsed(secs: number = 0): string {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  priorityClass(p: string) { return p === 'High' ? 'p-high' : p === 'Medium' ? 'p-med' : 'p-low'; }
  statusClass(s: string)   { return s === 'Completed' ? 's-done' : s === 'In Progress' ? 's-progress' : 's-pending'; }

  private showToast(type: 'success' | 'error', message: string) {
    clearTimeout(this.toastTimer);
    this.toast = { type, message };
    this.toastTimer = setTimeout(() => this.toast = null, 4000);
  }
}
