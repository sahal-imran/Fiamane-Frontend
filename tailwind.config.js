/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["Open Sans", "sans-serif"],
        NunitoSans: ["Nunito Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        white: {
          main: "#FFFFFF",
          off: "#F5F5F5",
          cool: "#e6e6e6",
          dark: "#E0E4EB",
        },
        black: {
          main: "#000000",
          off: "#15181E",
          cool: "#1A1A1A",
        },
        brand: {
          main: "#FF8501",
          mainOff: "#FFB464",
          mainCool: "#FFF4E5",
          secondary: "#240046",
          tertiary: "#442769",
        },
        grey: {
          main: "#7E858B",
          off: "#3D4852",
          cool: "#F2F2F2",
          dark: "#B3B3B3",
        },
      },
    },
  },
  plugins: [],
};
