/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#fc8893",

          "secondary": "#4392ba",

          "accent": "#39d321",

          "neutral": "#2D2438",

          "base-100": "#2D2D39",

          "info": "#2A71D5",

          "success": "#3ED0A2",

          "warning": "#F6BC6A",

          "error": "#E44A3F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}