// Custom domain (anastasia-kutina.space) serves the site from the root,
// so no basePath is needed. Kept as an override in case the site ever
// moves back to a project-pages subpath (username.github.io/repo).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH_OVERRIDE || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
