/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: [
    "192.168.0.31",
    "localhost",
  ],
};

module.exports = nextConfig;