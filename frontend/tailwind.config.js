/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos en src para detectar clases de Tailwind
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
