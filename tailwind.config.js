/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
    theme: {
        container: {
            center: true,
        },
        extend: {},
    },
    daisyui: {
        themes: [
            // Extending an existing theme: https://daisyui.com/docs/themes/#-7
            "light", // first one will be the default theme
        ],
    },
};
