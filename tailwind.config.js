/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"   // incluye todos tus componentes React/Vite
  ],
  theme: {
    extend: {
      colors: {
        customBlue:'#EDF2FF',
        darkBlue:'#2F6CFE',
        lightGray:'#E9ECF9',
        white:'#FFFFFF',
        customWhite:'#f9faffff',
        backgroundColor:'#f9fafb',
    },
  },
  },
  plugins: [],
}
