import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { theme } from "./lib/app/theme.ts";
import { queryClient } from "./lib/app/queryClient.ts";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme} resetCSS={true}>
                <App />
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
