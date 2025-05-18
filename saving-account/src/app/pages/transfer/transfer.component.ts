import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-transfer',
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './transfer.component.html',
  styleUrl: './transfer.component.scss'
})
export class TransferComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      toAccount: ['', Validators.required],
      amount: ['', Validators.required],
      pin: ['', Validators.required]
    });
  }

  onVerify() {
    console.log('Verifying transfera info', this.form.value);
  }

  onConfirm() {
    console.log('Confirming transfera', this.form.value);
  }
}
