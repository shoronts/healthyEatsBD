// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app:{
    head: {
      title: "Helthy Eats BD",
      titleTemplate: "%s | Helthy Eats BD",
      script: [
        {
          src: '/js/swiper.js',
          defer: true
        }
      ]
    }
  },
  css:["@/assets/css/plugin.css"],
  modules: ['nuxt-icon'],
})
