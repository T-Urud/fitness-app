/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-grey": "0px 0px 13px 0px grey",
      },
    },
  },
  plugins: [],
};
