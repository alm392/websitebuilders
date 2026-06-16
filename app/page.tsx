import UrgencyBar from "@/components/landing/UrgencyBar";
import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import Benefits from "@/components/landing/Benefits";
import HowItWorks from "@/components/landing/HowItWorks";
import Services from "@/components/landing/Services";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Benefits />
        <HowItWorks />
        <Services />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
