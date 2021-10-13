/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const nextTranslate = require('next-translate')

module.exports = nextTranslate(withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: false,
}))
