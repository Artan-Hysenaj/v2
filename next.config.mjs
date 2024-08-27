/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "brittanychiang.com",
        port: "",
        pathname: "/_next/**",
      },
    ],
  },
};

export default nextConfig;
