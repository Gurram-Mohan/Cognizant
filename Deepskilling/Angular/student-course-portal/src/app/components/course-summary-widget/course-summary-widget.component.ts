import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { Course } from '../../models/course.model';

// Hands-On 6: CourseSummaryWidget
// Demonstrates that both this component and HomeComponent share the SAME
// singleton CourseService instance (providedIn: 'root')
// Adding a course in one component is reflected in the other's count
@Component({
  selector: 'app-course-summary-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="summary-widget">
      <h4 class="widget-title">Course Summary</h4>
      <div class="widget-stats">
        <div class="widget-stat">
          <span class="widget-value">{{ totalCourses }}</span>
          <span class="widget-label">Total</span>
        </div>
        <div class="widget-stat">
          <span class="widget-value">{{ enrolledCount }}</span>
          <span class="widget-label">Enrolled</span>
        </div>
        <div class="widget-stat">
          <span class="widget-value">{{ passedCount }}</span>
          <span class="widget-label">Passed</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .summary-widget {
      background: white;
      border-radius: var(--radius-lg);
      padding: var(--spacing-lg);
      border: 1px solid var(--color-gray-200);
      box-shadow: var(--shadow-sm);
    }
    .widget-title {
      font-size: 0.875rem;
      font-weight: 700;
      color: var(--color-gray-700);
      margin-bottom: var(--spacing-md);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .widget-stats {
      display: flex;
      gap: var(--spacing-lg);
    }
    .widget-stat {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
    .widget-value {
      font-size: 1.5rem;
      font-weight: 800;
      color: var(--color-primary);
    }
    .widget-label {
      font-size: 0.7rem;
      color: var(--color-gray-500);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  `]
})
export class CourseSummaryWidgetComponent implements OnInit {
  totalCourses = 0;
  enrolledCount = 0;
  passedCount = 0;
  private courses: Course[] = [];

  // Hands-On 6: Same singleton CourseService injected here AND in HomeComponent
  // This verifies both components share one instance
  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    this.courses = this.courseService.getLocalCourses();
    this.totalCourses = this.courses.length;
    this.enrolledCount = this.enrollmentService.getEnrollmentCount();
    this.passedCount = this.courses.filter(c => c.gradeStatus === 'passed').length;
  }
}
