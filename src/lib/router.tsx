import { createBrowserRouter } from "react-router-dom";
import { Home } from "../components/pages/home.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);
