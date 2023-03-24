/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0e0e0e",
        dark: "#0e0e0e",
      },
      boxShadow: {
        light: "0 0 10px 0px #3b557e",
      },
      backgroundImage: () => ({
        "card-gradient":
          "linear-gradient(180deg, rgb(0, 0, 0) 27.25%, rgba(0, 0, 0, 0) 116.67%)",
      }),
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
