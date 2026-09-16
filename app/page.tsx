import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import VideoSection from "@/components/VideoSection";
import ValueProposition from "@/components/ValueProposition";
import Benefits from "@/components/Benefits";
import PainPoints from "@/components/PainPoints";
import Experts from "@/components/Experts";
import ExperiencePlans from "@/components/ExperiencePlans";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <VideoSection />
        <ValueProposition />
        <Benefits />
        <PainPoints />
        <Experts />
        <ExperiencePlans />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
