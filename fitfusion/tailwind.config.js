/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        metal: '#2e2e2e', //El metal para los fondos
        greenlight: '#7FFF00', //El verde claro para los fondos
        bluelight: '#10B9E0', //El azul para los headers, menus
        darkText: '#08232C', //azul oscuro para los textos
        greenButton: '#46C432', //El verde para los botones
        whiteText: '#FFFFFF',  //El blanco para los textos
        black: '#000000',
      },
    },
  },
  plugins: [],
}