
import React, { useEffect, useState } from 'react';
import CourseItem from '../../components/CourseList/CourseItem';
import { fetchCourses } from '../../services/api';

const CourseListingPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    fetchCourses().then((data) => setCourses(data));
  }, []);

  return (
    <div className="container">
      <h1>Course Listing Page</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseListingPage;
