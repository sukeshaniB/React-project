// src/pages/StudentDashboardPage/StudentDashboardPage.js
import React, { useEffect, useState } from 'react';
import { fetchEnrolledCourses } from '../../services/api';
import './StudentDashboardPage.css';

const StudentDashboardPage = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  console.log('Rendering StudentDashboardPage');
  useEffect(() => {
    // Fetch enrolled courses when the component mounts
    fetchEnrolledCourses().then((data) => {
      console.log('Enrolled courses:', data);
      setEnrolledCourses(data);
    });
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  const markCourseCompleted = (courseId) => {
    // Implement the logic to mark the course as completed (you can update backend data here)
    console.log(`Course ${courseId} marked as completed`);
  };

  return (
    <div className="container">
      <h1>Student Dashboard</h1>
      <ul className="dashboard-list">
        {enrolledCourses.map((course) => (
          <li key={course.id} className="dashboard-item">
            <div className="course-details">
              <h3>{course.name}</h3>
              <p className="info">Instructor: {course.instructor}</p>
              <p className="info">Thumbnail: {course.thumbnail}</p>
              <p className="info">Due Date: {course.dueDate}</p>
              <div className="progress-bar">
                <p className="info">Progress: {course.progress}%</p>
                <button
                  className="mark-completed"
                  onClick={() => markCourseCompleted(course.id)}
                >
                  Mark as Completed
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboardPage;
