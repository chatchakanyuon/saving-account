import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-customer-dashboard',
  imports: [
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {
  constructor(
    private router: Router
  ) {
  }

  routeTransfer() {
    this.router.navigate(['/customer/transfer'])
  }
}
