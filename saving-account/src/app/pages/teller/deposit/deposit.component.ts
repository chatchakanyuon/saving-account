import {Component} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from '@angular/router';

@Component({
  selector: 'app-deposit',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatAnchor
  ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      account: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  routeDashboard() {
    this.router.navigate(['/teller/dashboard'])
  }

  confirmDeposit() {
    if (this.form.valid) {
      console.log('Depositing:', this.form.value);
      // Add API call here
    }
  }
}
