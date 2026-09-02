import { redirect } from "next/navigation";

export default async function ServiceSlugRedirect({ params }) {
  const { slug } = await params;
  if (slug === "cloud-infrastructure") {
    redirect("/technology-solutions/cloud-infrastructure");
  } else if (slug === "web-development") {
    redirect("/technology-solutions/software-digital-products");
  } else if (slug === "cybersecurity") {
    redirect("/technology-solutions/cybersecurity");
  }
  redirect("/technology-solutions");
}
