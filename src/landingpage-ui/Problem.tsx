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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {STAKEHOLDER_PROBLEMS.map((item, idx) => (
            <Reveal
              key={item.role}
              delay={idx * 100}
              className="group relative rounded-3xl border bg-[#efeadd]/65 p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#efeadd] hover:shadow-[0_20px_35px_-20px_rgba(20,20,20,0.15)]"
              style={{ borderColor: item.borderColor }}
            >
              <div className="flex items-center gap-3">
                <span 
                  className="h-2.5 w-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: item.color }} 
                />
                <h3 className="font-display text-[22px] sm:text-[24px] text-[#161616] font-semibold">
                  {item.role}
                </h3>
              </div>
              
              <ul className="mt-8 space-y-4">
                {item.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <span 
                      className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[15px] sm:text-[16px] text-[#2a2a2a]/85 leading-snug">
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBg>
  );
}
