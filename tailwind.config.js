module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        elements: {
          dark: "#2b3945"
        },
        background: {
          dark: "#202c37",
          light: "#fafafa"
        },
        text: {
          dark: "#111517"
        },
        input: {
          light: "#858585"
        }
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
