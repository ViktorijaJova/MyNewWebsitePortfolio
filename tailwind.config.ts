import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",

  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'custom': '0px 1px 2px rgba(0,255,255,0.5), 0px 2px 4px rgba(0,255,255,0.5), 0px 4px 8px rgba(0,255,255,0.5), 0px 8px 16px rgba(0,255,255,0.5)',
        'custom-white': '0px 1px 2px rgba(255,255,255,0.5), 0px 2px 4px rgba(255,255,255,0.5), 0px 4px 8px rgba(255,255,255,0.5), 0px 8px 16px rgba(255,255,255,0.5)',
        'neon-rosegold': '0px 1px 2px rgba(255, 101, 117, 0.5), 0px 2px 4px rgba(255, 101, 117, 0.5), 0px 4px 8px rgba(255, 101, 117, 0.5), 0px 8px 16px rgba(255, 101, 117, 0.5), 0px 0px 80px rgba(255, 101, 117, 0.8)',

      },
      screens: {
        smallest: "320px",
        small: "330px",
        phoneSmall: "340px",
        xxs: "356px",
        phone: "370px",
        xs: "400px",
        smallerTablet: "834px",
        phoneLarge: "450px",
        phoneS: "505px",
        heroBreakOne: "560px",
        sm: "640px",
        heroBreakTwo: "690px",
        md: "768px",
        heroBreakThree: "834px",
        lg: "1024px",
        tablet: "1194px",
        registerPopup: "1194px",
        heroBreakFour: "1250px",
        xl: "1280px",
        xlSpecial: "1430px",
        "2xl": "1620px",
      },
      colors: {
        pink: "#FFEED9",
        white: "#FFFFFF",
        black: "#1F1F1F",
        yellow: "#D7DF23",
        peachy: "#E66B5B",
        teal: "#00A79D",
        purple2: "#C77BFF",
        black2: "#3E3D3D",
        yellow2: "#C8CE3C",
        peachy2: "#C52F1B",
        teal2: "#018078",
        guyabano: "#f8f8f8",
        charcoal: "#333333",
      },
      typography: (theme:any) => ({
        DEFAULT: {
          css: [
            {
              "--tw-prose-headings": theme("colors.black"),
              color: "bleck",
              "font-size": "1rem", // 16px
              "line-height": "1.875rem", // 30px
              "max-width": "none",
              h1: {
                "font-size": "1.625rem", // 26px
                "line-height": "1.111em",
                "margin-bottom": "1.25rem", // 20px
                "font-weight": "600", // semibold
              },
              h2: {
                "font-size": "1.5rem", // 20px
                "line-height": "1.5",
                "margin-bottom": "0.25rem", //
                "margin-top": 0,
                "font-weight": "700", // normal
              },
              h3: {
                "font-size": "1.125rem", // 18px
                "margin-bottom": "0.9375rem", // 15px
              },
              p: {
                "font-size": "inherit !important", // 18px
                "line-height": "1.5",
                "margin-bottom": "2.5rem", // 40px
                "margin-top": "0 !important",
                "font-weight": "400",
              },
              ul: {
                "list-style-type": "disc",
                "padding-left": "20px",
                "margin-bottom": "1.25em",
              },
              ol: {
                "list-style-type": "decimal",
                "padding-left": "0",
                "margin-bottom": "1.25em",
              },
              "ol > li": {
                "margin-top": "0px",
              },
              "ul > li": {
                "margin-top": "0px",
                "font-weight": "400",
              },
              "ol > li::marker": {},
              "ul > li::marker": {
                "font-size": "24px",
                "line-height": "12px",
              },
              strong: {
                color: "inherit",
              },
              a: {
                "font-weight": "inherit",
                color: "inherit",
                transition: "color .3s ease-out",
                "&:hover": {
                  color: theme("colors.orange.DEFAULT"),
                },
                "&:focus": {
                  "text-decoration-style": "dotted",
                },
              },
              blockquote: {
                "font-style": "italic",
                "font-size": "1.125rem", // 18px
                "font-weight": "500", // medium
                "border-left-color": theme("colors.orange.DEFAULT"),
              },
              table: {
                "background-color": theme("colors.white.DEFAULT"),
                "line-height": "1.5",
                "& tr": {
                  border: `1px solid ${theme("colors.black.DEFAULT")}`,
                },
                "& th, & td": {
                  border: `1px solid ${theme("colors.black.DEFAULT")}`,
                  "letter-spacing": "0.05em",
                  padding: "0.75rem 1rem",
                  "font-size": "1rem",
                },
                "& td": {
                  "font-weight": "normal",
                },
              },
            },
          ],
        },
        lg: {
          css: [
            {
              "font-size": "inherit", // 16px
              "line-height": "1.875rem", // 30px
              "ol > li": {
                "margin-top": "0px",
              },
              "ul > li": {
                "margin-top": "0px",
              },
              h1: {
                "font-size": "2.25rem", // 36px
                "line-height": "1.111em",
                "margin-bottom": "1.25rem", // 20px
                "font-weight": "600", // semibold
                color: theme("colors.blue.DEFAULT"),
              },
              h2: {
                "font-size": "1.5rem", // 24px
                "line-height": "1.385em",
                "margin-bottom": "1.25rem", // 20px
                "margin-top": 0,
                "font-weight": "400", // normal
              },
              h3: {
                "font-size": "1.25rem", // 20px
                "margin-bottom": "0.9375rem", // 15px
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
