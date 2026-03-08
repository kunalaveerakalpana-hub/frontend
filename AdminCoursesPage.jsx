import React, { useState, useEffect } from "react";

function AdminCoursesPage() {
    const [pendingCourses, setPendingCourses] = useState([]);

    useEffect(() => {
        const all = JSON.parse(localStorage.getItem("allCourses")) || [];
        setPendingCourses(all.filter(c => c.status === "PENDING"));
    }, []);

    function updateStatus(id, newStatus) {
        const all = JSON.parse(localStorage.getItem("allCourses")) || [];
        const updated = all.map(c => c.id === id ? { ...c, status: newStatus } : c);
        localStorage.setItem("allCourses", JSON.stringify(updated));
        setPendingCourses(updated.filter(c => c.status === "PENDING"));
        alert(`Course ${newStatus}`);
    }

    return (
        <div>
            <h2>Admin Approval Panel</h2>
            {pendingCourses.length === 0 ? <p>No courses pending approval.</p> : 
                pendingCourses.map(course => (
                    <div key={course.id}>
                        <span>{course.title} by {course.instructor} </span>
                        <button onClick={() => updateStatus(course.id, "APPROVED")}>Approve</button>
                        <button onClick={() => updateStatus(course.id, "REJECTED")}>Reject</button>
                    </div>
                ))
            }
        </div>
    );
}
export default AdminCoursesPage;