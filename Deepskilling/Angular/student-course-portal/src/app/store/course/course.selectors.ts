import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CourseState } from './course.reducer';

// Hands-On 9: Course Selectors
// Selectors are memoised - only recompute when input selectors change (NgRx performance optimisation)

// Feature selector - selects the 'course' slice of state
export const selectCourseState = createFeatureSelector<CourseState>('course');

// Derived selectors using createSelector
export const selectAllCourses = createSelector(
  selectCourseState,
  state => state.courses
);

export const selectCoursesLoading = createSelector(
  selectCourseState,
  state => state.loading
);

export const selectCoursesError = createSelector(
  selectCourseState,
  state => state.error
);
