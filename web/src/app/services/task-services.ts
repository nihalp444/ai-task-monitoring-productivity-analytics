import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TaskService {

  api = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {}

  getTasks(userId: string) {
    return this.http.get<any[]>(`${this.api}/tasks?user_id=${userId}`);
  }

  createTask(task: any) {
    return this.http.post(this.api + '/tasks', task);
  }

  addTask(task: any) {
    return this.http.post(this.api + '/tasks', task);
  }

  startTask(taskId: string, userId: string) {
    return this.http.post(`${this.api}/tasks/start/${taskId}`, { user_id: userId });
  }

  completeTask(taskId: string, data: { focus_score: number; distraction_count: number; user_id: string }) {
    return this.http.post(`${this.api}/tasks/complete/${taskId}`, data);
  }

  signup(user: any) {
    return this.http.post(this.api + '/signup', user);
  }

  login(email: string, password: string) {
    return this.http.post(this.api + '/login', { email, password });
  }

  predictTime(data: { category: string; priority: string; focus_score: number; distraction_count: number }) {
    return this.http.post<{ predicted_time: number }>(this.api + '/predict-time', data);
  }
}
