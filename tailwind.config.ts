import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B1F3A",
          deep: "#071526",
        },
        cyan: {
          DEFAULT: "#2BB3FF",
          soft: "#7DD3FF",
        },
        foam: "#F4F8FC",
        ink: "#0E243B",
        muted: "#5B6B7C",
        wa: "#25D366",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        nova: "0 18px 50px rgba(11, 31, 58, 0.14)",
      },
      backgroundImage: {
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(43,179,255,0.22), transparent 55%), linear-gradient(135deg, #F4F8FC 0%, #E8F4FC 45%, #D6ECFA 100%)",
        "navy-wave":
          "linear-gradient(180deg, #0B1F3A 0%, #071526 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
