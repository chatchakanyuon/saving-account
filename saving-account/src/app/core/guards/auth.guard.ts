import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {TokenService} from "../../services/token/token.service";

export const authGuard: CanActivateFn = (route, state) => {
    const tokenService = inject(TokenService);
    const router = inject(Router);

    const token = tokenService.token;

    if (token) {
        return true;
    }

    router.navigate(['/auth/login']);
    return false;
};
