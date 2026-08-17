import { Injectable } from '@angular/core';

// Hands-On 7: AuthService for route guard
// isLoggedIn is hardcoded to true as per the exercise
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Hardcoded as per Hands-On 7 requirement
  isLoggedIn = true;

  login(): void {
    this.isLoggedIn = true;
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
