import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormArray, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Course } from '../../../../models/course.model';
import { CourseService } from '../../../../services/course.service';
import { EnrollmentService } from '../../../../services/enrollment.service';
import { CanComponentDeactivate } from '../../../../guards/unsaved-changes.guard';

// Hands-On 5: Custom Synchronous Validator
// Returns { noCourseCode: true } if control value starts with 'XX'
export function noCourseCodeValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value as string;
  if (value && value.startsWith && value.startsWith('XX')) {
    return { noCourseCode: true };
  }
  return null;
}

// Hands-On 5: Custom Async Validator
// Returns Promise that resolves after 800ms
export function simulateEmailCheck(control: AbstractControl): Promise<ValidationErrors | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      if (control.value === 'test@example.com' || (control.value as string).includes('test@')) {
        resolve({ emailTaken: true });
      } else {
        resolve(null);
      }
    }, 800);
  });
}

// Hands-On 5: Reactive Enrollment Form Component
@Component({
  selector: 'app-reactive-enrollment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './reactive-enrollment-form.component.html',
  styleUrl: './reactive-enrollment-form.component.css'
})
export class ReactiveEnrollmentFormComponent implements OnInit, CanComponentDeactivate {
  // Hands-On 5: FormGroup defines the form structure in TS
  enrollForm!: FormGroup;
  availableCourses: Course[] = [];
  submitted = false;
  successMessage = '';

  // Hands-On 5: Inject FormBuilder
  constructor(
    private fb: FormBuilder,
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Hands-On 5: Build the form
    this.enrollForm = this.fb.group({
      // sync validators array, async validators array
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [simulateEmailCheck]],
      // Includes custom sync validator
      courseCode: ['', [Validators.required, noCourseCodeValidator]], 
      courseId: [null, Validators.required],
      preferredSemester: ['Odd 2024', Validators.required],
      // Validators.requiredTrue specifically checks for checked checkbox
      agreeToTerms: [false, Validators.requiredTrue],
      // Hands-On 5: FormArray for dynamic controls
      additionalCourses: this.fb.array([]) 
    });

    // Get courses for dropdown
    this.courseService.getCourses().subscribe(courses => {
      this.availableCourses = courses;
    });
  }

  // Hands-On 7: CanDeactivate guard implementation
  canDeactivate(): boolean {
    return !this.enrollForm.dirty || this.submitted;
  }

  // Hands-On 5: Typed getter for FormArray
  // Better than casting in template because it provides compile-time type safety in TS
  get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  // Hands-On 5: Add a new FormControl to the FormArray
  addCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  // Hands-On 5: Remove a FormControl from the FormArray
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Helper getters for easier template access
  get f() { return this.enrollForm.controls; }

  onSubmit(): void {
    if (this.enrollForm.valid) {
      // Hands-On 5: Log form value (excludes disabled) and getRawValue (includes all)
      console.log('Form Value:', this.enrollForm.value);
      console.log('Raw Form Value:', this.enrollForm.getRawValue());
      
      const courseId = this.enrollForm.value.courseId;
      this.enrollmentService.enroll(courseId);
      
      this.submitted = true;
      this.successMessage = `Successfully enrolled using Reactive Forms!`;
      
      // Reset form (marks as pristine, clears values)
      setTimeout(() => {
        this.enrollForm.reset({ preferredSemester: 'Odd 2024', agreeToTerms: false });
        // Clear form array
        while (this.additionalCourses.length !== 0) {
          this.additionalCourses.removeAt(0);
        }
        this.submitted = false;
      }, 3000);
    } else {
      // Mark all as touched to trigger validation errors
      this.enrollForm.markAllAsTouched();
    }
  }
}
