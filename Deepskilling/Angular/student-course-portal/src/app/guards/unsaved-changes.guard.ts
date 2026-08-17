import { CanDeactivateFn } from '@angular/router';

// Hands-On 7: UnsavedChangesGuard - CanDeactivate guard
// Prevents accidental navigation away from dirty reactive enrollment form
export interface CanComponentDeactivate {
  canDeactivate: () => boolean;
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.canDeactivate && !component.canDeactivate()) {
    // Hands-On 7: use window.confirm if form is dirty
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
