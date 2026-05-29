import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B7A64',
        accent: '#D6FF7A',
        surface: '#0F172A',
        muted: '#94A3B8',
        card: '#111827'
      },
      boxShadow: {
        soft: '0 22px 80px rgba(15, 23, 42, 0.18)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(40, 199, 111, 0.22), transparent 40%), linear-gradient(180deg, rgba(15,23,42,1) 0%, rgba(14, 25, 40, 0.95) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
