import Axios from "axios";
import { DefaultApi } from "../../api";

const axios = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
});

// Uncomment if you want to add a token to every request
// axios.interceptors.request.use(async (config) => {
//     const token = whereverYourTokenComesFrom()
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// });

export const api = new DefaultApi(undefined, import.meta.env.VITE_API_BASE, axios);
