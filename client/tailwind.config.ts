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
      'black':'#005B41',
      'green':'#232D3F',
      'light':'#008170',
      'white':'#FFFFFF',
      'dark-green':'#0F0F0F',
      'bottle-green':'#C70039',
      'light-green':'#237A57'
    }
  },
  plugins: [],
}
export default config
