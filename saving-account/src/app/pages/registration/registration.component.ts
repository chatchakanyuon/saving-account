import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatInput, MatLabel} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthenticationControllerService} from '../../services/services/authentication-controller.service';
import {RegistrationRequest} from '../../services/models/registration-request';

@Component({
  selector: 'app-registration',
    imports: [
        MatButton,
        MatFormField,
        MatInput,
        MatLabel,
        ReactiveFormsModule
    ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationControllerService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cid: ['', Validators.required],
      thaiName: ['', Validators.required],
      englishName: ['', Validators.required],
      pin: ['', Validators.required],
    });
  }

  registerRequest: RegistrationRequest = {
    email: '',
    password: '',
    cid: '',
    thaiName: '',
    englishName: '',
    pin: '',
  }
  errorMsg: Array<string> = []

  register(): void {
    this.errorMsg = []
    this.authService.register({
      body: {
        email: this.form.value.email,
        password: this.form.value.password,
        cid: this.form.value.cid,
        thaiName: this.form.value.thaiName,
        englishName: this.form.value.englishName,
        pin: this.form.value.pin,
      }
    }).subscribe({
      next: (res) => {
        console.log('Full response:', res);
      },
      error: (err) => {
        console.log(JSON.stringify(this.errorMsg))
      }
    })
  }
}
