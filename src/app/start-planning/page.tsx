import Navbar from "@/components/Navbar";
import TravelQuestionnaire from "@/components/TravelQuestionnaire";
import SiteFooter from "@/components/SiteFooter";

export default function StartPlanningPage() {
  return (
    <>
      <Navbar heroTheme="light" />
      <main>
        <TravelQuestionnaire />
      </main>
      <SiteFooter />
    </>
  );
}
