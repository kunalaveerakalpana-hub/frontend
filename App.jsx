import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';
import InstructorDashboard from './pages/InstructorDashboard';
import CreateCoursePage from './pages/CreateCoursePage';
import AdminCoursesPage from './pages/AdminCoursesPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Member 8 Routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />

        {/* Member 10 Routes */}
        <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
        <Route path="/create-course" element={<CreateCoursePage />} />
        <Route path="/admin" element={<AdminCoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;