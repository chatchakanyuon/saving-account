import {Component} from '@angular/core';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {Router, RouterOutlet} from '@angular/router';
import {MatIconButton} from '@angular/material/button';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {TokenService} from '../services/token/token.service';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-main-layout',
  styleUrl: './main.layout.component.scss',
  templateUrl: './main-layout.component.html',
  imports: [
    MatToolbarModule,
    RouterOutlet,
    MatToolbar,
    RouterOutlet,
    MatMenu,
    MatMenuItem,
    MatIconModule,
    MatIconButton,
    MatMenuTrigger
  ],
})
export class MainLayoutComponent {
  constructor(
    private tokenService: TokenService,
    private router: Router,
  ) {
  }

  logout() {
    this.tokenService.clearToken()
    this.router.navigate(['/auth/login'])
  }
}
