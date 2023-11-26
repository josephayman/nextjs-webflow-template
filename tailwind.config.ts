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
        '25px': '25px', 
        '30px': '30px',
        '80px': '80px', 
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
        'p': '16px',
        'p-sm': '14px',
        'p-xs': '12px',
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
        'p': '28px',
        'p-sm': '26px',
        'p-xs': '20px',
      },
      letterSpacing: {
        '1px': '1px', 
      },
      screens: {
        'mobile': '478px',
        'mobile-landscape': '767px',
        'tablet': '991px',
      },
    },
  },
  plugins: [],
}
export default config
