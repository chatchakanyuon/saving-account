import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from '../../services/token/token.service';
import {jwtDecode} from 'jwt-decode';

export const stakeholderGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);

  const token = tokenService.token;
  const requiredStakeholders = route.data?.['stakeholders'] as string[];

  const payload: any = jwtDecode(token);
  const customerStakeholder: string = payload.stakeholders[0] || "";

  const hasRole = requiredStakeholders.some(stakeholder => stakeholder.includes(customerStakeholder));

  if (hasRole) {
    return true;
  }

  switch (customerStakeholder) {
    case  'TELLER':
      router.navigate(['/teller/dashboard'])
      break
    case  'CUSTOMER':
      router.navigate(['/customer/dashboard'])
      break
  }

  return false;
};
