import {Routes} from '@angular/router';
import {MainLayoutComponent} from './layouts/main-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout.component';
import {
  LoginComponent,
  RegistrationComponent,
  DepositComponent,
  TransferComponent,
  CustomerDashboardComponent,
  TellerDashboardComponent
} from './pages';
import {authGuard, stakeholderGuard} from './core/guards';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'customer/dashboard',
        component: CustomerDashboardComponent,
        canActivate: [authGuard, stakeholderGuard],
        data: {stakeholders: ['CUSTOMER']}
      },
      {
        path: 'customer/transfer',
        component: TransferComponent,
        canActivate: [authGuard, stakeholderGuard],
        data: {stakeholders: ['CUSTOMER']}
      },
      {
        path: 'teller/dashboard',
        component: TellerDashboardComponent,
        canActivate: [authGuard, stakeholderGuard],
        data: {stakeholders: ['TELLER']}
      },
      {
        path: 'teller/deposit',
        component: DepositComponent,
        canActivate: [authGuard, stakeholderGuard],
        data: {stakeholders: ['TELLER']}
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'auth/registration',
        component: RegistrationComponent
      },
      {
        path: 'auth/login',
        component: LoginComponent
      },
    ],
  },
  {path: '**', redirectTo: 'auth/login'}
];
