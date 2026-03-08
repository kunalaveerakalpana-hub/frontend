const AuthService={
    register:(user)=>{
        localStorage.setItem("user",JSON.stringify(user));
        return true;
    },
    login:(email,password)=>{
        const user=JSON.parse(localStorage.getItem("user"));
        if (user&&user.email===email&&user.password===password){
            localStorage.setItem("isLoggedIn","true");
            localStorage.setItem("currentUser",JSON.stringify(user));
            return user;
        }
        return null;
    },
    logout:()=>{
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
    },
    getCurrentUser:()=>{
        return JSON.parse(localStorage.getItem("currentUser"));
    }
};
export default AuthService;
