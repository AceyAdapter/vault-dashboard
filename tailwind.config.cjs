module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        vaultTheme: {
          "primary": "#2D2D2D",
          "secondary": "#7D7D7D",
          "accent": "#FFC700",
          "neutral": "#1C1C1C",
          "base-100": "#212121",
          "info": "#53C0F3",
          "success": "#1BB66C",
          "warning": "#E27729",
          "error": "#E24056",
        }
      }
    ],
  },
}
