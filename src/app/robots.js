const baseUrl = "https://www.kashless.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/admin/",
          "/personal-loan",
          "/home-loan",
          "/instant-loan",
          "/instant-personal-loan",
          "/capital-strategic-investments",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
