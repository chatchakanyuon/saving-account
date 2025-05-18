import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-deposit',
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss'
})
export class DepositComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      account: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(1)]],
    });
  }

  confirmDeposit() {
    if (this.form.valid) {
      console.log('Depositing:', this.form.value);
      // Add API call here
    }
  }
}
