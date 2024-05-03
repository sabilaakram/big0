/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "light-blessing-0333ae3113.media.strapiapp.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
