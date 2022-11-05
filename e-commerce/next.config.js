/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  il8n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-us"
  }
})
