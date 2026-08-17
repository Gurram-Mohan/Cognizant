// Course interface - used across the entire Student Course Portal application
// Hands-On 6: Models/Interfaces for type safety
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  gradeStatus: 'passed' | 'failed' | 'pending';
  description?: string;
  instructor?: string;
  schedule?: string;
  category?: string;
  enrolledCount?: number;
  maxCapacity?: number;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  studentId: string;
  gpa: number;
  department: string;
  semester: number;
  enrolledCourses: number[];
  avatar?: string;
}

export interface Enrollment {
  id: number;
  studentId: number;
  courseId: number;
  enrolledDate: string;
  semester: string;
  status: 'active' | 'completed' | 'dropped';
}
