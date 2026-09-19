module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satoshi400: ["Satoshi-Regular", "sans-serif"],
        Satoshi500: ["Satoshi-Medium", "sans-serif"],
        Satoshi700: ["Satoshi-Bold", "sans-serif"],
        Satoshi900: ["Satoshi-Black", "sans-serif"],

        EBGaramond600: ["EBGaramond-Medium", "serif"],
        EBGaramond500: ["EBGaramond-Regular", "serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
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
        },
        cyborg: {
          bg: "#030712",
          surface: "#070c18",
          card: "#0d1527",
          cardHover: "#111d35",
          border: "rgba(0, 240, 255, 0.18)",
          borderHover: "rgba(0, 240, 255, 0.55)",
          cyan: "#00f0ff",
          cyanDim: "#00b4d8",
          emerald: "#00ff9d",
          crimson: "#ff0055",
          amber: "#ffb700",
          steel: "#8fa3bf",
          muted: "#51637c",
        },
      },
      boxShadow: {
        "cyan-glow": "0 0 25px rgba(0, 240, 255, 0.35)",
        "cyan-sm": "0 0 12px rgba(0, 240, 255, 0.25)",
        "emerald-glow": "0 0 25px rgba(0, 255, 157, 0.35)",
        "card-cyber": "0 4px 25px -4px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(0, 240, 255, 0.12)",
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
