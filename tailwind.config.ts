import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bekky: {
          // Muted neon palette from demo
          purple: '#5B4B8A',
          'purple-light': '#7D6BA8',
          'purple-dark': '#3D2F5C',
          'purple-neon': '#9B7FFF',
          'purple-glow': 'rgba(155, 127, 255, 0.5)',
          gold: '#FFD700',
          'gold-light': '#FFE55C',
          'gold-dark': '#B8960C',
          'gold-neon': '#FFF67E',
          'gold-glow': 'rgba(255, 246, 126, 0.5)',
          green: '#00FF41',
          'green-glow': 'rgba(0, 255, 65, 0.5)',
          white: '#FFFFFF',
          black: '#000000',
          'gray-dark': '#1A1A1A',
          gray: '#333333',
          'gray-light': '#666666',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'], // Fredoka - rounded
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'], // Staatliches - bold festival style
        body: ['var(--font-body)', 'system-ui', 'sans-serif'], // Montserrat - clean readable
        metal: ['var(--font-metal)', 'system-ui', 'sans-serif'], // Creepster - metal/horror style
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'flicker-purple': 'flicker-purple 3s infinite alternate',
        'flicker-gold': 'flicker-gold 3s infinite alternate',
        'flicker-green': 'flicker-green 3s infinite alternate',
        'pulse-neon-purple': 'pulse-neon-purple 2s ease-in-out infinite',
        'pulse-neon-gold': 'pulse-neon-gold 2s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'flicker-purple': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { 
            textShadow: '0 0 10px rgba(155, 127, 255, 0.5), 0 0 20px rgba(155, 127, 255, 0.5), 0 0 30px rgba(155, 127, 255, 0.5)',
            opacity: '1',
          },
          '20%, 24%, 55%': { 
            textShadow: '0 0 5px rgba(155, 127, 255, 0.5), 0 0 10px rgba(155, 127, 255, 0.5)',
            opacity: '0.9',
          },
        },
        'flicker-gold': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { 
            textShadow: '0 0 10px rgba(255, 246, 126, 0.5), 0 0 20px rgba(255, 246, 126, 0.5), 0 0 30px rgba(255, 246, 126, 0.5)',
            opacity: '1',
          },
          '20%, 24%, 55%': { 
            textShadow: '0 0 5px rgba(255, 246, 126, 0.5), 0 0 10px rgba(255, 246, 126, 0.5)',
            opacity: '0.9',
          },
        },
        'flicker-green': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { 
            textShadow: '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.5), 0 0 30px rgba(0, 255, 65, 0.5)',
            opacity: '1',
          },
          '20%, 24%, 55%': { 
            textShadow: '0 0 5px rgba(0, 255, 65, 0.5), 0 0 10px rgba(0, 255, 65, 0.5)',
            opacity: '0.9',
          },
        },
        'pulse-neon-purple': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(155, 127, 255, 0.5), 0 0 20px rgba(155, 127, 255, 0.5), 0 0 30px rgba(155, 127, 255, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 10px #9B7FFF, 0 0 20px #9B7FFF, 0 0 40px #9B7FFF, 0 0 80px #9B7FFF',
          },
        },
        'pulse-neon-gold': {
          '0%, 100%': { 
            boxShadow: '0 0 10px rgba(255, 246, 126, 0.5), 0 0 20px rgba(255, 246, 126, 0.5), 0 0 30px rgba(255, 246, 126, 0.5)',
          },
          '50%': { 
            boxShadow: '0 0 10px #FFF67E, 0 0 20px #FFF67E, 0 0 40px #FFF67E, 0 0 80px #FFF67E',
          },
        },
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'neon-purple-sm': '0 0 5px rgba(155, 127, 255, 0.5), 0 0 10px rgba(155, 127, 255, 0.5)',
        'neon-purple-md': '0 0 10px rgba(155, 127, 255, 0.5), 0 0 20px rgba(155, 127, 255, 0.5), 0 0 30px rgba(155, 127, 255, 0.5)',
        'neon-purple-lg': '0 0 10px #9B7FFF, 0 0 20px #9B7FFF, 0 0 40px #9B7FFF, 0 0 80px #9B7FFF',
        'neon-gold-sm': '0 0 5px rgba(255, 246, 126, 0.5), 0 0 10px rgba(255, 246, 126, 0.5)',
        'neon-gold-md': '0 0 10px rgba(255, 246, 126, 0.5), 0 0 20px rgba(255, 246, 126, 0.5), 0 0 30px rgba(255, 246, 126, 0.5)',
        'neon-gold-lg': '0 0 10px #FFF67E, 0 0 20px #FFF67E, 0 0 40px #FFF67E, 0 0 80px #FFF67E',
        'neon-green-md': '0 0 10px rgba(0, 255, 65, 0.5), 0 0 20px rgba(0, 255, 65, 0.5), 0 0 30px rgba(0, 255, 65, 0.5)',
        'neon-green-lg': '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 40px #00FF41, 0 0 80px #00FF41',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--bekky-purple-dark) 0%, var(--bekky-black) 70%)',
      }
    },
  },
  plugins: [],
};

export default config;
