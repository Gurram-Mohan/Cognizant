import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Hands-On 8: Loading Service used by the Loading Interceptor
// isLoading$ BehaviorSubject controls global loading spinner
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // BehaviorSubject emits false initially (not loading)
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  // Public observable that components can subscribe to
  isLoading$ = this.isLoadingSubject.asObservable();

  setLoading(loading: boolean): void {
    this.isLoadingSubject.next(loading);
  }
}
