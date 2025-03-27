/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: true,
  images: {
    domains: ['fonts.gstatic.com'],
    unoptimized: true
  }
}

module.exports = nextConfig
