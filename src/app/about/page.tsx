import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import AboutSection from "@/components/AboutSection";
import ServicesList from "@/components/ServicesList";
import BespokeTravelPlanning from "@/components/BespokeTravelPlanning";
import OurProcess from "@/components/OurProcess";
import WhyChooseUsServices from "@/components/WhyChooseUsServices";
import InstagramReels from "@/components/InstagramReels";
import ReadyToPlan from "@/components/ReadyToPlan";
import SiteFooter from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <>
      <Navbar heroTheme="light" />
      <main>
        <ServicesHero />
        <AboutSection />
        <ServicesList />
        <BespokeTravelPlanning />
        <OurProcess />
        <WhyChooseUsServices />
        <InstagramReels />
        <ReadyToPlan />
      </main>
      <SiteFooter />
    </>
  );
}
