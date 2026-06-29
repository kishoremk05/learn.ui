import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { StudentPortfolio } from "./StudentPortfolio";
import { PeopleSection } from "./PeopleSection";
import { AIIntelligence } from "./AIIntelligence";
import { Modules } from "./Modules";
import { WhyStudiqs } from "./WhyStudiqs";
import { Testimonials } from "./Testimonials";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#e9e2d4] text-[#161616]">
      <Navbar />
      <Hero />
      <HowItWorks />
      <StudentPortfolio />
      <PeopleSection />
      <AIIntelligence />
      <Modules />
      <WhyStudiqs />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
