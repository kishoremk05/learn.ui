import { Reveal, SectionBg, SectionHeading } from "./atoms";

const STEPS = [
  {
    title: "Export ERP Data",
    desc: "Pull standard marks sheets, mock exam scores, or grade reports from your existing school ERP or SIS system.",
  },
  {
    title: "Upload to Studiqs",
    desc: "Drag-and-drop the spreadsheet directly into the secure Studiqs dashboard — no API integration or coding required.",
  },
  {
    title: "AI Analyzes",
    desc: "Studiqs AI instantly processes the marks to identify topic-level gaps, board exam readiness, and at-risk students.",
  },
  {
    title: "Insights Delivered",
    desc: "Role-based dashboards for students, parents, teachers, and school leadership are updated with actionable recommendations.",
  },
];

export function HowItWorks() {
  return (
    <SectionBg id="how-it-works" variant="solid" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="How it works" align="center">
            Simple, non-disruptive deployment.
          </SectionHeading>
          
          <Reveal delay={150}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85 max-w-[580px] mx-auto">
              Studiqs sits on top of your existing systems, turning standard spreadsheet exports into real-time academic intelligence.
            </p>
          </Reveal>
        </div>

        {/* 4-Column Process Timeline Grid in Pattern 1 */}
        <Reveal delay={200} className="mt-14 rounded-3xl border border-white bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className="bg-[#efeadd]/65 hover:bg-[#efeadd]/85 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 min-h-[260px]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#2a2a2a]/45">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[#c97a3a] uppercase font-bold tracking-wider text-[9px]">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-[19px] sm:text-[20px] font-bold text-[#161616] leading-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#2a2a2a]/75">
                  {s.desc}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-[#1a1a1a]/6 text-[10px] font-mono text-[#2a2a2a]/45">
                Instant analysis
              </div>
            </div>
          ))}
        </Reveal>

      </div>
    </SectionBg>
  );
}
