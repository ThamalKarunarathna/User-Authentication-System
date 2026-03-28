import React, { useState } from "react";
import { loginUser, saveToken } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await loginUser(formData);
            const token = response.data.token;

            saveToken(token);
            setMessage("Login successful");

            setTimeout(() => {
                navigate("/dashboard");
            }, 500);
        } catch (error) {
            setMessage(
                error.response?.data?.message || "Invalid email or password"
            );
        }
    };

    return (
        <div style={{ width: "400px", margin: "50px auto" }}>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
                />

                <button type="submit">Login</button>
            </form>

            {message && <p>{message}</p>}

            <p>
                Don’t have an account? <Link to="/register">Register</Link>
            </p>
        </div>
    );
}

export default LoginPage;