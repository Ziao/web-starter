import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import Axios from "axios";
import { DefaultApi } from "../../api";

let token: string | undefined = undefined;

const axios = Axios.create({
    baseURL: import.meta.env.VITE_API_BASE,
});

axios.interceptors.request.use(async (config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

export const api = new DefaultApi(undefined, import.meta.env.VITE_API_BASE, axios);

export const useApiTokenInterceptor = () => {
    const { isLoading, getToken } = useKindeAuth();
    if (!isLoading) getToken().then((t) => (token = t));
};
