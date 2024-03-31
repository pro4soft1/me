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
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/i18n'
    ],
    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en-US.ts',
                dir:'rtl'
            },
            {
                code: 'ar',
                iso: 'ar-EG',
                file:'ar-EG.ts'
            }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
        strategy:'prefix',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',  // recommended
        }
    },
    content: {
        locales: [
            'en', 'ar'
        ]
    }
})
