import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSidebar = false;
  collapsed = false;
  popupOpen = false;

  user: any = null;

  constructor(private router: Router, public auth: AuthService) {
    this.user = this.auth.getUser();
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        const url = e.urlAfterRedirects;
        this.showSidebar = url !== '/' && url !== '/signup';
        this.popupOpen = false;
        this.user = this.auth.getUser();
      }
    });
  }

  toggle() { this.collapsed = !this.collapsed; }

  togglePopup() { this.popupOpen = !this.popupOpen; }

  @HostListener('document:click', ['$event'])
  onDocClick(e: Event) {
    const target = e.target as HTMLElement;
    if (!target.closest('.profile-wrap')) this.popupOpen = false;
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}