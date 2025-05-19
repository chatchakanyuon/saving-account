import {Injectable} from '@angular/core';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  set token(token: string) {
    localStorage.setItem('token', token)
  }

  get token() {
    return localStorage.getItem('token') as string
  }

  get customerStakeholders(): string[] {
    const token = this.token;

    if (!token) return [];

    const payload: any = jwtDecode(token);

    return payload?.stakeholders || [];
  }

  clearToken() {
    localStorage.clear()
  }
}
