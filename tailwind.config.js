/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      'primary': '#11145A',
      'secondary': '#F0F0F2',
      'tertiary': '#8198AF',
      'white': '#fff',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
};
