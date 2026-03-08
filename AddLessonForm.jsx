import React, { useState } from "react";

function AddLessonForm({ courseId }) {
    const [lesson, setLesson] = useState({ title: "", content: "", order: 1 });

    function saveLesson() {
        const allCourses = JSON.parse(localStorage.getItem("allCourses")) || [];
        const index = allCourses.findIndex(c => c.id === courseId);
        if (index !== -1) {
            allCourses[index].lessons.push(lesson);
            localStorage.setItem("allCourses", JSON.stringify(allCourses));
            alert("Lesson added successfully!");
        }
    }

    return (
        <div style={{ border: "1px dashed gray", padding: "10px" }}>
            <h4>Add New Lesson</h4>
            <input type="text" placeholder="Lesson Title" onChange={(e) => setLesson({...lesson, title: e.target.value})} /><br/>
            <input type="number" placeholder="Order Number" onChange={(e) => setLesson({...lesson, order: e.target.value})} /><br/>
            <textarea placeholder="Content" onChange={(e) => setLesson({...lesson, content: e.target.value})} /><br/>
            <button onClick={saveLesson}>Save Lesson</button>
        </div>
    );
}
export default AddLessonForm;