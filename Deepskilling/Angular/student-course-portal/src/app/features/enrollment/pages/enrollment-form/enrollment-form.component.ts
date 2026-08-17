import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Course } from '../../../../models/course.model';
import { CourseService } from '../../../../services/course.service';
import { EnrollmentService } from '../../../../services/enrollment.service';

// Hands-On 4: Template-Driven Enrollment Form
@Component({
  selector: 'app-enrollment-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './enrollment-form.component.html',
  styleUrl: './enrollment-form.component.css'
})
export class EnrollmentFormComponent implements OnInit {
  // Form model
  enrollmentModel = {
    studentName: '',
    studentId: '',
    email: '',
    courseId: null as number | null,
    semester: 'Odd 2024',
    agreeToTerms: false
  };

  availableCourses: Course[] = [];
  submitted = false;
  successMessage = '';

  constructor(
    private courseService: CourseService,
    private enrollmentService: EnrollmentService
  ) {}

  ngOnInit(): void {
    // Get courses for dropdown
    this.courseService.getCourses().subscribe(courses => {
      this.availableCourses = courses;
    });
  }

  // Hands-On 4: Submit handler
  onSubmit(form: any): void {
    if (form.valid && this.enrollmentModel.courseId) {
      console.log('Form Submitted!', this.enrollmentModel);
      
      // Perform enrollment
      this.enrollmentService.enroll(this.enrollmentModel.courseId);
      
      this.submitted = true;
      this.successMessage = `Successfully enrolled in course ID: ${this.enrollmentModel.courseId}`;
      
      // Reset form after submission
      setTimeout(() => {
        form.resetForm({ semester: 'Odd 2024', agreeToTerms: false });
        this.submitted = false;
      }, 3000);
    }
  }
}
