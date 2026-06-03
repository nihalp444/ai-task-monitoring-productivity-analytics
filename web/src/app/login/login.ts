import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task-services';
import { AuthService } from '../services/auth.service';

@Component({
selector:'app-login',
templateUrl:'./login.html',
styleUrls:['./login.css']
})

export class LoginComponent{
  username = '';
  password = '';
  error = '';
  loading = false;

  constructor(private router: Router, private taskService: TaskService, private auth: AuthService){}

  login(){
    if(!this.username || !this.password){
      this.error = 'Email and password are required.';
      return;
    }
    this.error = '';
    this.loading = true;

    this.taskService.login(this.username, this.password).subscribe({
      next: (res: any) => {
        this.auth.setUser(res.user);
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.detail || 'Login failed. Please try again.';
      }
    });
  }
}