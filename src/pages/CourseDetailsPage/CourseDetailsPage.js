// src/pages/CourseDetailsPage/CourseDetailsPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import courseModel from '../../data/courseModel';

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = courseModel; 

  return (
    <div className="container">
      <h1>{course.name}</h1>
      <p className="info">Instructor: {course.instructor}</p>
      <p className="info">Description: {course.description}</p>
      <p className="info">Enrollment Status: {course.enrollmentStatus}</p>
      <p className="info">Duration: {course.duration}</p>
      <p className="info">Schedule: {course.schedule}</p>
      <p className="info">Location: {course.location}</p>
      <p className="info">Prerequisites: {course.prerequisites.join(', ')}</p>
      <details>
        <summary>Syllabus</summary>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              <strong>Week {item.week}:</strong> {item.topic} - {item.content}
            </li>
          ))}
        </ul>
      </details>
    </div>
  );
};

export default CourseDetailsPage;
