import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AgendaSection from "@/components/AgendaSection";
import SpotifySection from "@/components/SpotifySection";
import AboutSection from "@/components/AboutSection";
import NonProfitSection from "@/components/NonProfitSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AgendaSection />
        <SpotifySection />
        <AboutSection />
        <NonProfitSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
