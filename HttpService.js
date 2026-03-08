import axios from "axios";
const HttpService = axios.create({
    baseURL:"http://localhost:8080/api", 
    headers:{
        "Content-Type":"application/json"
    }
});
HttpService.interceptors.request.use(
    (config) => {
        const user=JSON.parse(localStorage.getItem("currentUser"));
        if (user&&user.token){
            config.headers.Authorization=`Bearer ${user.token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error);
    }
);
export default HttpService;
