import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { courseReducer } from './store/course/course.reducer';
import { enrollmentReducer } from './store/enrollment/enrollment.reducer';
import { CourseEffects } from './store/course/course.effects';

// Hands-On 8: provideHttpClient with interceptors registered in order
// Interceptors run in registration order (request) / reverse order (response)
// Hands-On 9: provideStore with feature reducers, provideEffects, provideStoreDevtools
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    // Hands-On 8: HTTP Client with interceptors (auth -> errorHandler -> loading)
    provideHttpClient(
      withInterceptors([authInterceptor, errorHandlerInterceptor, loadingInterceptor])
    ),
    // Hands-On 9: NgRx Store with course and enrollment feature reducers
    provideStore({
      course: courseReducer,
      enrollment: enrollmentReducer
    }),
    // Hands-On 9: Effects for async HTTP calls
    provideEffects([CourseEffects]),
    // Hands-On 9: Redux DevTools (only in development)
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75
    })
  ]
};
