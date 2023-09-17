import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { useApiTokenInterceptor } from "./lib/app/api.ts";
import { router } from "./lib/router.tsx";

interface AppProps {}
export const App: FC<AppProps> = ({}) => {
    useApiTokenInterceptor();
    return <RouterProvider router={router} />;
};
