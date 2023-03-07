/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https:',
        hostname: 'media.istockphoto.com',
      },
    ],
    domains: ['media.istockphoto.com'],
  },

  reactStrictMode: true,
}
