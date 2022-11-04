/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  il8n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-us"
  }
}

module.exports = nextConfig
