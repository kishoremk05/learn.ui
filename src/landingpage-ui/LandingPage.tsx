import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { About } from "./About";
import { Problem } from "./Problem";
import { HowItWorks } from "./HowItWorks";
import { Features } from "./Features";
import { StudentPortfolio } from "./StudentPortfolio";
import { AIIntelligence } from "./AIIntelligence";
import { PeopleSection } from "./PeopleSection";
import { WhyStudiqs } from "./WhyStudiqs";
import { FutureVision } from "./FutureVision";
import { Testimonials } from "./Testimonials";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#e9e2d4] text-[#161616]">
      <Navbar />
      <Hero />
      <About />
      <PeopleSection />
      <HowItWorks />
      <StudentPortfolio />
      <Features />
      <AIIntelligence />
      <Problem />
      <WhyStudiqs />
      <FutureVision />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
