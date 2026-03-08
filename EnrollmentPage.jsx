import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EnrollmentPage() {
    const { state } = useLocation(); // Receives course data from CourseListPage
    const navigate = useNavigate();

    function confirmEnrollment() {
        const myCourses = JSON.parse(localStorage.getItem("mycourses")) || [];
        
        // Prevent duplicate enrollments (Logic from FR-03)
        if (myCourses.find(c => c.id === state.id)) {
            alert("You are already enrolled in this course!");
            navigate("/mycourses");
            return;
        }

        const newEnrollment = {
            ...state,
            enrollDate: new Date().toLocaleDateString(),
            progressStatus: "ENROLLED" // Default initial status (FR-03)
        };

        myCourses.push(newEnrollment);
        localStorage.setItem("mycourses", JSON.stringify(myCourses));
        
        alert(`Successfully enrolled in ${state.title}!`);
        navigate("/mycourses");
    }

    return (
        <div>
            <h2>Confirm Enrollment</h2>
            {state ? (
                <div>
                    <p>Course: <strong>{state.title}</strong></p>
                    <p>Are you sure you want to enroll?</p>
                    <button onClick={confirmEnrollment}>Confirm and Join</button>
                    <button onClick={() => navigate("/courses")}>Cancel</button>
                </div>
            ) : (
                <p>No course selected. Please go back to the course list.</p>
            )}
        </div>
    );
}

export default EnrollmentPage;