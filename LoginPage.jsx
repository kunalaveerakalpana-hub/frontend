import React, {useState}from "react";
import {useNavigate}from "react-router-dom";
import AuthService from "../services/AuthService";
import './styles.css';
function LoginPage(){
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [role, setRole]=useState("STUDENT");
    function handleLogin(){
        const user=AuthService.login(email,password);
        if (user){
            navigate("/courses");
        } 
        else{
            alert("Invalid email or password. Please register first.");
        }
    }
    return(
        <div>
            <h2>Login Page</h2>
            <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
            <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
            <label>Login as:</label>
            <select value={role} onChange={(e)=>setRole(e.target.value)}>
                <option value="STUDENT">Student</option>
                <option value="INSTRUCTOR">Instructor</option>
                <option value="ADMIN">Admin</option>
            </select><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
export default LoginPage;
