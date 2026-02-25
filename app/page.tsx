import { getExperienceSummary } from "@/lib/experience";
import PageContent from "@/components/PageContent";

export default function Home() {
  const { name } = getExperienceSummary();
  const currentRole = "Product Manager";
  const additionalRoles = "Technical Program Manager | Business Analyst | Data Engineer";

  return <PageContent name={name} currentRole={currentRole} additionalRoles={additionalRoles} />;
}
