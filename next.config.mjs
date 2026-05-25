const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  async headers() {
    const slideCacheControl = "public, max-age=31536000, s-maxage=31536000, immutable";
    return [
      {
        source: "/slides/:path*",
        headers: [{ key: "Cache-Control", value: slideCacheControl }],
      },
      {
        source: "/slides-2/:path*",
        headers: [{ key: "Cache-Control", value: slideCacheControl }],
      },
      {
        source: "/slides-3/:path*",
        headers: [{ key: "Cache-Control", value: slideCacheControl }],
      },
      {
        source: "/slides-5/:path*",
        headers: [{ key: "Cache-Control", value: slideCacheControl }],
      },
      {
        source: "/slides-6/:path*",
        headers: [{ key: "Cache-Control", value: slideCacheControl }],
      },
    ];
  },
};

export default nextConfig;
