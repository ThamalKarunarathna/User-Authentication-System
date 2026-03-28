import React, { useEffect, useState } from "react";
import { getProfile } from "../services/authService";

function DashboardPage() {
    const [profileMessage, setProfileMessage] = useState("");

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await getProfile();
            setProfileMessage(response.data);
        } catch (error) {
            setProfileMessage("Failed to load protected data");
        }
    };

    return (
        <div style={{ width: "500px", margin: "50px auto" }}>
            <h2>Dashboard</h2>
            <p>{profileMessage}</p>
        </div>
    );
}

export default DashboardPage;