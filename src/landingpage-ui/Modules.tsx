import { Arrow, Reveal, SectionBg, SectionHeading } from "./atoms";

type Mod = { name: string; desc: string; tag: string };

const MODS: Mod[] = [
  { name: "Admissions Portal", desc: "Digital applications, document checks, approvals.", tag: "Operations" },
  { name: "Student Information System", desc: "One profile per student. Lifetime history.", tag: "Operations" },
  { name: "Academic Planning", desc: "Subjects, terms, timetables, syllabi.", tag: "Academics" },
  { name: "Examination Management", desc: "Schedules, grading, scorecards, analytics.", tag: "Academics" },
  { name: "Finance & Accounting", desc: "Fees, invoices, ledgers — AED native.", tag: "Finance" },
  { name: "HR & Payroll", desc: "Staff records, leaves, salaries, compliance.", tag: "Finance" },
  { name: "Library Management", desc: "Catalogue, circulation, fines, returns.", tag: "Operations" },
  { name: "Transport Tracking", desc: "Routes, live buses, parent notifications.", tag: "Operations" },
  { name: "Parent Mobile App", desc: "Attendance, fees, homework, circulars.", tag: "Engagement" },
  { name: "Teacher Portal", desc: "Lessons, attendance, grades, comms.", tag: "Engagement" },
  { name: "Principal Dashboard", desc: "Live KPIs across the entire campus.", tag: "Leadership" },
  { name: "Multi-Campus Management", desc: "Run several schools from one console.", tag: "Leadership" },
];

const TAG_COLOR: Record<string, string> = {
  Operations: "bg-[#1a1a1a]/8 text-[#1a1a1a]",
  Academics: "bg-[#c97a3a]/15 text-[#a8632a]",
  Finance: "bg-[#3a6b4a]/12 text-[#2f5b3e]",
  Engagement: "bg-[#3e5db0]/12 text-[#3a4d8f]",
  Leadership: "bg-[#7a4ea1]/12 text-[#5e3c80]",
};

export function Modules() {
  return (
    <SectionBg id="modules" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Modules">
              Powerful modules.
              <br />
              One platform.
            </SectionHeading>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.7] text-[#2a2a2a]/85 max-w-[440px] lg:ml-auto">
              Each module works on its own and shines together. Mix what your
              school needs today, expand whenever you're ready.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MODS.map((m, i) => (
            <Reveal
              key={m.name}
              delay={(i % 3) * 90 + Math.floor(i / 3) * 40}
              className="group relative rounded-2xl border border-[#1a1a1a]/10 bg-[#efeadd]/80 backdrop-blur-sm p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-[#efeadd] hover:border-[#1a1a1a]/25 hover:shadow-[0_24px_40px_-24px_rgba(20,20,20,0.25)]"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10.5px] tracking-[0.16em] uppercase ${TAG_COLOR[m.tag]}`}
                >
                  {m.tag}
                </span>
                <span className="text-[10.5px] tracking-widest text-[#2a2a2a]/50">
                  M.{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-8 font-display text-[22px] leading-tight text-[#161616]">
                {m.name}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#2a2a2a]/75">
                {m.desc}
              </p>

              <div className="mt-7 flex items-center justify-between text-[13px] text-[#1a1a1a]/75">
                <span className="inline-flex items-center gap-2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  Learn more
                  <Arrow />
                </span>
                <span className="h-7 w-7 rounded-full border border-[#1a1a1a]/20 grid place-items-center group-hover:bg-[#1a1a1a] group-hover:text-[#efeadd] group-hover:border-[#1a1a1a] transition">
                  <Arrow />
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-7 -bottom-px h-px bg-gradient-to-r from-transparent via-[#c97a3a]/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBg>
  );
}
