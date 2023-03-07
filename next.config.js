/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['gateway.pinata.cloud', 'i.seadn.io', 'storage.googleapis.com'],
    },
}

module.exports = nextConfig
