import { Reveal, SectionBg, SectionHeading } from "./atoms";

const STEPS = [
  {
    title: "Collect Academic Data",
    desc: "Schools upload attendance, marks, assessments, achievements, surveys, and academic records through a centralized admin workspace.",
  },
  {
    title: "Generate Intelligence",
    desc: "AI engines analyze student and institutional data to identify trends, risks, strengths, weaknesses, and growth opportunities.",
  },
  {
    title: "Deliver Actionable Insights",
    desc: "Role-based dashboards present personalized insights for students, parents, teachers, and school leadership.",
  },
  {
    title: "Improve Outcomes",
    desc: "Schools can take proactive action before academic issues become critical, improving student performance and overall institutional success.",
  },
];

export function HowItWorks() {
  return (
    <SectionBg id="how-it-works" variant="solid" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="How it works" align="center">
            From raw data to student growth.
          </SectionHeading>
          
          <Reveal delay={150}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85 max-w-[580px] mx-auto">
              Studiqs runs continuously in the background, transforming daily school records into predictive guidance for every stakeholder.
            </p>
          </Reveal>
        </div>

        {/* 4-Column Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 80}
              className="relative bg-[#efeadd]/65 border border-[#1a1a1a]/10 rounded-3xl p-7 hover:bg-[#efeadd] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono tracking-widest text-[#c97a3a] uppercase font-bold">
                  Phase {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-[18px] font-bold text-[#161616] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] text-[#2a2a2a]/80 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#1a1a1a]/6 text-[10px] font-mono text-[#2a2a2a]/45">
                Calculated automatically
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </SectionBg>
  );
}
