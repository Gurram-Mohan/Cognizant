import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// Hands-On 7: AuthGuard - canActivate functional guard
// Protects /profile and /enroll routes
// If not logged in, navigates to '/' and returns false
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn) {
    return true;
  } else {
    // Redirect to home if not authenticated
    router.navigate(['/']);
    return false;
  }
};
