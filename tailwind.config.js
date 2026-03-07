/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        theme: {
          primary: "var(--theme-primary)",
          accent: "var(--theme-accent)",
          background: "var(--theme-background)",
          text: "var(--theme-text)",
        }
      }
    }

  },
  plugins: [],
};
