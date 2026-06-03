import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../services/task-services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class SignupComponent {
  firstName = '';
  lastName = '';
  email = '';
  mobile = '';
  password = '';
  confirmPassword = '';
  error = '';
  loading = false;

  constructor(private router: Router, private taskService: TaskService) {}

  signup() {
    if (!this.firstName || !this.lastName || !this.email || !this.mobile || !this.password) {
      this.error = 'All fields are required.';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }
    this.error = '';
    this.loading = true;

    const user = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      mobile_number: this.mobile,
      password: this.password
    };

    this.taskService.signup(user).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => {
        this.loading = false;
        this.error = err.error?.detail || 'Signup failed. Please try again.';
      }
    });
  }
}
