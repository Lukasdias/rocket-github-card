/* 
  Explore configuration options docs https://tailwindcss.com/docs/configuration#configuration-options
  Or check the default configuration https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
*/

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'rocket-bg': "#000000",
        'rocket-bg-card': '#0E1218',
        'rocket-card-text': '#F1F1F1',
        'rocket-img-profile': '#8257e5',
        'rocket-card-button': '#FFF',
        'rocket-card-button-border': '#1A1A1A'
      }
    }
  },
  plugins: []
}
