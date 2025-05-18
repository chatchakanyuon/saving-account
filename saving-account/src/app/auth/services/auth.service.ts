import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { User } from '../../core/models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = signal<User | null>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
    }
  }

  login(credentials: { username: string, password: string }): Observable<User> {
    return this.http.post<{ user: User, token: string }>('/api/auth/login', credentials)
      .pipe(
        map(response => {
          const user: User = {
            ...response.user,
            token: response.token
          };
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUser.set(user);
          return user;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUser.set(null);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser() && !this.isTokenExpired();
  }

  getToken(): string | null {
    return this.currentUser()?.token || null;
  }

  hasRole(role: string): boolean {
    return this.currentUser()?.roles?.includes(role) || false;
  }

  private isTokenExpired(): boolean {
    // Check token expiration
    const token = this.getToken();
    if (!token) {
      return true;
    }

    // Token validation logic here
    // ...

    return false;
  }
}
