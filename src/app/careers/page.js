import { createSeoMetadata } from "@/lib/data";
import CareersClient from "./CareersClient";

export const metadata = createSeoMetadata("careers", "/careers");

export default function CareersPage() {
  return <CareersClient />;
}
