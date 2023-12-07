import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                minH: "100dvh",
            },
        },
    },
    colors: {
        primary: {
            50: "#ebedff",
            100: "#c7cdee",
            200: "#a3acdd",
            300: "#7e8bce",
            400: "#5a69be",
            500: "#4150a5",
            600: "#313e81",
            700: "#222c5d",
            800: "#131b3a",
            900: "#040919",
        },
    },
    components: {
        // Button: {
        //     baseStyle: {
        //         borderRadius: "full",
        //     },
        // },
    },
});
