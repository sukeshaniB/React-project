// src/services/api.js
import courseModel from '../data/courseModel';
import enrolledCourses from '../data/enrolledCourses';

export const fetchCourses = () => {
  return Promise.resolve([courseModel]);
};

export const fetchEnrolledCourses = () => {
    console.log('Fetching enrolled courses');
  return Promise.resolve(enrolledCourses);
};
