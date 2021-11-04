/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');
const withPWA = require("next-pwa");
const nextTranslate = require('next-translate')
const { getThemeVariables } = require('antd/dist/theme');

module.exports = withAntdLess(nextTranslate(withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  // optional
  modifyVars: { 
    ...getThemeVariables({
      dark: true, // Enable dark mode
    }),
    '@primary-color': '#0EA9CD', '@link-color': '#0EA9CD'
  },
  javascriptEnabled: true,
  // optional
  lessVarsFilePathAppendToEndOfContent: false,
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},

  reactStrictMode: false,
})))
