import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "480px" },

      mobile414: { max: "414px" },
      mobile375: { max: "375px" },
    },

    extend: {
      spacing: {
        section: "5rem",
        header: "5rem",
      },

      colors: {
        white: "#ffffff",
        black: "#000000",
        accent: "#c00eae",
        light: {
          site: "#f5f7f8",
          header: "#ffffff",
          submenu: "#F6F7F8",
          submenuLink: "#ffffff",
          footer: "#ffffff",
          primary: "#2F323D",
          secondary: "#67717a",
          contrast: {
            50: "#f8f9fa",
            100: "#f8f9fa",
            200: "#e9ecef",
            300: "#dee2e6",
            400: "#ced4da",
            500: "#adb5bd",
            600: "#6c757d",
            700: "#495057",
            800: "#343a40",
            900: "#212529",
          },
          overlay: "rgba(0,0,0,0.5)",
        },
        dark: {
          layoutElement: "#1b1c1f",
          site: "#30323e",
          header: "#1b1c1f",
          submenu: "#50525C",
          submenuLink: "#1b1c1f",
          footer: "#1b1c1f",
          input: "#67717A",
          primary: "#ffffff",
          primaryContrast: "#2F323D",
          secondary: "rgba(255, 255, 255, 0.85)",
          secondaryContrast: "#2F323D",
          contrast: {
            50: "#000000",
            100: "#333335",
            200: "#49494b",
            300: "#606062",
            400: "#777778",
            500: "#8e8e8f",
            600: "#a4a4a5",
            700: "#bbbbbc",
            800: "#d2d2d2",
            900: "#e9e9e9",
          },
        },

        // button
        button: "#c00eae",
        buttonContrast: "#ffffff",
        buttonHover: "#a30d94",
        buttonHoverContrast: "#ffffff",
      },

      fontFamily: {
        lora: ["var(--font-lora)"],
      },
    },

    spacing: {
      "0": "0",
      "1": "0.44rem",
      "2": "0.67rem",
      "3": "1rem",
      "4": "1.5rem",
      "5": "2.25rem",
      "6": "3.38rem",
      "7": "5.06rem",
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;
