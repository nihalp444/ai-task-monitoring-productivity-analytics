import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private key = 'auth_user';

  setUser(user: any) {
    sessionStorage.setItem(this.key, JSON.stringify(user));
  }

  getUser() {
    const u = sessionStorage.getItem(this.key);
    return u ? JSON.parse(u) : null;
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem(this.key);
  }

  logout() {
    sessionStorage.removeItem(this.key);
  }
}
