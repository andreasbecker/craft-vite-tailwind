const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    content: ["./src/**/*.{html,js}", "./templates/**/*.twig", "./templates/**/*.html"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                one: {
                    light: "#e15b60",
                    DEFAULT: "#D9252C",
                    dark: "#9e1a1e",
                },
                two: {
                    light: "#f3f5f6",
                    DEFAULT: "#E6E9EC",
                    dark: "#cdd4da",
                },
            },
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
                serif: ['Lora', ...defaultTheme.fontFamily.serif],
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1.5rem",
                sm: "2.5rem",
            },
        },
        screens: {
            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "960px",
            // => @media (min-width: 960px) { ... }

            xl: "1024px",
            // => @media (min-width: 1024px) { ... }

            "2xl": "1280px",
            // => @media (min-width: 1280px) { ... }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
}
