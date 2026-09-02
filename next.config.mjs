/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/technology-solutions",
        permanent: true,
      },
      {
        source: "/services/cloud-infrastructure",
        destination: "/technology-solutions/cloud-infrastructure",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/technology-solutions/software-digital-products",
        permanent: true,
      },
      {
        source: "/services/cybersecurity",
        destination: "/technology-solutions/cybersecurity",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
