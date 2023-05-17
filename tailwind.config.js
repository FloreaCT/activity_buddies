/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
      },
      backgroundImage: {
        background: "url('/img/background')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
