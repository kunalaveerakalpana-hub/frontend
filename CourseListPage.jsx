import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CourseListPage() {
    const navigate = useNavigate();
    
    // Simulated list of APPROVED courses (Member 2's backend provides this)
    const courses = [
        { id: 1, title: "React Basics", category: "Frontend" },
        { id: 2, title: "Spring Boot Microservices", category: "Backend" },
        { id: 3, title: "MySQL Database Design", category: "Database" },
        { id: 4, title: "Full Stack Development", category: "FSD" }
    ];

    const [filter, setFilter] = useState("All");

    const filteredCourses = filter === "All" 
        ? courses 
        : courses.filter(c => c.category === filter);

    function handleEnrollClick(course) {
        // Navigates to the enrollment page with course data
        navigate("/enroll", { state: course });
    }

    return (
        <div>
            <h2>Approved Courses</h2>
            <label>Filter by Category: </label>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Database">Database</option>
            </select>

            <div style={{ marginTop: "20px" }}>
                {filteredCourses.map((course) => (
                    <div key={course.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
                        <h3>{course.title}</h3>
                        <p>Category: {course.category}</p>
                        <button onClick={() => handleEnrollClick(course)}>Enroll Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseListPage;