import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Course } from '../../models/course.model';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';

// Hands-On 1: StudentProfileComponent
// Shows student info and enrolled courses
@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  // Mock student data
  student = {
    name: 'Mohan Kumar',
    studentId: 'STU2023001',
    email: 'mohan.kumar@college.edu',
    department: 'Computer Science Engineering',
    semester: 5,
    gpa: 3.8
  };

  enrolledCourses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Uses the cross-slice selector to get full Course objects for enrolled courses
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }
}
