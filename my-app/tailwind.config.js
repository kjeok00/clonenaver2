/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens : {
        DEFAULT : '1280px'
      }
    },
    container: {
      center: true,
      screens : {
       DEFAULT : '1280px'
      },
      padding : '2rem'
    },
  },
  plugins: [],
};