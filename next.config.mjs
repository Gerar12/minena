/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-8e07b509384043bba801930446238e79.r2.dev",
      },
    ],
  },
};

export default nextConfig;
