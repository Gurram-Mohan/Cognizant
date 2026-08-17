import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from './course.service';

// Hands-On 6: EnrollmentService
// providedIn: 'root' - singleton service demonstrating hierarchical DI
@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  // Hands-On 6: private enrollment state
  private enrolledCourseIds: number[] = [1, 2, 4]; // Pre-enrolled for demo

  // Hands-On 6: service-to-service injection - CourseService injected into EnrollmentService
  constructor(private courseService: CourseService) {}

  // Hands-On 6: enroll a student in a course
  enroll(courseId: number): void {
    if (!this.isEnrolled(courseId)) {
      this.enrolledCourseIds.push(courseId);
      console.log(`Enrolled in course: ${courseId}`);
    }
  }

  // Hands-On 6: unenroll a student from a course
  unenroll(courseId: number): void {
    this.enrolledCourseIds = this.enrolledCourseIds.filter(id => id !== courseId);
    console.log(`Unenrolled from course: ${courseId}`);
  }

  // Hands-On 6: check if enrolled in a course
  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIds.includes(courseId);
  }

  // Hands-On 6: get all enrolled courses (resolves IDs to full Course objects via CourseService)
  getEnrolledCourses(): Course[] {
    const allCourses = this.courseService.getLocalCourses();
    return allCourses.filter(c => this.enrolledCourseIds.includes(c.id));
  }

  // Get enrolled course IDs
  getEnrolledCourseIds(): number[] {
    return [...this.enrolledCourseIds];
  }

  getEnrollmentCount(): number {
    return this.enrolledCourseIds.length;
  }
}
