import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "dark": "#1a1b1f",
      },
      height: {
        'header-sm': '460px',
        'header-md': '480px',
        'header-lg': '620px',
      },
      margin: {
        '10px': '10px', 
        '15px': '15px',
        '20px': '20px',
        '30px': '30px',
      },
      fontSize: {
        'jumbo': '64px',
        'jumbo-md': '36px',
        'jumbo-sm': '18px',
        'h1': '44px',
        'h2': '36px',
        'h3': '30px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
      },
      lineHeight: {
        'jumbo': '80px',
        'jumbo-md': '50px',
        'jumbo-sm': '32px',
        'h1': '62px',
        'h2': '50px',
        'h3': '46px',
        'h4': '38px',
        'h5': '34px',
        'h6': '28px',
      },
    },
  },
  plugins: [],
}
export default config
