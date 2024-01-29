/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  output: "export",
  images: {
    unoptimized: true,
    domains: [
      'carkystorage.blob.core.windows.net',
      'carkystoragetest.blob.core.windows.net',
    ],
  },
  poweredByHeader: false,
  trailingSlash: true,
  // transpilePackages: ['@acme/ui', 'lodash-es']
};

module.exports = nextConfig;
