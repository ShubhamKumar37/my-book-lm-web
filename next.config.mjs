/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination:
          "https://my-book-lm-api.onrender.com/api/auth/:path*",
      },
    ];
  },
};

export default nextConfig;
