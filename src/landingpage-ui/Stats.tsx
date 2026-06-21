import { Reveal, SectionBg, SectionHeading } from "./atoms";

const DATA = [
  { v: "15,000+", l: "Students Managed" },
  { v: "99.8%", l: "Attendance Accuracy" },
  { v: "92%", l: "Parent Engagement" },
  { v: "70%", l: "Admin Time Saved" },
  { v: "85%", l: "Fee Collection Efficiency" },
  { v: "99.9%", l: "System Uptime" },
];

export function Stats() {
  return (
    <SectionBg id="stats" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <SectionHeading kicker="By the numbers">
          Built to simplify
          <br />
          school operations.
        </SectionHeading>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-px bg-[#1a1a1a]/15 rounded-3xl overflow-hidden">
          {DATA.map((s, i) => (
            <Reveal
              key={s.l}
              delay={i * 80}
              className="bg-[#efeadd] p-8 sm:p-10 hover:bg-[#f4efe2] transition-colors duration-300"
            >
              <div className="font-display text-[42px] sm:text-[54px] leading-none text-[#161616] tracking-tight">
                {s.v}
              </div>
              <div className="mt-4 text-[12.5px] tracking-[0.18em] uppercase text-[#2a2a2a]/70">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBg>
  );
}
