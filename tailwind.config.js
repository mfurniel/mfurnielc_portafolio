/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        principalBlue: "#062446", // Define tu color personalizado con un nombre, como 'navyBlue'
        colorJavaScript: "#F7DF1E",
        colorPythonBlue: "#3776AB",
        colorPythonYellow: "#FFD43B",
        colorReact: "#61DAFB",
        colorPostgreSQL: "#336791",
        colorFlask: "#000000",
        colorSQL: "#E38C00",
        colorFlutter: "#02569B",
        colorDart: "#00B4AB",
        colorVue: "#42B883",
        colorSQlite: "#9E9E9E",
        colorGit: "#F1502F",
        colorGitHub: "#24292E",
        colorSlack: "#4A154B",
        colorTailwind: "#06B6D4",
        colorTypeScript: "#007ACC",
      },
    },
  },
  plugins: [],
};
