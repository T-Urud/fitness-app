/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundGrad: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(252,107,3,1) 0%, rgba(244,244,244,1) 66%, rgba(255,255,255,1) 100%)",
      },
      boxShadow: {
        "custom-grey": "0px 0px 13px 0px grey",
      },
    },
  },
  plugins: [],
};
