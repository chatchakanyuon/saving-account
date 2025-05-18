import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from '../../services/token/token.service';
import {jwtDecode} from 'jwt-decode';

export const stakeholderGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const tokenService = inject(TokenService);

  const token = tokenService.token;
  const requiredStakeholders = route.data?.['stakeholders'] as string[];

  try {
    const payload: any = jwtDecode(token);
    const stakeholders: string[] = payload.stakeholders || [];
    const hasRole = requiredStakeholders.some(stakeholder => stakeholder.includes(stakeholder));

    if (hasRole) {
      return true;
    }

    router.navigate(['/auth/login'], {
      queryParams: {returnUrl: state.url}
    });

    return false;
  } catch (e) {
    console.error('Invalid token', e);
    router.navigate(['/auth/login'], {
      queryParams: {returnUrl: state.url}
    });

    return false;
  }
};
