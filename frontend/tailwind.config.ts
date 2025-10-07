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
        forest: {
          DEFAULT: '#228B22',
          dark: '#2c5f2d',
          sage: '#8FBC8F',
          mist: '#e8f5e8',
          morning: '#f0f7f0',
        },
        ink: '#102414',
        panel: '#ffffff',
        border: '#cfe5cf',
        muted: '#3d5a42',
      },
      backgroundImage: {
        'forest-gradient': 'linear-gradient(135deg, #f0f7f0, #e8f5e8)',
        'forest-button': 'linear-gradient(135deg, #228B22, #3aa53a)',
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
export default config
