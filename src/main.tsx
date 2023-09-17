import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.scss";
import { App } from "./app.tsx";
import { queryClient } from "./lib/app/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <KindeProvider
            clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
            domain={import.meta.env.VITE_KINDE_DOMAIN}
            redirectUri={window.location.origin}
            logoutUri={window.location.origin}
            // Todo: switch to custom domain
            isDangerouslyUseLocalStorage={true}
        >
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </KindeProvider>
    </React.StrictMode>
);
