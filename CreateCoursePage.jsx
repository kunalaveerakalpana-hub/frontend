import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateCoursePage() {
    const [course, setCourse] = useState({ title: "", description: "", category: "FSD" });
    const navigate = useNavigate();

    function handleCreate() {
        const allCourses = JSON.parse(localStorage.getItem("allCourses")) || [];
        const newCourse = {
            ...course,
            id: Date.now(),
            status: "PENDING", // FR-01: Starts as pending
            instructor: "Current Instructor",
            lessons: []
        };
        allCourses.push(newCourse);
        localStorage.setItem("allCourses", JSON.stringify(allCourses));
        alert("Course created and sent for Admin approval!");
        navigate("/instructor-dashboard");
    }

    return (
        <div>
            <h2>Create New Course</h2>
            <input type="text" placeholder="Course Title" onChange={(e) => setCourse({...course, title: e.target.value})} /><br/>
            <textarea placeholder="Description" onChange={(e) => setCourse({...course, description: e.target.value})} /><br/>
            <select onChange={(e) => setCourse({...course, category: e.target.value})}>
                <option value="FSD">Full Stack</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
            </select><br/>
            <button onClick={handleCreate}>Submit Course</button>
        </div>
    );
}
export default CreateCoursePage;