import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {

  user: any = null;
  loading = true;
  error = '';

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {
    const u = this.auth.getUser();
    if (!u?.id) { this.error = 'Not authenticated'; this.loading = false; return; }

    this.http.get<any>(`http://localhost:8000/profile?user_id=${u.id}`).subscribe({
      next: data => { this.user = data; this.loading = false; },
      error: () => { this.error = 'Failed to load profile.'; this.loading = false; }
    });
  }

  get initials(): string {
    if (!this.user) return '';
    return (this.user.first_name?.[0] ?? '') + (this.user.last_name?.[0] ?? '');
  }

  get memberSince(): string {
    if (!this.user?.created_at) return '—';
    return new Date(this.user.created_at).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  }
}
