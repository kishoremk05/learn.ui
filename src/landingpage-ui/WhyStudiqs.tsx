import { Reveal, SectionBg, SectionHeading } from "./atoms";

const ERP_POINTS = [
  "Administrative & billing focus",
  "Complex database migrations required",
  "No topic gap analytics or predictive insights",
  "Parents only see final report card results",
];

const STUDIQS_POINTS = [
  "No ERP Replacement required (works with any system)",
  "Easy Data Import (drag-and-drop spreadsheets)",
  "CBSE Ready (board readiness predictions & CBSE mapping)",
  "AI Insights (automatic topic gap and at-risk alerts)",
  "Stakeholder Dashboards (student, parent, teacher, management)",
];

export function WhyStudiqs() {
  return (
    <SectionBg id="why-studiqs" variant="solid" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="Why Schools Choose Studiqs" align="center">
            Built for intelligence.
            <br />
            Not just administration.
          </SectionHeading>

          <Reveal delay={120}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85 font-medium">
              Studiqs sits on top of your existing setup to drive academic excellence. See how we compare to traditional school software:
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          {/* Traditional ERP Systems Card */}
          <Reveal
            delay={150}
            className="bg-[#efeadd]/50 border border-[#1a1a1a]/10 rounded-3xl p-8 sm:p-10 hover:bg-[#efeadd]/75 transition-all duration-300"
          >
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#2a2a2a]/55">
              The Old Way
            </div>
            <h3 className="mt-2 font-display text-[22px] sm:text-[24px] font-bold text-[#2a2a2a]/80">
              Traditional ERP Systems
            </h3>
            <p className="mt-3 text-[14px] text-[#2a2a2a]/65 leading-relaxed">
              Designed as general back-office record databases, leaving academic staff and parents in the dark.
            </p>
            
            <ul className="mt-8 space-y-4">
              {ERP_POINTS.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-[#161616]/5 flex items-center justify-center text-[10px] text-[#2a2a2a]/60 font-bold shrink-0">
                    ✕
                  </span>
                  <span className="text-[15px] text-[#2a2a2a]/75">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Studiqs Card */}
          <Reveal
            delay={250}
            className="bg-[#efeadd] border-2 border-[#c97a3a]/40 rounded-3xl p-8 sm:p-10 shadow-[0_24px_50px_-20px_rgba(201,122,58,0.18)] transition-all duration-300 hover:shadow-[0_24px_50px_-20px_rgba(201,122,58,0.25)] relative overflow-hidden"
          >
            {/* Spotlight Accent */}
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-radial from-[#c97a3a]/12 to-transparent blur-xl pointer-events-none" />
            
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#c97a3a] font-bold">
                The Academic Intelligence Way
              </span>
              <span className="bg-[#c97a3a] text-white text-[9px] font-mono px-2 py-0.5 rounded-full uppercase tracking-wider">
                Recommended
              </span>
            </div>
            
            <h3 className="mt-2 font-display text-[22px] sm:text-[24px] font-bold text-[#161616]">
              Studiqs Platform
            </h3>
            
            <p className="mt-3 text-[14px] text-[#2a2a2a]/85 leading-relaxed">
              Built specifically to analyze data, identify academic risks early, and generate growth opportunities.
            </p>

            <ul className="mt-8 space-y-4">
              {STUDIQS_POINTS.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="h-5 w-5 rounded-full bg-[#c97a3a]/12 flex items-center justify-center text-[11px] text-[#c97a3a] font-bold shrink-0">
                    ✓
                  </span>
                  <span className="text-[15px] text-[#161616] font-medium">{pt}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </SectionBg>
  );
}
