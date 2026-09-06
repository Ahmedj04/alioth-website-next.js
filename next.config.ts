import type { NextConfig } from "next";

const legacyPages = [
  "about",
  "accessibility",
  "ai-solutions",
  "contact",
  "digital-marketing",
  "graphic-design",
  "insights",
  "privacy",
  "proposal-development",
  "recruitment",
  "services",
  "software-it-services",
  "terms",
  "upload-tender",
  "video-editing",
  "web-development",
  "web-maintenance",
  "wordpress-plugins",
  "work",
  "thank-you",
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy static-site URLs (foo.html) -> clean routes
      ...legacyPages.map((slug) => ({
        source: `/${slug}.html`,
        destination: `/${slug}`,
        permanent: true,
      })),
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      // Old bid-tender.html redirect stub, preserved from the original .htaccess/_redirects
      {
        source: "/bid-tender.html",
        destination: "/proposal-development",
        permanent: true,
      },
      {
        source: "/bid-tender",
        destination: "/proposal-development",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
