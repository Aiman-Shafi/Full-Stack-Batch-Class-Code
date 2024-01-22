/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["emerald"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
