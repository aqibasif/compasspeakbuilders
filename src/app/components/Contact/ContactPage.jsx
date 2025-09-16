import Hero from "@/app/components/Common/Hero";
import { ContactBanner } from "@/app/Utils/images";
import ContactDetails from "./ContactDetails";

export default function ContactPage() {
  return (
    <>
      <Hero image={ContactBanner} heading='Contact Us' />

      <ContactDetails />
    </>
  );
}
