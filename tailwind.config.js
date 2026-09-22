/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#7c3aed',     // Primary techboloy purple
          violet: '#6d28d9',     // Deep violet
          indigo: '#4f46e5',     // Indigo tech accent
          magenta: '#d946ef',    // Secondary vibrant magenta
          pink: '#ec4899',       // Pink gradient end
          navy: '#090d16',       // Ultra deep dark background
          darkcard: '#111827',   // Dark card container
          darkborder: '#1f293d', // Border for dark elements
          slate: '#0f172a',
          lavender: '#faf5ff',   // Soft background tint
          lightgray: '#f8fafc',  // Crisp light surface
          muted: '#64748b',      // Subtitle gray
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7c3aed 0%, #d946ef 100%)',
        'brand-gradient-hover': 'linear-gradient(135deg, #6d28d9 0%, #c026d3 100%)',
        'brand-gradient-subtle': 'linear-gradient(135deg, rgba(124, 58, 237, 0.08) 0%, rgba(217, 70, 239, 0.08) 100%)',
        'brand-gradient-glow': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(124, 58, 237, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(217, 70, 239, 0.12) 0px, transparent 50%)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(124, 58, 237, 0.3)',
        'glow-md': '0 0 30px -5px rgba(124, 58, 237, 0.4)',
        'glow-magenta': '0 0 30px -5px rgba(217, 70, 239, 0.4)',
        'card-soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05)',
        'card-elevated': '0 20px 40px -15px rgba(124, 58, 237, 0.08)',
      },
    },
  },
  plugins: [],
}
