/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/views/app.blade.php}",
    "./resources/js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors : {
            red : "#C53535"
        },
    },
  },
  plugins: [],
}

