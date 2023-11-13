// src/components/CourseList/CourseItem.js
import React from 'react';
import { Link } from 'react-router-dom';

const CourseItem = ({ course }) => {
  return (
    <div className="course-item">
      <h3>{course.name}</h3>
      <p className="info">Instructor: {course.instructor}</p>
      <p className="info">Enrollment Status: {course.enrollmentStatus}</p>
      <Link to={`/course/${course.id}`} className="view-details">
        View Details
      </Link>
    </div>
  );
};

export default CourseItem;
