import {Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthenticationControllerService} from '../../../services/services/authentication-controller.service';
import {TokenService} from '../../../services/token/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationControllerService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  errorMsg: Array<string> = []

  login() {
    this.errorMsg = []
    this.authService.authenticate({
      body: {
        email: this.form.value.email,
        password: this.form.value.password
      }
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string

        const stakeholder = this.tokenService.customerStakeholders?.[0];

        switch (stakeholder) {
          case "CUSTOMER":
            this.router.navigate(['/customer/dashboard'])
            break
          case "TELLER":
            this.router.navigate(['/teller/dashboard'])
            break
        }
      },
      error: (err) => {
        console.log(JSON.stringify(this.errorMsg))
      }
    })
  }
}
