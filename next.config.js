/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        CATEGORY_LOCALSTORAGE_KEY: process.env.CATEGORY_LOCALSTORAGE_KEY,
        FAVORITES_LOCALSTORAGE_KEY: process.env.FAVORITES_LOCALSTORAGE_KEY,
      },
}

module.exports = nextConfig
