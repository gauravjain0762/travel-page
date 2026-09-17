import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TravelPreferences from "@/components/TravelPreferences";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelInspiration from "@/components/TravelInspiration";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TravelPreferences />
        <ServicesGrid />
        <WhyChooseUs />
        <TravelInspiration />
        <Testimonials />
        <FinalCta />
      </main>
    </>
  );
}
