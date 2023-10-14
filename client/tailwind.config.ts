import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors:{
      'black':'#000000',
      'green':'#0A322A',
      'light':'#FE5050',
      'white':'#FFFFFF',
      'dark-green':'#01201A',
      'bottle-green':'#23AB99',
      'light-green':'#237A57'
    }
  },
  plugins: [],
}
export default config
