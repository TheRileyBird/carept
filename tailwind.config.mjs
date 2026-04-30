/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {
      colors: {
        slate: {
          50: "hsl(204 33% 98%)",
          100: "hsl(204 28% 95%)",
          200: "hsl(204 23% 90%)",
          300: "hsl(206 18% 79%)",
          400: "hsl(208 14% 63%)",
          500: "hsl(210 14% 48%)",
          600: "hsl(212 21% 36%)",
          700: "hsl(214 30% 27%)",
          800: "hsl(216 40% 18%)",
          900: "hsl(218 46% 12%)",
          950: "hsl(220 54% 8%)",
        },
        skybrand: {
          50: "hsl(198 100% 97%)",
          100: "hsl(198 95% 92%)",
          200: "hsl(199 92% 84%)",
          300: "hsl(199 86% 72%)",
          400: "hsl(200 76% 60%)",
          500: "hsl(203 66% 48%)",
          600: "hsl(206 74% 39%)",
          700: "hsl(209 77% 31%)",
          800: "hsl(211 72% 24%)",
          900: "hsl(214 64% 18%)",
        },
        goldbrand: {
          50: "hsl(51 100% 96%)",
          100: "hsl(50 96% 88%)",
          200: "hsl(49 92% 79%)",
          300: "hsl(47 88% 68%)",
          400: "hsl(45 86% 58%)",
          500: "hsl(43 82% 49%)",
          600: "hsl(39 78% 42%)",
          700: "hsl(35 74% 34%)",
          800: "hsl(31 67% 27%)",
          900: "hsl(27 60% 20%)",
        },
      },
      boxShadow: {
        elevated:
          "0 24px 55px -28px hsl(207 65% 20% / 0.28), 0 10px 18px -12px hsl(213 52% 15% / 0.36)",
        card: "0 20px 45px -28px hsl(214 38% 18% / 0.18), 0 8px 16px -12px hsl(214 38% 18% / 0.22)",
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Newsreader", "ui-serif", "Georgia", "serif"],
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at top, hsl(199 92% 84% / 0.28), transparent 35%), linear-gradient(to right, hsl(204 23% 90% / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(204 23% 90% / 0.5) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "auto, 28px 28px, 28px 28px",
      },
    },
  },
  plugins: [],
};
