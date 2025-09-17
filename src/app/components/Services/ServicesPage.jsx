import { ServicesBanner } from "@/app/Utils/images";
import Hero from "@/app/components/Common/Hero";
import ServicesBlock from "./ServicesBlock";
import PageLayout from "../PageLayout/PageLayout";

export default function ServicesPage() {
  return (
    <PageLayout>
      <Hero heading='our services' image={ServicesBanner} />
      <ServicesBlock />
    </PageLayout>
  );
}
