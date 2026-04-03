import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        surface: '#111614',
        'surface-2': '#2a3230',
        cyan: '#FFCC00',
        'cyan-dim': 'rgba(255,204,0,0.12)',
        green: '#FFCC00',
        red: '#FF2D55',
        dim: '#52525B',
      },
      fontFamily: {
        mono: ['var(--font-ibm-mono)', 'Courier New', 'monospace'],
        display: ['var(--font-chakra)', 'sans-serif'],
      },
      boxShadow: {
        'cyan': '0 0 20px rgba(255,204,0,0.3)',
        'cyan-lg': '0 0 40px rgba(255,204,0,0.2)',
        'green': '0 0 20px rgba(255,204,0,0.3)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'scan': 'scan 6s linear infinite',
        'flicker': 'flicker 8s infinite',
        'pulse-cyan': 'pulse-cyan 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-cyan': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(255,204,0,0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(255,204,0,0.6)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
