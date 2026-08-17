import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError, tap, retry } from 'rxjs/operators';
import { Course } from '../models/course.model';

// Hands-On 6 & 8: CourseService
// providedIn: 'root' makes this a singleton - one instance shared across the entire application
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  // Hands-On 6: hardcoded fallback courses array (used before HTTP integration)
  private localCourses: Course[] = [
    { id: 1, name: 'Data Structures & Algorithms', code: 'CS101', credits: 4, gradeStatus: 'passed', description: 'Fundamental data structures including arrays, linked lists, trees, and graphs.', instructor: 'Dr. Priya Sharma', schedule: 'Mon, Wed, Fri - 9:00 AM', category: 'Computer Science', enrolledCount: 45, maxCapacity: 60 },
    { id: 2, name: 'Database Management Systems', code: 'CS201', credits: 3, gradeStatus: 'passed', description: 'Relational databases, SQL, normalization, transactions.', instructor: 'Prof. Rajesh Kumar', schedule: 'Tue, Thu - 11:00 AM', category: 'Computer Science', enrolledCount: 38, maxCapacity: 50 },
    { id: 3, name: 'Operating Systems', code: 'CS301', credits: 4, gradeStatus: 'pending', description: 'Process management, memory management, file systems, and concurrency.', instructor: 'Dr. Anitha Reddy', schedule: 'Mon, Wed - 2:00 PM', category: 'Computer Science', enrolledCount: 52, maxCapacity: 60 },
    { id: 4, name: 'Web Technologies', code: 'CS401', credits: 3, gradeStatus: 'pending', description: 'HTML5, CSS3, JavaScript, Angular, and modern web development frameworks.', instructor: 'Prof. Karthik Nair', schedule: 'Tue, Thu, Sat - 10:00 AM', category: 'Web Development', enrolledCount: 60, maxCapacity: 60 },
    { id: 5, name: 'Machine Learning Fundamentals', code: 'AI501', credits: 4, gradeStatus: 'failed', description: 'Supervised and unsupervised learning, neural networks.', instructor: 'Dr. Meera Patel', schedule: 'Mon, Wed, Fri - 3:00 PM', category: 'Artificial Intelligence', enrolledCount: 30, maxCapacity: 40 },
    { id: 6, name: 'Software Engineering', code: 'CS601', credits: 3, gradeStatus: 'passed', description: 'SDLC, Agile methodologies, design patterns.', instructor: 'Prof. Suresh Babu', schedule: 'Fri - 9:00 AM to 12:00 PM', category: 'Software Engineering', enrolledCount: 42, maxCapacity: 55 },
    { id: 7, name: 'Computer Networks', code: 'CS701', credits: 3, gradeStatus: 'pending', description: 'OSI model, TCP/IP protocols, routing algorithms.', instructor: 'Dr. Vijay Menon', schedule: 'Tue, Thu - 2:00 PM', category: 'Networking', enrolledCount: 35, maxCapacity: 50 },
    { id: 8, name: 'Cloud Computing', code: 'CC801', credits: 3, gradeStatus: 'pending', description: 'AWS, Azure, GCP fundamentals, serverless computing.', instructor: 'Prof. Lakshmi Iyer', schedule: 'Wed, Fri - 4:00 PM', category: 'Cloud', enrolledCount: 28, maxCapacity: 40 }
  ];

  constructor(private http: HttpClient) {}

  // Hands-On 8: GET all courses from JSON Server
  // Hands-On 8: map operator filters valid courses (credits > 0)
  // Hands-On 8: tap for side effects (logging), retry(2) for resilience, catchError for error handling
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      map(courses => courses.filter(c => c.credits > 0)), // Hands-On 8: map operator
      tap(courses => console.log('Courses loaded:', courses.length)), // Hands-On 8: tap for logging
      retry(2), // Hands-On 8: retry failed requests up to 2 times
      catchError(err => {
        console.error('Failed to load courses from API, using local data:', err);
        // Fallback to local data if JSON Server is not running
        return of(this.localCourses);
      })
    );
  }

  // Hands-On 8: GET single course by ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      tap(course => console.log('Course loaded:', course.name)),
      catchError(err => {
        console.error('Failed to load course:', err);
        const local = this.localCourses.find(c => c.id === id);
        if (local) return of(local);
        return throwError(() => new Error('Course not found'));
      })
    );
  }

  // Hands-On 8: POST - Create new course
  createCourse(course: Omit<Course, 'id'>): Observable<Course> {
    return this.http.post<Course>(this.apiUrl, course).pipe(
      tap(c => console.log('Course created:', c.name)),
      catchError(err => throwError(() => new Error('Failed to create course: ' + err.message)))
    );
  }

  // Hands-On 8: PUT - Update existing course
  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course).pipe(
      tap(c => console.log('Course updated:', c.name)),
      catchError(err => throwError(() => new Error('Failed to update course: ' + err.message)))
    );
  }

  // Hands-On 8: DELETE - Remove course
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log('Course deleted:', id)),
      catchError(err => throwError(() => new Error('Failed to delete course: ' + err.message)))
    );
  }

  // Hands-On 6: Local methods for use before HTTP integration (still used as fallback)
  getLocalCourses(): Course[] {
    return this.localCourses;
  }

  getLocalCourseById(id: number): Course | undefined {
    return this.localCourses.find(c => c.id === id);
  }

  addCourse(course: Course): void {
    this.localCourses.push(course);
  }
}
