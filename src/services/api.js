import axios from "axios";

export const api = axios.create ({
    baseURL: "http://localhost:3000/api/v1"
})

export const userApi = axios.create ({
    baseURL: "http://localhost:3000"
})