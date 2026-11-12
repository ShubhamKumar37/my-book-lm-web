
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  async rewrites() {
    // No proxy required during local development.
    if (process.env.NODE_ENV === "development") {
      return [];
    }

    // Production: proxy Better Auth requests through Vercel.
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
