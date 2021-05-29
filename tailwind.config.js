module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      1: "0.063rem",
      2: "0.25rem",
      3: "0.5rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
    },
    extend: {
      spacing: {
        7: "3.75rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
