/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "330px",
      },
      backgroundImage: {
        "hero-pattern": "url('/hero-bg.jpg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      height: {
        'slide-image-height': 'calc(100vh - 2rem)',
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
