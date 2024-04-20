// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'FexiFlow',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'title',
          content: 'FexiFlow'
        },
        {
          name: 'description',
          content: 'Next-Level Saas tool that solves your Modern Propery Management.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/flexiflow.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  ssr: false,
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", 'nuxt-swiper']
})