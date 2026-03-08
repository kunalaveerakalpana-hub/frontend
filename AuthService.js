const AuthService = {
    // Register a new user and save to local storage [cite: 173, 174]
    register: (user) => {
        localStorage.setItem("user", JSON.stringify(user));
        return true;
    },

    // Login logic: validates email and password against stored user 
    login: (email, password) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.email === email && user.password === password) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(user));
            return user;
        }
        return null;
    },

    // Remove user session data 
    logout: () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
    },

    // Get currently logged-in user details 
    getCurrentUser: () => {
        return JSON.parse(localStorage.getItem("currentUser"));
    }
};

export default AuthService;