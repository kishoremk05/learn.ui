import { Reveal, SectionHeading } from "./atoms";
import portfolioBg from "@/assets/why nova section 2 or 3.png";

const PORTFOLIO_CATEGORIES = [
  {
    num: "01",
    title: "Topic Gap Intelligence™",
    desc: "Upload marks sheets to automatically detect which specific topics are weak — before the exam reveals it.",
    tagColor: "text-[#c97a3a] bg-[#c97a3a]/8",
  },
  {
    num: "02",
    title: "Board Readiness Intelligence™",
    desc: "Matric/Stateboard and CBSE-aligned prediction engine forecasts board exam performance with term-by-term confidence scores.",
    tagColor: "text-[#3e5db0] bg-[#3e5db0]/8",
  },
  {
    num: "03",
    title: "Future Readiness Intelligence™",
    desc: "Maps student strengths to career streams and tracks university preparation readiness indices.",
    tagColor: "text-[#3a6b4a] bg-[#3a6b4a]/8",
  },
  {
    num: "04",
    title: "Parent Intelligence™",
    desc: "Delivers actionable, parent-friendly summaries and home-learning guidance tied to real academic data.",
    tagColor: "text-[#7a4ea1] bg-[#7a4ea1]/8",
  },
  {
    num: "05",
    title: "Management Intelligence™",
    desc: "School-level cohort comparison, risk flags, and institutional KPIs in one executive dashboard.",
    tagColor: "text-[#e05252] bg-[#e05252]/8",
  },
];

export function StudentPortfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden min-h-[580px] flex items-center border-t border-[#1a1a1a]/10 bg-[#efeadd]"
    >
      {/* Desktop Background Image (aligned to the right, exactly like Hero section) */}
      <div
        className="absolute inset-0 pointer-events-none select-none lg:block hidden overflow-hidden"
      >
        <div
          className="absolute inset-y-0 right-[-160px] left-0"
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

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading and Categories (Col-span-7) */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            <SectionHeading kicker="The Studiqs Difference">
              Five Intelligence Systems. One Platform.
            </SectionHeading>
            
            <Reveal delay={120}>
              <p className="mt-4 text-[15px] sm:text-[16px] leading-[1.6] text-[#2a2a2a]/85 font-medium max-w-[500px]">
                Studiqs connects school data, topic gap analysis, AI recommendations, parent engagement, and management foresight into one decision layer.
              </p>
            </Reveal>

            {/* Category list items */}
            <div className="mt-6 space-y-3.5 max-w-[480px]">
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

            <Reveal delay={350} className="mt-6 pt-4 border-t border-[#1a1a1a]/10">
              <div className="flex items-center gap-2 text-[#c97a3a] font-display font-medium text-[15px]">
                <span>✳︎</span>
                <span>Academic intelligence, not administrative paperwork.</span>
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
