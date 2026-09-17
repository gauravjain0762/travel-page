import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesList from "@/components/ServicesList";
import BespokeTravelPlanning from "@/components/BespokeTravelPlanning";
import OurProcess from "@/components/OurProcess";
import WhyChooseUsServices from "@/components/WhyChooseUsServices";
import InstagramReels from "@/components/InstagramReels";
import ReadyToPlan from "@/components/ReadyToPlan";
import SiteFooter from "@/components/SiteFooter";

export default function TravelServicesPage() {
  return (
    <>
      <Navbar heroTheme="light" />
      <main>
        <ServicesHero />
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
