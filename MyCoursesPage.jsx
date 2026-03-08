import React,{useState,useEffect}from "react";
import './styles.css';
function MyCoursesPage(){
    const [myCourses,setMyCourses]=useState([]);
    useEffect(()=>{
        const savedCourses=JSON.parse(localStorage.getItem("mycourses"))||[];
        setMyCourses(savedCourses);
    }, []);
    function updateStatus(courseId, newStatus){
        const updated=myCourses.map(c => 
            c.id===courseId ?{...c, progressStatus: newStatus}:c
        );
        setMyCourses(updated);
        localStorage.setItem("mycourses", JSON.stringify(updated));
    }
    return(
        <div>
            <h2>My Learning Dashboard</h2>
            {myCourses.length===0?(
                <p>You haven't enrolled in any courses yet.</p>
            ):(
                myCourses.map((course)=>(
                    <div key={course.id} style={ border:"1px solid black",padding:"15px",margin:"10px 0"}}>
                        <h3>{course.title}</h3>
                        <p>Enrolled on:{course.enrollDate}</p>
                        <p>
                            Status:<span style={{ 
                                padding:"5px", 
                                background:course.progressStatus==="COMPLETED"?"green":"orange",
                                color:"white",
                                borderRadius:"5px"
                            }}>
                                {course.progressStatus}
                            </span>
                        </p>
                        <label>Update Progress:</label>
                        <select 
                            value={course.progressStatus} 
                            onChange={(e)=>updateStatus(course.id,e.target.value)}
                        >
                            <option value="ENROLLED">Enrolled</option>
                            <option value="IN_PROGRESS">In Progress</option>
                            <option value="COMPLETED">Completed</option>
                        </select>
                    </div>
                ))
            )}
        </div>
    );
}
export default MyCoursesPage;
