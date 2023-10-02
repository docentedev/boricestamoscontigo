import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Boric estamos contigo",
        short_name: "Boric estamos contigo",
        description: "Sitio web creado por adherentes del gobierno de Gabriel Boric Font",
        start_url: "/",
        display: 'standalone',
        background_color: '#f0f0f0',
        theme_color: '#f0f0f0',
        icons: [
            {
                src: '/favicon.png',
                sizes: '512x512',
                type: 'image/png',
            },
            {
                src: '/maskable_icon.png',
                sizes: 'any',
                type: 'image/png',
                purpose: "maskable",
            },
        ],
    }
}