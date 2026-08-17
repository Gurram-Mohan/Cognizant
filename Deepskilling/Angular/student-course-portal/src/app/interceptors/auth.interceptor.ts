import { HttpInterceptorFn } from '@angular/common/http';

// Hands-On 8: Auth Interceptor
// Clones every request and adds Authorization header with Bearer token
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Clone the request and add Authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });

  console.log('Auth interceptor: added Authorization header to', req.url);
  return next(authReq);
};
