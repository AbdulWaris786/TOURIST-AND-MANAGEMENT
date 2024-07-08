/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'globe-layer3-home':"url('/assets/images/home/layer-3-globe.png')",
        'worldMap-layer4-home':"url('/assets/images/home/world-map-layer-4 - Copy.png')",
        'destination-layer-one':'url("/assets/images/Destination/Destination-layer-1.png")',
        'form-header-image':'url(/assets/images/forms/layer-image-1.png)'
      }
    },
  },
  plugins: [],
}

