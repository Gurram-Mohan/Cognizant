import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes.guard';

// Hands-On 7: Router configuration
// All routes for the Student Course Portal SPA
export const routes: Routes = [
  // Default route - redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Home / Dashboard (Hands-On 1 & 2)
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },

  // Course Listing (Hands-On 3)
  {
    path: 'courses',
    loadComponent: () => import('./pages/course-list/course-list.component').then(m => m.CourseListComponent)
  },

  // Course Detail with route param :id (Hands-On 7)
  {
    path: 'courses/:id',
    loadComponent: () => import('./pages/course-detail/course-detail.component').then(m => m.CourseDetailComponent)
  },

  // Student Profile - protected by AuthGuard (Hands-On 7)
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/student-profile/student-profile.component').then(m => m.StudentProfileComponent)
  },

  // Lazy-loaded Enrollment feature module (Hands-On 7)
  // loadChildren for lazy loading - separate JS chunk downloaded on demand
  {
    path: 'enroll',
    canActivate: [authGuard],
    loadChildren: () => import('./features/enrollment/enrollment.routes').then(m => m.enrollmentRoutes)
  },

  // Wildcard route - 404 Not Found (must be last)
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
