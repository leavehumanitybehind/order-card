/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/entities/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        greenGradient: `linear-gradient(90deg, rgba(11,145,19,1) 0%, rgba(14,193,41,1) 35%, rgba(35,221,1,1) 77%, rgba(214,232,236,1) 100%);`,
      },

      colors: {
        white: "#ffffff",
        primary: "#500fe9",
        grey1: "#f3f5f9",
        grey2: " #cfcfcf",
        grey3: "#5f5d5d",
        success: "#00b947",
        error: "#ec484a",
      },
    },
  },
  plugins: [],
};
