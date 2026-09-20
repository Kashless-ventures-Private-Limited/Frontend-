const baseUrl = "https://www.kashless.in";

const routes = [
  "/",
  "/about",
  "/technology-solutions",
  "/technology-solutions/software-digital-products",
  "/technology-solutions/cloud-infrastructure",
  "/technology-solutions/cybersecurity",
  "/technology-solutions/hardware-workplace",
  "/technology-solutions/licensing-managed-services",
  "/technology-solutions/digital-transformation",
  "/business-consultation",
  "/strategic-partnerships",
  "/insights",
  "/contact",
  "/careers",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/cookie-policy",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
