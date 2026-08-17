import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { CourseSummaryWidgetComponent } from '../../components/course-summary-widget/course-summary-widget.component';
import { HighlightDirective } from '../../directives/highlight.directive';

// Hands-On 1 & 2: HomeComponent
// Hands-On 1: welcome heading, description paragraph, stats row (Courses Available: 12, Enrolled: 3, GPA: 3.8)
// Hands-On 2: All 4 binding types: interpolation, property binding, event binding, two-way binding (ngModel)
// Hands-On 2: ngOnInit, ngOnDestroy lifecycle hooks
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CourseSummaryWidgetComponent, HighlightDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  // Hands-On 2: portalName property - displayed via interpolation {{ portalName }}
  portalName = 'Student Course Portal';

  // Hands-On 2: isPortalActive - controls button disabled state via property binding [disabled]
  isPortalActive = true;

  // Hands-On 2: message - set on event binding (click)='onEnrollClick()'
  message = '';

  // Hands-On 2: searchTerm - bound via two-way binding [(ngModel)]
  searchTerm = '';

  // Hands-On 1: Stats row values
  // Hands-On 6: coursesAvailable uses CourseService.getCourses().length (live count)
  coursesAvailable = 12;
  enrolledCount = 3;
  gpa = 3.8;

  // Announcement banner
  showAnnouncement = true;

  // Recent activity for dashboard
  recentActivity = [
    { action: 'Enrolled in', course: 'Data Structures & Algorithms', time: '2 days ago', icon: '📚' },
    { action: 'Grade posted for', course: 'Database Management Systems', time: '1 week ago', icon: '📊' },
    { action: 'Assignment due in', course: 'Web Technologies', time: '3 days', icon: '⏰' }
  ];

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  // Hands-On 2: ngOnInit - fetch data after component inputs are set
  ngOnInit(): void {
    // Hands-On 6: Get live course count from CourseService (singleton)
    this.coursesAvailable = this.courseService.getLocalCourses().length;
    this.enrolledCount = this.enrollmentService.getEnrollmentCount();

    // Hands-On 2: Log confirming lifecycle hook fired
    console.log('HomeComponent initialised - courses loaded:', this.coursesAvailable);
  }

  // Hands-On 2: ngOnDestroy - log when component is destroyed
  ngOnDestroy(): void {
    console.log('HomeComponent destroyed');
  }

  // Hands-On 2: Event binding handler - sets message property
  onEnrollClick(): void {
    this.message = 'Enrollment opened! Browse our courses below.';
  }

  dismissAnnouncement(): void {
    this.showAnnouncement = false;
  }
}
