/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        lead: "#f8cf27",
        text: "#000000",
        footer: "#2A2A2A",
        section: "#F5F5F5",
        overlay: "rgba(0, 73, 71, 0.30)",
        white: "#fff",
      },
      fontFamily: {
        sharp: ["Sharp", "Helvetica"],
        sharp_bold: ["Sharp-Bold", "Helvetica"],
        tanker: ["Tanker", "Helvetica"],
      },
    },
  },
  plugins: [],
};
