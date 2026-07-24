import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Course } from '../../models/course.model';
import { CreditSuffixPipe } from '../../pipes/credit-suffix.pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { EnrollmentService } from '../../services/enrollment.service';
import { Store } from '@ngrx/store';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { Observable } from 'rxjs';

// Hands-On 2: CourseCardComponent
// @Input() course - receives course data from parent (CourseListComponent)
// @Output() enrollRequested - emits course ID up to parent when Enroll clicked
// Hands-On 2: implements ngOnChanges to log input changes
// Hands-On 3: uses custom CreditSuffixPipe, HighlightDirective, *ngSwitch for grade status
// Hands-On 9: dispatches NgRx enrollment actions
@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditSuffixPipe, HighlightDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, OnChanges {
  // Hands-On 2: @Input - receives course data from parent
  @Input() course!: Course;

  // Hands-On 2: @Output - emits course.id when Enroll button clicked
  @Output() enrollRequested = new EventEmitter<number>();

  enrolledIds$!: Observable<number[]>;

  constructor(
    private enrollmentService: EnrollmentService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // Hands-On 9: Select enrolled IDs from NgRx store
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
  }

  // Hands-On 2: ngOnChanges - logs previous and current value of course input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course']) {
      const prev = changes['course'].previousValue;
      const curr = changes['course'].currentValue;
      console.log('CourseCardComponent - ngOnChanges:', {
        previousValue: prev,
        currentValue: curr
      });
    }
  }

  // Enroll or unenroll based on current state
  // Hands-On 9: dispatches NgRx actions; also uses EnrollmentService as fallback
  toggleEnroll(isCurrentlyEnrolled: boolean): void {
    if (isCurrentlyEnrolled) {
      // Unenroll
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
      this.enrollmentService.unenroll(this.course.id);
      console.log('Unenrolled from course:', this.course.id);
    } else {
      // Hands-On 2: @Output emit - parent (CourseListComponent) handles this
      this.enrollRequested.emit(this.course.id);
      // Hands-On 9: dispatch NgRx action
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      this.enrollmentService.enroll(this.course.id);
      console.log('Enrolling in course:', this.course.id);
    }
  }

  // Helper to check enrollment status (local service)
  isEnrolled(): boolean {
    return this.enrollmentService.isEnrolled(this.course.id);
  }

  // Get fill percentage for capacity bar
  getCapacityPercent(): number {
    if (!this.course.maxCapacity || !this.course.enrolledCount) return 0;
    return Math.round((this.course.enrolledCount / this.course.maxCapacity) * 100);
  }
}
