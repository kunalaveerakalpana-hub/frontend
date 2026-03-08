import React from "react";
import AddLessonForm from "./AddLessonForm";
import './styles.css';

function InstructorDashboard() {
    const courses = JSON.parse(localStorage.getItem("allCourses")) || [];
    
    return (
        <div>
            <h2>Instructor Dashboard</h2>
            {courses.map(course => (
                <div key={course.id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                    <h3>{course.title} [Status: {course.status}]</h3>
                    <p>Lessons: {course.lessons?.length || 0}</p>
                    <AddLessonForm courseId={course.id} />
                </div>
            ))}
        </div>
    );
}
export default InstructorDashboard;