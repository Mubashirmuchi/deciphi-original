import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // assets.aceternity.com
  images: {
    domains: [
"assets.aceternity.com",
"images.unsplash.com",
"images.pexels.com",
"videos.pexels.com",
"images.unsplash.com",
    ],
  },

  /* config options here */
};

export default nextConfig;

// import type { NextConfig } from "next";
// import path from "path";

// const nextConfig: NextConfig = {
//   output: "standalone",
//   reactStrictMode: true,
//   poweredByHeader: false,
//   compress: true,

//   images: {
//     domains: [
//       "localhost",
//       "assets.aceternity.com",
//       "images.unsplash.com",
//       "images.pexels.com",
//       "videos.pexels.com",
//       "images.unsplash.com",
//     ],
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "localhost",
//         port: "1337",
//         pathname: "/uploads/**",
//       },
//     ],
//     unoptimized: false, // Enable optimization for better performance
//     formats: ["image/avif", "image/webp"],
//     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     dangerouslyAllowSVG: true,
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//     minimumCacheTTL: 60,
//     loader: "default",
//   },

//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },

//   turbopack: {
//     rules: {
//       "*.svg": {
//         loaders: ["@svgr/webpack"],
//         as: "*.js",
//       },
//     },
//   },

//   experimental: {
//     optimizeCss: true,
//     scrollRestoration: true,
//     optimizePackageImports: ["framer-motion", "lucide-react"],
//   },

//   // Performance optimizations
//   webpack: (config, { dev, isServer }) => {
//     // Production optimizations
//     if (!dev && !isServer) {
//       config.optimization = {
//         ...config.optimization,
//         splitChunks: {
//           chunks: "all",
//           minSize: 20000,
//           maxSize: 244000,
//           cacheGroups: {
//             default: {
//               minChunks: 2,
//               priority: -20,
//               reuseExistingChunk: true,
//             },
//             vendor: {
//               test: /[\\/]node_modules[\\/]/,
//               name: "vendors",
//               priority: -10,
//               chunks: "all",
//             },
//             common: {
//               name: "common",
//               minChunks: 2,
//               chunks: "all",
//               enforce: true,
//             },
//           },
//         },
//       };
//     }

//     // Enable bundle analyzer when ANALYZE=true (install webpack-bundle-analyzer separately)
//     if (process.env.ANALYZE) {
//       // Bundle analyzer can be added here when needed
//       console.log(
//         "Bundle analysis enabled - install webpack-bundle-analyzer for detailed analysis"
//       );
//     }

//     // Optimize bundle size
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       "@": path.resolve(__dirname, "src"),
//     };

//     return config;
//   },
//   // Headers for caching
//   async headers() {
//     return [
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "X-Content-Type-Options",
//             value: "nosniff",
//           },
//           {
//             key: "X-Frame-Options",
//             value: "DENY",
//           },
//           {
//             key: "X-XSS-Protection",
//             value: "1; mode=block",
//           },
//         ],
//       },
//       {
//         source: "/fonts/(.*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//       {
//         source:
//           "/(.*\\.(?:jpg|jpeg|png|webp|avif|ico|svg|mp4|mov|webm|ogg|mp3|wav))",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "no-cache, no-store, must-revalidate",
//           },
//         ],
//       },
//     ];
//   },
//   // Optimize redirects
//   async redirects() {
//     return [
//       {
//         source: "/home",
//         destination: "/",
//         permanent: true,
//       },
//       {
//         source: "/index",
//         destination: "/",
//         permanent: true,
//       },
//       // Prevent trailing slash redirects for performance
//       {
//         source: "/((?!api/).*)/",
//         destination: "/$1",
//         permanent: true,
//       },
//     ];
//   },
// };

// export default nextConfig;
