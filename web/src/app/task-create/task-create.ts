import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../services/task-services';
import { AuthService } from '../services/auth.service';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.html',
  styleUrls: ['./task-create.css']
})
export class TaskCreateComponent implements OnInit, OnDestroy {

  form!: FormGroup;
  loading = false;
  predicting = false;
  predictedTime: number | null = null;
  toast: { type: 'success' | 'error'; message: string } | null = null;

  categories = ['Coding', 'Work', 'Study', 'Health', 'Personal'];
  priorities = ['High', 'Medium', 'Low'];

  private predict$ = new Subject<{ category: string; priority: string }>();
  private sub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title:          ['', [Validators.required, Validators.minLength(3)]],
      category:       ['', Validators.required],
      priority:       ['', Validators.required],
      estimated_time: [null, [Validators.required, Validators.min(1)]],
      due_date:       ['', Validators.required]
    });

    this.sub = this.predict$.pipe(
      debounceTime(500),
      distinctUntilChanged((a, b) => a.category === b.category && a.priority === b.priority),
      switchMap(payload => {
        this.predicting = true;
        return this.taskService.predictTime({
          ...payload,
          focus_score: 3,
          distraction_count: 1
        });
      })
    ).subscribe({
      next: res => {
        this.predictedTime = res.predicted_time;
        this.predicting = false;
      },
      error: () => {
        this.predictedTime = null;
        this.predicting = false;
      }
    });

    this.form.get('category')!.valueChanges.subscribe(() => this.triggerPredict());
    this.form.get('priority')!.valueChanges.subscribe(() => this.triggerPredict());
  }

  private triggerPredict() {
    const category = this.form.get('category')!.value;
    const priority = this.form.get('priority')!.value;
    if (category && priority) {
      this.predict$.next({ category, priority });
    } else {
      this.predictedTime = null;
    }
  }

  get f() { return this.form.controls; }

  isInvalid(field: string) {
    const c = this.form.get(field);
    return c?.invalid && c?.touched;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    const user = this.auth.getUser();
    const payload = {
      ...this.form.value,
      due_date: new Date(this.form.value.due_date).toISOString(),
      user_id: user?.id
    };

    this.loading = true;
    this.toast = null;

    this.taskService.createTask(payload).subscribe({
      next: () => {
        this.loading = false;
        this.form.reset();
        this.predictedTime = null;
        this.showToast('success', '✅ Task created successfully!');
      },
      error: (err) => {
        this.loading = false;
        const msg = err?.error?.detail || 'Something went wrong. Please try again.';
        this.showToast('error', '❌ ' + msg);
      }
    });
  }

  reset() {
    this.form.reset();
    this.predictedTime = null;
    this.toast = null;
  }

  private showToast(type: 'success' | 'error', message: string) {
    this.toast = { type, message };
    setTimeout(() => this.toast = null, 4000);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
