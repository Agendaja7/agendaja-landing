// AgendaJá - Landing Page
// Sections: Header, Hero, Features (12 modules), FAQ, Contact, Footer
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShareSection from "@/components/ShareSection";
import IndustriesSection from "@/components/IndustriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ShareSection />
        <IndustriesSection />
        <FeaturesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
