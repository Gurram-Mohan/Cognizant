import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoadingService } from '../../services/loading.service';
import { Subscription } from 'rxjs';

// Hands-On 1: HeaderComponent
// Contains nav with portal name and links: Home, Courses, Profile
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  isLoading = false;
  private loadingSub!: Subscription;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // Subscribe to global loading state from interceptor
    this.loadingSub = this.loadingService.isLoading$.subscribe(
      loading => this.isLoading = loading
    );
  }

  ngOnDestroy(): void {
    this.loadingSub?.unsubscribe();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
