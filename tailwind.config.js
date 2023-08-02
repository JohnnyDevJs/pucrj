/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-montserrat)',
        alt: 'var(--font-gelasio)',
      },
      colors: {
        gray: {
          50: '#eeeeee',
          100: '#e5e5e5',
          200: '#cacaca',
          300: '#545454',
          400: '#4c4c4c',
          500: '#434343',
          600: '#3f3f3f',
          700: '#323232',
          800: '#262626',
          900: '#1d1d1d',
        },
      },
    },
  },
  plugins: [],
}
