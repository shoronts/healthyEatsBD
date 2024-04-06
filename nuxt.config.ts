// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head: {
      script: [
        {
          src: '/js/swiper.js',
          defer: true
        }
      ]
    }
  },
  css:["@/assets/css/plugin.css"],
})
