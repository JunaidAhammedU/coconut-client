import axios from "axios";
// baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL

const api_request = axios.create({
    baseURL: "https://oleaplants.shop"

})

api_request.interceptors.request.use(config =>{
    const path = config.url.split('/')[1];
    const userAuth = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;
    const adminAuth = localStorage.getItem("admin") ? JSON.parse(localStorage.getItem("admin")).token : null;
    const authToken = path === "admin" ? adminAuth : userAuth;
    config.headers.Authorization = `Bearer ${authToken}`;
    return config;
})

export default api_request;


//========================================================




// axios setup

// import axios from "axios";

// const api_request = axios.create({
//   baseURL: import.meta.env.VITE_REACT_APP_SERVER_URL,
// });

// api_request.interceptors.request.use((config) => {
//   const path = config.url.split("/")[1];
//   const userAuth = localStorage.getItem("user")
//     ? JSON.parse(localStorage.getItem("user")).token
//     : null;
//   const adminAuth = localStorage.getItem("admin")
//     ? JSON.parse(localStorage.getItem("admin")).token
//     : null;
//   const authToken = path === "admin" ? adminAuth : userAuth;
//   config.headers.Authorization = `Bearer ${authToken}`;
//   return config;
// });

// export default api_request;
