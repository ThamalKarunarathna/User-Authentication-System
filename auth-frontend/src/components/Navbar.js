import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn, logoutUser } from "../services/authService";

function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate("/login");
    };

    return (
        <nav style={{ padding: "15px", borderBottom: "1px solid #ccc", marginBottom: "20px" }}>
            <Link to="/dashboard" style={{ marginRight: "15px" }}>Dashboard</Link>

            {!isLoggedIn() ? (
                <>
                    <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
                    <Link to="/register">Register</Link>
                </>
            ) : (
                <button onClick={handleLogout}>Logout</button>
            )}
        </nav>
    );
}

export default Navbar;