import axios from "axios";

// define the base url for the API
const baseURL =  "https://gasbooking-backend.onrender.com/api/v1/";
const instance = axios.create({
    baseURL,
    timeout:5000,
    headers: {
        "Content-Type": "application/json",
    },
});

const protectedInstance = axios.create({
    baseURL,
    timeout:5000,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

export {instance, protectedInstance};