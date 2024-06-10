/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.cdn.asset.filimo.com",
      },
    ],
  },
};

export default nextConfig;
