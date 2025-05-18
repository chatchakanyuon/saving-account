import {Component} from '@angular/core';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-main-layout',
  styleUrl: './main.layout.component.scss',
  template: `
    <mat-toolbar color="primary">Saving Account</mat-toolbar>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [MatToolbarModule, RouterOutlet, MatToolbar, RouterOutlet],
})
export class MainLayoutComponent {}
