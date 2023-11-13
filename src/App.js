// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CourseListingPage from './pages/CourseListingPage/CourseListingPage';
import CourseDetailsPage from './pages/CourseDetailsPage/CourseDetailsPage';
import StudentDashboardPage from './pages/StudentDashboardPage/StudentDashboardPage'; 


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CourseListingPage} />
        <Route path="/course/:courseId" component={CourseDetailsPage} />
        <Route path="/dashboard" component={StudentDashboardPage} /> 
      </Switch>
    </Router>
  );
};

export default App;
