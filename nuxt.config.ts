import process from "node:process";

export default defineNuxtConfig({
    devtools: {enabled: true},
    imports: {autoImport: true},
    ssr: true,
    css: [
        // '~/node_modules/normalize.css/normalize.css',
        '~/assets/css/normalize.css',
        '~/assets/css/bootstrap.min.css',
        // '~/assets/css/bootstrap-rtl.min.css',
        '~/assets/css/owl.carousel.css',
        '~/assets/css/magnific-popup.css',
        '~/assets/css/main.css',
        '~/assets/css/rtl.css',
    ],

    modules: [
        '@nuxt/content',
        '@nuxtjs/i18n',
        'nuxt-swiper',
        'nuxt-graphql-request',
        "@nuxt/image"
    ],
    build: {
        transpile: ['nuxt-graphql-request'],
    },
    graphql: {
        /**
         * An Object of your GraphQL clients
         */
        clients: {
            default: {
                /**
                 * The client endpoint url
                 */
                endpoint: process.env["GRAPHQL_HOST"] ?? 'http://wp-me.test/graphql',
                /**
                 * Per-client options overrides
                 * See: https://github.com/prisma-labs/graphql-request#passing-more-options-to-fetch
                 */
                options: {},
            }
            // ...your other clients
        },


        /**
         * Optional
         * default: false (this includes graphql-tag for node_modules folder)
         */
        includeNodeModules: true,
    },
    i18n: {
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                file: 'en-US.ts',
                dir: 'rtl',
                name: 'English'
            },
            {
                code: 'ar',
                iso: 'ar-EG',
                file: 'ar-EG.ts',
                name: 'عربي'
            }
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
        strategy: 'prefix_except_default',
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
    },
    server: {
        port: 3005, // default: 3000
        host: 'localhost' // default: localhost
    }
})