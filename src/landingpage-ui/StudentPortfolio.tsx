import { Reveal, SectionHeading } from "./atoms";
import portfolioBg from "@/assets/why nova section 2 or 3.png";

const PORTFOLIO_CATEGORIES = [
  {
    num: "01",
    title: "Academic Achievements",
    desc: "Visualizes grades, subject trajectories, and honors transcripts.",
    tagColor: "text-[#c97a3a] bg-[#c97a3a]/8",
  },
  {
    num: "02",
    title: "Verifiable Certificates",
    desc: "Digital transcripts of external courses, workshops, and skills.",
    tagColor: "text-[#3e5db0] bg-[#3e5db0]/8",
  },
  {
    num: "03",
    title: "Leadership Activities",
    desc: "Records student council roles, club heads, and group initiatives.",
    tagColor: "text-[#3a6b4a] bg-[#3a6b4a]/8",
  },
  {
    num: "04",
    title: "Co-Curricular Portfolio",
    desc: "Sports records, national level competitions, and arts participation.",
    tagColor: "text-[#7a4ea1] bg-[#7a4ea1]/8",
  },
];

export function StudentPortfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden min-h-[620px] flex items-center border-t border-[#1a1a1a]/10 bg-[#efeadd]"
    >
      {/* Desktop Background Image (aligned to the right, exactly like Hero section) */}
      <div
        className="absolute inset-0 pointer-events-none select-none lg:block hidden overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${portfolioBg})`,
            backgroundSize: "cover",
            backgroundPosition: "right center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Mobile/Tablet Background Image */}
      <div
        className="absolute inset-0 select-none pointer-events-none lg:hidden block opacity-20"
        style={{
          backgroundImage: `url(${portfolioBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Gradient wash to ensure text is fully legible on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#efeadd] via-[#efeadd]/90 lg:via-[#efeadd]/40 to-transparent pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading and Categories (Col-span-7) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            <SectionHeading kicker="Digital Student Portfolio">
              Showcase Every Achievement
            </SectionHeading>
            
            <Reveal delay={120}>
              <p className="mt-6 text-[15px] sm:text-[16.5px] leading-[1.65] text-[#2a2a2a]/85 font-medium max-w-[500px]">
                Studiqs consolidates academic success, verified credentials, sports achievements, and leadership records in one unified, modern workspace.
              </p>
            </Reveal>

            {/* Category list items */}
            <div className="mt-8 space-y-5 max-w-[480px]">
              {PORTFOLIO_CATEGORIES.map((cat, idx) => (
                <Reveal key={cat.title} delay={idx * 60} className="flex gap-4 items-start">
                  <span className={`font-mono text-[11px] font-bold px-2 py-0.5 rounded shrink-0 ${cat.tagColor}`}>
                    {cat.num}
                  </span>
                  <div>
                    <h4 className="font-display text-[15px] font-bold text-[#161616]">{cat.title}</h4>
                    <p className="text-[13px] text-[#2a2a2a]/75 mt-0.5 leading-normal">{cat.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={350} className="mt-8 pt-6 border-t border-[#1a1a1a]/10">
              <div className="flex items-center gap-2 text-[#c97a3a] font-display font-medium text-[15px]">
                <span>✳︎</span>
                <span>A complete picture of student growth in one place.</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Spacer to let the background dashboard image show through */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

        </div>
      </div>
    </section>
  );
}
