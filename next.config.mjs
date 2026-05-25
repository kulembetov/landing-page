const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/catalog.html", destination: "/", permanent: true },
      { source: "/company.html", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/about-us", destination: "/", permanent: true },
      { source: "/home", destination: "/", permanent: true },
      { source: "/main", destination: "/", permanent: true },
      { source: "/blog/:path*", destination: "/", permanent: true },
      { source: "/categories/:path*", destination: "/", permanent: true },
      { source: "/presentations/:path*", destination: "/", permanent: true },
    ];
  },
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
