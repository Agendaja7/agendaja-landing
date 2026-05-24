// AgendaJá - Landing Page
// Sections: Header, Hero, Features (12 modules), Contact, Footer
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
