/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["http://127.0.0.1:8090/api/collections/products/records"],
    formats: ["image/webp"],
  },
};

module.exports = nextConfig;
