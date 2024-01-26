/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sessionize.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
