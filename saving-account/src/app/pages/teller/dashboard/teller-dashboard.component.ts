import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teller-customer-dashboard',
  imports: [
    MatButton
  ],
  templateUrl: './teller-dashboard.component.html',
  styleUrl: './teller-dashboard.component.scss'
})
export class TellerDashboardComponent {
  constructor(
    private router: Router
  ) {
  }

  routeDeposit() {
    this.router.navigate(['/teller/deposit'])
  }
}
