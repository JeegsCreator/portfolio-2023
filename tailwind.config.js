/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'white-opacity': '#fffc'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'sans': ['Arimo', 'sans-serif']
      },
      spacing: {
        'pt': '1px',
        'center-box': 'calc(50% - 2.5rem)',
      },
      backgroundImage: {
        'point-gradient': "url(./src/assets/gradient-background.png)"
      }
    }
  },
  plugins: [],
}

