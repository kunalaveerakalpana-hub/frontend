import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

function RegistrationPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("STUDENT");

    function handleRegister() {
        if (name && email && password) {
            const user = { name, email, password, role };
            AuthService.register(user);
            alert("Registration Successful!");
            navigate("/"); // Navigate to login page after registration
        } else {
            alert("Please fill all fields");
        }
    }

    return (
        <div>
            <h2>Registration</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br />
            <label>Register as: </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="STUDENT">Student</option>
                <option value="INSTRUCTOR">Instructor</option>
                <option value="ADMIN">Admin</option>
            </select><br /><br />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default RegistrationPage;