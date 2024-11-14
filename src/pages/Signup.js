import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import for navigation
import './Signup.css';

const Signup = () => {
    const [role, setRole] = useState("labour");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [area, setArea] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate(); // Initialize navigation hook

    const handleSignup = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await axios.post("http://localhost:8000/api/signup", {
                username,
                password,
                role,
                area: role === "sales_manager" ? area : "",
            });

            alert("Signup successful! Redirecting...");
            setUsername("");
            setPassword("");
            setArea("");
            setRole("labour");

            // Redirect to the appropriate dashboard based on the user's role
            switch (role) {
                case "admin":
                    navigate("/admin-dashboard");
                    break;
                case "sales_manager":
                    navigate("/sales-manager-dashboard");
                    break;
                case "labour":
                    navigate("/labour-dashboard");
                    break;
                case "hr":
                    navigate("/hr-dashboard");
                    break;
                default:
                    navigate("/");
            }
        } catch (error) {
            console.error(error);
            if (error.response && error.response.data) {
                alert(`Signup failed! ${error.response.data.message}`);
            } else {
                alert("Signup failed! Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <h2>Create an Account</h2>
                <form onSubmit={handleSignup}>
                    <select onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="admin">Admin</option>
                        <option value="sales_manager">Sales Manager</option>
                        <option value="labour">Labour</option>
                        <option value="hr">HR</option>
                    </select>
                    {role === "sales_manager" && (
                        <input
                            type="text"
                            placeholder="Area (e.g., Noida)"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                        />
                    )}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
                <p>Already have an account? <a href="/login">Log In</a></p>
            </div>
        </div>
    );
};

export default Signup;
