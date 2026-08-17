import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

// Hands-On 8: Loading Interceptor
// Uses LoadingService BehaviorSubject to control global loading spinner
// Sets isLoading$ = true before request, false in finalize operator
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  // Set loading to true before the request
  loadingService.setLoading(true);

  return next(req).pipe(
    // finalize fires whether the request succeeds or fails
    finalize(() => {
      loadingService.setLoading(false);
    })
  );
};
