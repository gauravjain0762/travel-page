import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function ContactPage() {
  return (
    <>
      <Navbar heroTheme="light" />
      <main>
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
