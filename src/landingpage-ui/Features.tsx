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
    <SectionBg id="platform" variant="solid" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
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

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {HIGHLIGHTS.map((h, i) => (
            <Reveal
              key={h.title}
              delay={i * 100}
              as="article"
              className="bg-white border border-[#1a1a1a]/10 rounded-3xl p-8 sm:p-10 flex flex-col hover:shadow-[0_20px_35px_-20px_rgba(26,26,26,0.08)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
            >
              {/* Highlight Kicker */}
              <div className="text-[11px] font-mono tracking-[0.2em] uppercase font-bold" style={{ color: h.color }}>
                Highlight {String(i + 1).padStart(2, "0")}
              </div>
              
              {/* Title */}
              <h3 className="mt-2 font-display text-[22px] sm:text-[24px] font-bold text-[#161616]">
                {h.title}
              </h3>
              
              {/* Features List with Horizontal Dividers */}
              <ul className="mt-8 flex flex-col">
                {h.features.map((feat) => (
                  <li 
                    key={feat} 
                    className="flex items-center gap-3 py-4 border-b border-[#1a1a1a]/10 last:border-b-0"
                  >
                    <span 
                      className="text-[16px] font-bold shrink-0"
                      style={{ color: h.color }}
                    >
                      →
                    </span>
                    <span className="text-[15px] text-[#2a2a2a]/85 leading-normal">
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
