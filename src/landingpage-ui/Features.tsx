import { Reveal, SectionBg, SectionHeading } from "./atoms";

const HIGHLIGHTS = [
  {
    title: "Student Intelligence",
    color: "#c97a3a",
    borderColor: "rgba(201, 122, 58, 0.2)",
    features: [
      "Academic performance tracking",
      "Subject-wise strength/weakness analysis",
      "Attendance intelligence",
      "Learning readiness indicators",
      "Achievement portfolio",
      "Personalized recommendations",
    ],
  },
  {
    title: "Parent Engagement",
    color: "#3e5db0",
    borderColor: "rgba(62, 93, 176, 0.2)",
    features: [
      "Child performance visibility",
      "Parent-friendly insights",
      "Achievement tracking",
      "Teacher communication hub",
      "Satisfaction surveys",
    ],
  },
  {
    title: "Teacher Intelligence",
    color: "#3a6b4a",
    borderColor: "rgba(58, 107, 74, 0.2)",
    features: [
      "Classroom analytics",
      "Weak student identification",
      "Subject performance analysis",
      "Attendance impact monitoring",
      "Intervention recommendations",
    ],
  },
  {
    title: "Management Intelligence",
    color: "#7a4ea1",
    borderColor: "rgba(122, 78, 161, 0.2)",
    features: [
      "School-wide performance monitoring",
      "Academic risk analysis",
      "Admissions insights",
      "Parent satisfaction analytics",
      "Achievement intelligence",
      "Institutional performance trends",
    ],
  },
];

export function Features() {
  return (
    <SectionBg id="platform" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="Platform Highlights" align="center">
            Intelligence for every role.
          </SectionHeading>
          
          <Reveal delay={120}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85 font-medium">
              Designed to empower the entire educational ecosystem. Explore the specialized intelligence systems built into Studiqs:
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal
              key={h.title}
              delay={i * 100}
              as="article"
              className="bg-[#efeadd]/65 border rounded-3xl p-8 sm:p-10 flex flex-col hover:bg-[#efeadd] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_35px_-20px_rgba(20,20,20,0.15)]"
              style={{ borderColor: h.borderColor }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span 
                    className="h-2.5 w-2.5 rounded-full shrink-0" 
                    style={{ backgroundColor: h.color }} 
                  />
                  <h3 className="font-display text-[22px] sm:text-[24px] text-[#161616] font-semibold">
                    {h.title}
                  </h3>
                </div>
                <span className="text-[11px] tracking-widest text-[#2a2a2a]/55 font-mono">
                  HIGHLIGHT {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-1">
                {h.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <svg
                      className="mt-1.5 h-4 w-4 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: h.color }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[14.5px] leading-snug text-[#2a2a2a]/85">
                      {feat}
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
