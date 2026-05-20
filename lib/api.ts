import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers:{
        "Content-Type":"application/json",
    },
});

// interceptor is like a security guard
//  request is to tell interceptor only for outgoing requests 
//  use is used to register funcs that process the request. takes 2 functions one for success and other for errors

api.interceptors.request.use(
    // success handler
    // config contains url, data, headers
  (config) => {
    // window should be browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      if (token) {
        // sends token to backend
        // django backend reads this and knows user is authorised
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
// CRITICALLY IMPORTANT
    return config;
  },
//   Error handler
  (error) => {
    return Promise.reject(error);
  }
);

export default api;