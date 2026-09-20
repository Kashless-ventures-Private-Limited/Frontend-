const baseUrl = "https://www.kashless.in";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
