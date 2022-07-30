module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      borderRadius: {
        default: "18px",
      },
      boxShadow: {
        One: "-10px 16px 8px 0px rgba(0, 0, 0, 0.24)",
        Two: "-15px 16px 4px 0px rgba(0, 0, 0, 0.24)",
        Three: "-2px 10px 20px 2px rgba(0, 0, 0, 0.15)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#0257E5",
        secondary: "#475569",
        dark: "#0F172A",
        grayText:"#B9B9B9"
      },
      backgroundImage: {
        "login-cover": "url('/src/Assets/Img/login-cover.png')",
      },
    },
  },
  plugins: [],
};
