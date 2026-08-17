import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesLoading, selectCoursesError } from '../../store/course/course.selectors';
import { EnrollmentService } from '../../services/enrollment.service';

// Hands-On 3: CourseListComponent
// Uses *ngIf, *ngFor, *ngSwitch, ngClass, ngStyle directives
// Hands-On 9: uses NgRx store - dispatch loadCourses, select via async pipe
@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, FormsModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit, OnDestroy {
  // Hands-On 3: isLoading boolean for *ngIf loading spinner
  isLoading = true;

  // Hands-On 9: Observables from NgRx store
  courses$!: Observable<Course[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  // Hands-On 2: selectedCourseId - updated when onEnroll is called
  selectedCourseId: number | null = null;

  // Filter state
  searchQuery = '';
  selectedCategory = 'All';
  selectedStatus = 'All';
  categories = ['All', 'Computer Science', 'Web Development', 'Artificial Intelligence', 'Software Engineering', 'Networking', 'Cloud'];
  statuses = ['All', 'passed', 'failed', 'pending'];

  // View mode
  viewMode: 'grid' | 'list' = 'grid';

  constructor(
    private store: Store,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Hands-On 9: Select from NgRx store (courses render via async pipe)
    this.courses$ = this.store.select(selectAllCourses);
    this.loading$ = this.store.select(selectCoursesLoading);
    this.error$ = this.store.select(selectCoursesError);

    // Hands-On 9: Dispatch loadCourses action on page load
    // Effect fires HTTP -> loadCoursesSuccess dispatched -> reducer updates state -> selector emits -> component re-renders
    this.store.dispatch(loadCourses());
    console.log('CourseListComponent: dispatched loadCourses action');

    // Hands-On 3: *ngIf loading spinner - isLoading = true initially,
    // set to false after 1.5 seconds using setTimeout in ngOnInit
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }

  ngOnDestroy(): void {
    console.log('CourseListComponent destroyed');
  }

  // Hands-On 2: @Output handler - called when child CourseCardComponent emits enrollRequested
  onEnroll(courseId: number): void {
    console.log('Enrolling in course:', courseId);
    this.selectedCourseId = courseId;
    this.enrollmentService.enroll(courseId);
  }

  // Filter courses by search query, category, and status
  filterCourses(courses: Course[]): Course[] {
    return courses.filter(course => {
      const matchesSearch = !this.searchQuery ||
        course.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        (course.instructor || '').toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || course.category === this.selectedCategory;
      const matchesStatus = this.selectedStatus === 'All' || course.gradeStatus === this.selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }

  toggleView(): void {
    this.viewMode = this.viewMode === 'grid' ? 'list' : 'grid';
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
