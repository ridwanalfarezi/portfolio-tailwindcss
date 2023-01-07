/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: "#64748b",
        dark: "#0f172a",
      },
    },
  },
  plugins: [],
};
