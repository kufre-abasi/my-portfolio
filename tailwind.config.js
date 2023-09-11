module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi400: ["Satoshi-Regular"],
        Satoshi500: ["Satoshi-Medium"],
        Satoshi700: ["Satoshi-Bold"],
        Satoshi900: ["Satoshi-Black"],

        EBGaramond600: ["EBGaramond-Medium"],
        EBGaramond500: ["EBGaramond-Regular"],
      },
      colors: {
        primary: {
          light: "#00AFEF",
          text: "#333333",
          pink: "#DD4A6B",
        },
        brand: "#1a1a1a",
        secondary: {
          main: "#00AFEF8A",
          // light: "var(--color-secondary-light)",
          // dark: "var(--color-secondary-dark)",
          // contrastText: "var(--color-secondary-contrastText)",
        },
      },
      utilities: {
        ".tick": {
          display: "inline-block",
          width: "1.55rem",
          height: "0.5rem",
          border: "2px solid currentColor",
          borderTop: "none",
          borderRight: "none",
          transform: "rotate(-45deg)",
          marginRight: "0.25rem",
        },
      },
    },
  },
  plugins: [],
};
