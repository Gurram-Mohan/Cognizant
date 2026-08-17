import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { EnrollmentService } from '../../services/enrollment.service';
import { enrollInCourse, unenrollFromCourse } from '../../store/enrollment/enrollment.actions';
import { selectEnrolledIds } from '../../store/enrollment/enrollment.selectors';
import { CreditSuffixPipe } from '../../pipes/credit-suffix.pipe';

// Hands-On 7: CourseDetailComponent - uses ActivatedRoute to read route params
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, CreditSuffixPipe],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  course: Course | null = null;
  loading = true;
  error: string | null = null;
  enrolledIds$!: Observable<number[]>;
  private paramSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService,
    private store: Store,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.enrolledIds$ = this.store.select(selectEnrolledIds);
    
    // Hands-On 7: Read :id from route param map
    this.paramSub = this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.fetchCourseDetail(parseInt(idParam, 10));
      } else {
        this.error = 'Invalid course ID';
        this.loading = false;
      }
    });
  }

  ngOnDestroy(): void {
    this.paramSub?.unsubscribe();
  }

  fetchCourseDetail(id: number): void {
    this.loading = true;
    this.error = null;
    
    this.courseService.getCourseById(id).subscribe({
      next: (data) => {
        this.course = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Course not found or failed to load. ' + err.message;
        this.loading = false;
      }
    });
  }

  toggleEnroll(isCurrentlyEnrolled: boolean): void {
    if (!this.course) return;
    
    if (isCurrentlyEnrolled) {
      this.store.dispatch(unenrollFromCourse({ courseId: this.course.id }));
      this.enrollmentService.unenroll(this.course.id);
    } else {
      this.store.dispatch(enrollInCourse({ courseId: this.course.id }));
      this.enrollmentService.enroll(this.course.id);
    }
  }
  
  goBack(): void {
    this.location.back();
  }
}
