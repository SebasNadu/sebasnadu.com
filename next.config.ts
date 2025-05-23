import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Experimental features
  experimental: {
    dynamicIO: true,
    // Option to reactCompiler: compilationMode: 'annotation',
    reactCompiler: true,
    // ppr: 'incremental',
    staleTimes: {
      dynamic: 30, // Cache dynamically generated pages for 30 seconds
      static: 180, // Cache statically generated pages for 3 minutes
    },
    // typedRoutes: true, // Not allowed with turbopack
    useLightningcss: true,
    viewTransition: true,
    webVitalsAttribution: ['CLS', 'LCP'],

    // TODO: uncomment later with the used libraries
    // optimizePackageImports: [
    //   'react-icons',
    //   'date-fns',
    //   '@heroicons/react',
    //   'lucide-react',
    //   'lodash'next,
    // ],
  },

  // NOTE: External images if it is needed
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: '**',
  //     },
  //   ],
  // },

  // Recommended security Headers
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Avoid MIME type sniffing
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Protect against clickjacking
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block', // Protect against cross-site scripting
          },
          {
            key: 'Content-Security-Policy',
            value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:;
            font-src 'self';
          `
              .replace(/\s{2,}/g, ' ')
              .trim(), // Security: Limit the sources of content
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin', // Prevent referrer spoofing
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Secure HTTPS connections
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Limit access to sensitive data
          },
        ],
      },
    ];
  },
  poweredByHeader: false, // Disable the X-Powered-By header, as it can be used to identify the framework

  // TODO: Turn off later
  reactStrictMode: true,

  allowedDevOrigins: ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://192.168.2.73:3000'],
};

export default nextConfig;
