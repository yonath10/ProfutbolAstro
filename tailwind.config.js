/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--dark-background)",
                surface: "var(--dark-surface)",
                accent: "var(--dark-accent)",
                text: "var(--dark-text)",
                "subtle-text": "var(--dark-subtle-text)",
                border: "var(--dark-border)",
            },
            fontFamily: {
                display: ["Poppins", "sans-serif"],
            },
        },
    },
    plugins: [],
}