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
      'dark': 'hsl(249, 10%, 26%)',
      'gray': 'hsl(246, 25%, 77%)'
    }
  },
  plugins: [],
}
export default config
