/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    output: "export",
    unoptimized: true,
  },
};

module.exports = nextConfig;
