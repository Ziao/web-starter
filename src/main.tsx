import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.scss";
import { App } from "./app.tsx";
import { queryClient } from "./lib/app/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);
