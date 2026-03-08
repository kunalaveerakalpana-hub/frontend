import axios from "axios";

// Axios wrapper to handle API requests [cite: 175]
const HttpService = axios.create({
    baseURL: "http://localhost:8080/api", // Base URL for microservices
    headers: {
        "Content-Type": "application/json"
    }
});

// Interceptor to attach a token to every request if needed [cite: 175]
HttpService.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token) {
            config.headers.Authorization = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default HttpService;