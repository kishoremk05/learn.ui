import { useState } from "react";
import { Arrow, Reveal, SectionBg, SectionHeading } from "./atoms";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Mod = { name: string; desc: string; tag: string; details: string[] };

const MODS: Mod[] = [
  { 
    name: "Admissions & Enrollment", 
    desc: "Digital applications, document verification, and automated approvals.", 
    tag: "Operations",
    details: [
      "Customizable registration & enrollment forms",
      "Secure digital document upload & verification",
      "Automated evaluation workflows with conditional approvals",
      "Instant email and SMS notification updates to parents"
    ]
  },
  { 
    name: "Student Information System", 
    desc: "One profile per student. Lifetime history.", 
    tag: "Operations",
    details: [
      "Unified academic, attendance & behavioral logs",
      "Integrated extracurricular achievements & portfolio builders",
      "Sibling & family relationships linkage",
      "Confidential health reports and custom support plans"
    ]
  },
  { 
    name: "Academic Planning", 
    desc: "Subjects, terms, timetables, syllabi.", 
    tag: "Academics",
    details: [
      "Multi-term scheduling matrix builders",
      "Conflict-free automatic room & teacher allocation",
      "Syllabus distribution trackers & progress audits",
      "Co-teacher assignments and substitution management"
    ]
  },
  { 
    name: "Examination Management", 
    desc: "Schedules, grading, scorecards, analytics.", 
    tag: "Academics",
    details: [
      "Flexible grading systems (GPA, CBSE, IB, custom matrices)",
      "Automated report card compilation & digital distribution",
      "Exam timetable generators & seating arrangement logs",
      "Cohort performance analytics and grade curve adjustments"
    ]
  },
  { 
    name: "HR & Payroll", 
    desc: "Staff records, leaves, salaries, compliance.", 
    tag: "Finance",
    details: [
      "Staff profiles, credentials & contract management",
      "Interactive leave application and validation dashboard",
      "Salary structures with allowance/deduction configuration",
      "Statutory compliance reporting & payslip printing"
    ]
  },
  { 
    name: "Parent Mobile App", 
    desc: "Attendance, fees, homework, circulars.", 
    tag: "Engagement",
    details: [
      "Real-time attendance alerts and check-in push notifications",
      "Direct homework feedback loops and submission trackers",
      "Integrated online fee payment gateways (AED native)",
      "Official school circulars & classroom announcement board"
    ]
  },
  { 
    name: "Teacher Portal", 
    desc: "Lessons, attendance, grades, comms.", 
    tag: "Engagement",
    details: [
      "Fast digital attendance rosters with batch updates",
      "Instant gradebook input & mark verification channels",
      "Collaborative lesson planning template repository",
      "Teacher-parent messaging center with translate features"
    ]
  },
  { 
    name: "Principal Dashboard", 
    desc: "Live KPIs across the entire campus.", 
    tag: "Leadership",
    details: [
      "Real-time enrollment, retention, and capacity figures",
      "Income vs expense sheets & outstanding fee summaries",
      "School-wide academic quality and cohort success curves",
      "Staff utilization ratios & schedule compliance checks"
    ]
  },
  { 
    name: "Multi-Campus Management", 
    desc: "Run several schools from one console.", 
    tag: "Leadership",
    details: [
      "Single sign-on master control panel for multiple campuses",
      "Branch-by-branch operational comparisons",
      "Consolidated financial and tax statements",
      "Global curriculum templates and assessment alignments"
    ]
  },
];

const TAG_COLOR: Record<string, string> = {
  Operations: "bg-[#1a1a1a]/8 text-[#1a1a1a]",
  Academics: "bg-[#c97a3a]/15 text-[#a8632a]",
  Finance: "bg-[#3a6b4a]/12 text-[#2f5b3e]",
  Engagement: "bg-[#3e5db0]/12 text-[#3a4d8f]",
  Leadership: "bg-[#7a4ea1]/12 text-[#5e3c80]",
};

export function Modules() {
  const [selectedMod, setSelectedMod] = useState<Mod | null>(null);

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

        <Reveal delay={200} className="mt-14 rounded-3xl border border-white bg-white overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
          {MODS.map((m, i) => (
            <div
              key={m.name}
              className="bg-[#efeadd]/65 hover:bg-[#efeadd]/85 p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 min-h-[220px]"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#2a2a2a]/45">
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <span className={`rounded px-1.5 py-0.5 text-[8.5px] uppercase tracking-wider ${TAG_COLOR[m.tag]}`}>
                    {m.tag}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[19px] sm:text-[20px] font-bold text-[#161616] leading-tight">
                  {m.name}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.65] text-[#2a2a2a]/75">
                  {m.desc}
                </p>
              </div>

              <div 
                className="mt-6 flex items-center justify-between text-[12px] font-semibold text-[#161616] hover:text-[#c97a3a] transition-colors duration-200 cursor-pointer"
                onClick={() => setSelectedMod(m)}
              >
                <span className="inline-flex items-center gap-1.5">
                  Learn more <Arrow className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>

      <Dialog open={!!selectedMod} onOpenChange={(open) => !open && setSelectedMod(null)}>
        <DialogContent className="w-[calc(100%-2.5rem)] max-w-md bg-[#efeadd] border border-[#1a1a1a]/12 rounded-3xl p-6 sm:p-10 shadow-2xl text-[#161616] [&>button]:text-[#1a1a1a] [&>button]:hover:bg-[#1a1a1a]/10 [&>button]:focus:outline-none [&>button]:focus:ring-0 [&>button]:right-6 [&>button]:top-6 [&>button]:p-1 [&>button]:rounded-full">
          {selectedMod && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between text-[11px] font-mono text-[#2a2a2a]/45 mb-2">
                  <span className={`rounded px-1.5 py-0.5 text-[8.5px] uppercase tracking-wider ${TAG_COLOR[selectedMod.tag]}`}>
                    {selectedMod.tag}
                  </span>
                </div>
                <DialogTitle className="mt-2 font-display text-[22px] font-bold leading-tight">
                  {selectedMod.name}
                </DialogTitle>
                <DialogDescription className="mt-3 text-[14.5px] leading-relaxed text-[#2a2a2a]/75">
                  {selectedMod.desc}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 border-t border-[#1a1a1a]/10 pt-6">
                <h4 className="text-[11px] font-mono uppercase tracking-wider text-[#2a2a2a]/55 mb-4">Key Features</h4>
                <ul className="space-y-3.5">
                  {selectedMod.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#c97a3a] font-bold text-[15px] mt-0.5 leading-none">→</span>
                      <span className="text-[14px] leading-snug text-[#2a2a2a]/85">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </SectionBg>
  );
}
