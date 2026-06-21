import { Reveal, SectionBg, SectionHeading } from "./atoms";

const STAKEHOLDER_PROBLEMS = [
  {
    role: "Students",
    color: "#c97a3a",
    borderColor: "rgba(201, 122, 58, 0.2)",
    points: [
      "Learning gaps remain hidden until exams",
      "Weak subjects are identified too late",
      "Performance trends go unnoticed",
    ],
  },
  {
    role: "Parents",
    color: "#3e5db0",
    borderColor: "rgba(62, 93, 176, 0.2)",
    points: [
      "Limited visibility into day-to-day academic progress",
      "Reliance on final report cards",
      "Lack of actionable guidance for supporting learning at home",
    ],
  },
  {
    role: "Teachers",
    color: "#3a6b4a",
    borderColor: "rgba(58, 107, 74, 0.2)",
    points: [
      "Difficulty identifying students who need immediate attention",
      "Limited classroom-level performance intelligence",
      "Time-consuming manual analysis",
    ],
  },
  {
    role: "School Management",
    color: "#7a4ea1",
    borderColor: "rgba(122, 78, 161, 0.2)",
    points: [
      "Lack of school-wide academic intelligence",
      "Limited visibility into risk students and weak subjects",
      "Difficulty measuring institutional performance trends",
    ],
  },
];

export function Problem() {
  return (
    <SectionBg id="problem" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="The Problem" align="center">
            Data overload.
            <br />
            Underutilized intelligence.
          </SectionHeading>
          
          <Reveal delay={120}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85 font-medium">
              Schools collect massive amounts of academic data every year, but most of it remains underutilized. Here is how it impacts each stakeholder:
            </p>
          </Reveal>
        </div>

        {/* Grid with Gaps layout in Pattern 1 */}
        <Reveal delay={200} className="mt-14 rounded-3xl border border-white bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-px">
          {STAKEHOLDER_PROBLEMS.map((item, idx) => (
            <div
              key={item.role}
              className="bg-[#efeadd]/65 hover:bg-[#efeadd]/85 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 min-h-[280px]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#2a2a2a]/45">
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  <span className="uppercase font-bold tracking-wider text-[9px]" style={{ color: item.color }}>
                    Stakeholder
                  </span>
                </div>
                
                <div className="mt-6 flex items-center gap-3">
                  <span 
                    className="h-2.5 w-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: item.color }} 
                  />
                  <h3 className="font-display text-[21px] sm:text-[22px] font-bold text-[#161616] leading-tight">
                    {item.role}
                  </h3>
                </div>
                
                <ul className="mt-6 space-y-3.5">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      <span 
                        className="mt-2 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-[14.5px] text-[#2a2a2a]/85 leading-snug">
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </SectionBg>
  );
}
