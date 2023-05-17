import { FC } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/router.tsx";

interface AppProps {}
export const App: FC<AppProps> = ({}) => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <RouterProvider router={router} />
        </div>
    );
};
