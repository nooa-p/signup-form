import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'red': 'hsl(0, 100%, 74%)',
      'blue': 'hsl(248, 32%, 49%)',
      'green': 'hsl(154, 59%, 51%)',
      'dark': {
        'DEFAULT': 'hsl(249, 10%, 26%)',
        'light': 'hsl(249, 10%, 55%)'
      },
      'gray': {
        'DEFAULT': 'hsl(246, 25%, 77%)',
        'light': 'hsl(246, 25%, 89%)'
      },
      'white': 'rgb(255 255 255)'
    },

    extend: {
      boxShadow: {
        'DEFAULT': '0 6px 1px 0 rgba(0, 0, 0, 0.15)',
        'sm': '0 2px 1px 0 hsl(154, 59%, 49%)'
      }
    }
  },
  plugins: [],
}
export default config
