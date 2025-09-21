// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    css: ['~/assets/css/main.css', '~/assets/css/markdown.css'],
    modules: [
        '@nuxt/content',
        '@nuxt/ui',
        'nuxt-og-image',
        'motion-v/nuxt'
    ],
    site: {
        url: 'https://kaungkhantjc.dev',
        name: 'Kaung Khant Kyaw',
    },
    app: {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
    content: {
        experimental: { nativeSqlite: true },
        renderer: {
            anchorLinks: false,
        },
        build: {
            markdown: {
                highlight: {
                    theme: {
                        default: 'github-light',
                        dark: 'github-dark',
                    }
                }
            }
        }
    }
})