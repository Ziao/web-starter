import { Configuration, DefaultApi } from "../../api";

export const api = new DefaultApi(
    new Configuration({
        basePath: import.meta.env.VITE_API_BASE,
        baseOptions: {
            // Todo: interceptors for auth
        },
    })
);
