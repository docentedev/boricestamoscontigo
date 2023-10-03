/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '170-187-202-173.ip.linodeusercontent.com',
                port: '',
            },
        ],
    },
}

module.exports = nextConfig
