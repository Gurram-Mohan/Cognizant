import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Hands-On 7: 404 Not Found Component for wildcard route
@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="page-content not-found-page flex-center flex-col text-center">
      <div class="error-code">404</div>
      <h1 class="error-title">Page Not Found</h1>
      <p class="error-desc">Oops! The page you are looking for doesn't exist or has been moved.</p>
      <a routerLink="/" class="btn btn-primary mt-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="18" height="18">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Return to Home
      </a>
    </div>
  `,
  styles: [`
    .not-found-page {
      padding: var(--spacing-3xl) var(--spacing-xl);
      min-height: 70vh;
    }
    .error-code {
      font-family: var(--font-primary);
      font-size: 8rem;
      font-weight: 800;
      color: var(--color-gray-200);
      line-height: 1;
      background: linear-gradient(135deg, var(--color-primary), var(--color-accent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .error-title {
      font-size: 2rem;
      color: var(--color-gray-900);
      margin-top: -1rem;
      margin-bottom: var(--spacing-sm);
    }
    .error-desc {
      color: var(--color-gray-500);
      font-size: 1.1rem;
      max-width: 400px;
    }
  `]
})
export class NotFoundComponent {}
