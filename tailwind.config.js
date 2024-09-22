/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principalBlue: "#062446", // Define tu color personalizado con un nombre, como 'navyBlue'
      },
    },
  },
  plugins: [],
};
