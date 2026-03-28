import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";
const USER_API_URL = "http://localhost:8080/api/user";

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = (loginData) => {
    return axios.post(`${API_URL}/login`, loginData);
};

export const saveToken = (token) => {
    localStorage.setItem("token", token);
};

export const getToken = () => {
    return localStorage.getItem("token");
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};

export const isLoggedIn = () => {
    return !!getToken();
};

export const getProfile = () => {
    return axios.get(`${USER_API_URL}/profile`, {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    });
};