import AboutComponent from "@/components/ui/AboutComponent";
import CatalogSwiperSection from "@/components/ui/CatalogSwiperSection";
import CatalogueSection from "@/components/ui/CatalogueSection";
import CompanySection from "@/components/ui/CompanySection";
import ContactSection from "@/components/ui/ContactSection";
import HeroSection from "@/components/ui/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <CatalogueSection />
      <CatalogSwiperSection />
      <ContactSection />
    </>
  );
}
