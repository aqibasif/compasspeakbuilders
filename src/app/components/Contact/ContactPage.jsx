import Hero from "@/app/components/Common/Hero";
import { ContactBanner } from "@/app/Utils/images";
import ContactDetails from "./ContactDetails";
import PageLayout from "../PageLayout/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      <Hero image={ContactBanner} heading='Contact Us' />
      <ContactDetails />
    </PageLayout>
  );
}
