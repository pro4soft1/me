// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    devtools: {enabled: true},
    imports: {autoImport: true},
    css: [
        '~/assets/css/normalize.css',
        '~/assets/css/bootstrap.min.css',
        '~/assets/css/owl.carousel.css',
        '~/assets/css/magnific-popup.css',
        '~/assets/css/main.css'
    ],
    head: {
        bodyAttrs: {
            class: 'page'
        }
    }
})
