import React from "react";
import ReactDOM from "react-dom/client";
import "./css/main.scss";
import { App } from "./app.tsx";
import { firebaseApp, firebaseAuth } from "./lib/app/firebase.ts";
import { AuthProvider, FirebaseAppProvider } from "reactfire";
import { queryClient } from "./lib/app/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseApp={firebaseApp}>
            <AuthProvider sdk={firebaseAuth}>
                <QueryClientProvider client={queryClient}>
                    {/*<GoogleOAuthProvider clientId="748733629849-0042r40dac6aesgll37a3acjr304oi9d.apps.googleusercontent.com">*/}
                    <App />
                    {/*</GoogleOAuthProvider>*/}
                </QueryClientProvider>
            </AuthProvider>
        </FirebaseAppProvider>
    </React.StrictMode>
);
