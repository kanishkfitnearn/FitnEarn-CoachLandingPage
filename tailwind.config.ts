import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        floating: "floating 3s ease-in-out infinite",
      },
      keyframes: {
        floating: {
          "0%": { transform: "translate(0, 0px)" },
          "50%": { transform: "translate(0, 25px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(to right , #D843151F 0%, #FFC1071F 100%)',
        'custom-gradient2': 'linear-gradient(126.89deg, #DB2777 -67.19%, #F97316 203.32%)',
        "custom-gradient-3": 
        "linear-gradient(126.89deg, rgba(219, 39, 119, 0.12) -67.19%, rgba(249, 115, 22, 0.12) 203.32%)",
        'custom-gradient4': 'linear-gradient(121.18deg, #DB2777 10.59%, #DA5F09 81.29%)',
      },
      // colors: {
      //   background: "hsl(var(--background))",
      //   foreground: "hsl(var(--foreground))",
      //   card: {
      //     DEFAULT: "hsl(var(--card))",
      //     foreground: "hsl(var(--card-foreground))",
      //   },
      //   popover: {
      //     DEFAULT: "hsl(var(--popover))",
      //     foreground: "hsl(var(--popover-foreground))",
      //   },
      //   primary: {
      //     DEFAULT: "hsl(var(--primary))",
      //     foreground: "hsl(var(--primary-foreground))",
      //   },
      //   secondary: {
      //     DEFAULT: "hsl(var(--secondary))",
      //     foreground: "hsl(var(--secondary-foreground))",
      //   },
      //   muted: {
      //     DEFAULT: "hsl(var(--muted))",
      //     foreground: "hsl(var(--muted-foreground))",
      //   },
      //   accent: {
      //     DEFAULT: "hsl(var(--accent))",
      //     foreground: "hsl(var(--accent-foreground))",
      //   },
      //   destructive: {
      //     DEFAULT: "hsl(var(--destructive))",
      //     foreground: "hsl(var(--destructive-foreground))",
      //   },
      //   // border: "hsl(var(--border))",
      //   // input: "hsl(var(--input))",
      //   ring: "hsl(var(--ring))",
      //   chart: {
      //     1: "hsl(var(--chart-1))",
      //     2: "hsl(var(--chart-2))",
      //     3: "hsl(var(--chart-3))",
      //     4: "hsl(var(--chart-4))",
      //     5: "hsl(var(--chart-5))",
      //   },
      // },
      // borderRadius: {
        
      // },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;