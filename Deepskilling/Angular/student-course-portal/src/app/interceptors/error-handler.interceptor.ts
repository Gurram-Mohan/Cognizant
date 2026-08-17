import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Hands-On 8: Error Handler Interceptor
// Intercepts HTTP errors globally:
// - 401: navigate to login/home
// - 500: show global error notification
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        console.error('Unauthorized - redirecting to home');
        router.navigate(['/']);
      } else if (error.status === 500) {
        console.error('Server error - showing global notification');
        // In a real app this would trigger a toast/snackbar notification
        alert('Server error occurred. Please try again later.');
      } else if (error.status === 404) {
        console.error('Resource not found:', req.url);
      } else {
        console.error('HTTP Error:', error.status, error.message);
      }
      // Propagate error after handling
      return throwError(() => new Error(error.message || 'An error occurred'));
    })
  );
};
