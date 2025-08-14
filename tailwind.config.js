import { colors } from "./src/styles/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-orange-base",
    "bg-orange-dark",
    "text-orange-base",
    "text-orange-dark",
    "border-orange-base",
    "border-orange-dark",
    "text-white",

    "text-action-md",
    "text-action-sm",
    "text-title-lg",
    "text-title-md",
    "text-title-sm",
    "text-subtitle",
    "text-body-md",
    "text-body-sm",
    "text-body-xs",
    "text-label-md",
    "text-label-sm",

    "font-dm-sans",
    "font-poppins",

    "focus:ring-orange-base",
    "hover:bg-orange-dark",
    "hover:text-orange-dark",
    "hover:border-orange-dark",
    "bg-shape-shape",
    "text-gray-300",
    "hover:text-orange-base",

    "bg-shape-white",
    "border-shape-shape",
    "hover:border-orange-base",
    "focus:ring-orange-base",
    "text-body-sm",
    "animate-in",
    "fade-in-0",
    "zoom-in-95",
  ],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ["DM Sans", "system-ui", "sans-serif"],
        poppins: ["Poppins", "system-ui", "sans-serif"],
      },
      fontSize: {
        "title-lg": ["1.75rem", { lineHeight: "1.2", fontWeight: "700" }],
        "title-md": ["1.5rem", { lineHeight: "1.2", fontWeight: "700" }],
        "title-sm": ["1.125rem", { lineHeight: "1.2", fontWeight: "700" }],

        subtitle: ["1rem", { lineHeight: "1.2", fontWeight: "600" }],

        "body-md": ["1rem", { lineHeight: "1.2", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.2", fontWeight: "400" }],
        "body-xs": ["0.75rem", { lineHeight: "1.2", fontWeight: "400" }],

        "label-md": [
          "0.75rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
            textTransform: "uppercase",
          },
        ],
        "label-sm": [
          "0.625rem",
          {
            lineHeight: "1.2",
            fontWeight: "500",
            textTransform: "uppercase",
          },
        ],

        "action-md": ["1rem", { lineHeight: "1.2", fontWeight: "500" }],
        "action-sm": ["0.875rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
      colors: colors,
    },
  },
  plugins: [],
};
