const baseUrl = "https://www.kashless.in";

const routes = [
  { path: "/", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/technology-solutions", priority: 0.9 },
  { path: "/technology-solutions/software-digital-products", priority: 0.8 },
  { path: "/technology-solutions/cloud-infrastructure", priority: 0.8 },
  { path: "/technology-solutions/cybersecurity", priority: 0.8 },
  { path: "/technology-solutions/hardware-workplace", priority: 0.8 },
  { path: "/technology-solutions/licensing-managed-services", priority: 0.8 },
  { path: "/technology-solutions/digital-transformation", priority: 0.8 },
  { path: "/business-consultation", priority: 0.9 },
  { path: "/strategic-partnerships", priority: 0.8 },
  { path: "/insights", priority: 0.7 },
  { path: "/contact", priority: 0.9 },
  { path: "/careers", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
  { path: "/disclaimer", priority: 0.3 },
  { path: "/cookie-policy", priority: 0.3 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/insights" ? "weekly" : "monthly",
    priority,
  }));
}
