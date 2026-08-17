import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';

// Hands-On 7: Lazy-loaded enrollment feature routes
// This file is loaded only when user navigates to /enroll
export const enrollmentRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/enrollment-form/enrollment-form.component').then(m => m.EnrollmentFormComponent)
  },
  {
    path: 'reactive',
    loadComponent: () => import('./pages/reactive-enrollment-form/reactive-enrollment-form.component').then(m => m.ReactiveEnrollmentFormComponent),
    canDeactivate: [unsavedChangesGuard]  // Hands-On 7: CanDeactivate guard on reactive form
  }
];
