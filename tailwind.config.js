/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",

    "./error.vue",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#004AAD",
      red: "#F15046",
      gray: "#565656",
      green: "#12B76A",
      greendeep: "#027A48",
      yellow: "#FFC728",
      pink: "#493797",
      // black: "#000",
      // white: "#fff"
    },
  },
  plugins: [],
};

