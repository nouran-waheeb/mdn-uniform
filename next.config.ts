import type { NextConfig } from "next";

/**
 * DEPLOYMENT CONFIGURATION
 * - Vercel: deploy as-is (default)
 * - GitHub Pages: uncomment `output: "export"` and set `basePath` if using a project subpath
 */
const nextConfig: NextConfig = {
  // Uncomment for GitHub Pages static export:
  // output: "export",
  // basePath: "/mdn-uniform",
  // trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  },
};

export default nextConfig;
