/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeDetection: false,
    realDefaultLocale: 'vi',
  },
  env: {
    
  }
}

module.exports = nextConfig
