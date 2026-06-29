import { useState } from "react";
import { Arrow, Reveal, SectionBg, SectionHeading } from "./atoms";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Mod = { name: string; desc: string; tag: string; details: string[] };

const MODS: Mod[] = [
  { 
    name: "Early Years", 
    desc: "Developmental milestone tracking, language readiness scores, and foundational learning indicators.", 
    tag: "LKG – UKG",
    details: [
      "Early Learning Readiness Index (ELRI) tracking",
      "Speech & motor skill development monitoring",
      "Attendance impact on early socialization",
      "Parent milestone alerts & guidance tips"
    ]
  },
  { 
    name: "Primary School", 
    desc: "Numeracy and literacy gap analysis, subject-wise performance trends, and habit formation tracking.", 
    tag: "Class 1 – 5",
    details: [
      "Foundational literacy & numeracy tracking",
      "Daily reading and spelling progress curves",
      "Homework compliance & study habit analytics",
      "Personalized learning readiness indicators"
    ]
  },
  { 
    name: "Middle School", 
    desc: "Deep topic gap detection across core subjects, multi-subject average curves, and teacher alert systems.", 
    tag: "Class 6 – 9",
    details: [
      "Topic-level gap detection (Mathematics, Science, English)",
      "Multi-subject average performance trajectories",
      "Subject-wise strength & weakness mapping",
      "Automated teacher intervention alerts"
    ]
  },
  { 
    name: "Secondary School", 
    desc: "CBSE Board Exam readiness predictions, mock score analysis, and active at-risk student alerts.", 
    tag: "Class 10",
    details: [
      "CBSE Board Exam score predictions with high confidence intervals",
      "Detailed mock exam performance & confidence level analysis",
      "Weak-topic concept diagnostic logs",
      "Active risk identification and revision recommendation guides"
    ]
  },
  { 
    name: "Senior Secondary", 
    desc: "Stream-specific diagnostics, university preparation indexes, and career readiness scoring.", 
    tag: "Class 11 – 12",
    details: [
      "Subject stream diagnostic analytics",
      "Career interest index alignment tool",
      "Advanced assessment & mock exam diagnostics",
      "University and higher education readiness reports"
    ]
  },
  { 
    name: "College Admissions", 
    desc: "Predict university cutoffs, target stream matching, and custom score improvement plans based on past results.", 
    tag: "Higher Ed",
    details: [
      "AI-driven cutoff prediction for top universities",
      "Gap analysis to hit target college cutoff scores",
      "Course-specific stream matching and recommendations",
      "Detailed score improvement path tracking"
    ]
  },
];

const TAG_COLOR: Record<string, string> = {
  "LKG – UKG": "bg-[#7a4ea1]/12 text-[#5e3c80]",
  "Class 1 – 5": "bg-[#3e5db0]/12 text-[#3a4d8f]",
  "Class 6 – 9": "bg-[#3a6b4a]/12 text-[#2f5b3e]",
  "Class 10": "bg-[#c97a3a]/15 text-[#a8632a]",
  "Class 11 – 12": "bg-[#1a1a1a]/8 text-[#1a1a1a]",
  "Higher Ed": "bg-[#e05252]/12 text-[#a83434]",
};

export function Modules() {
  const [selectedMod, setSelectedMod] = useState<Mod | null>(null);

  return (
    <SectionBg id="modules" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionHeading kicker="Class Coverage">
              From LKG to Class 12.
              <br />
              Complete academic intelligence.
            </SectionHeading>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <p className="text-[15.5px] leading-[1.7] text-[#2a2a2a]/85 max-w-[440px] lg:ml-auto">
              From early years developmental milestones to secondary board exam prep and stream selection, Studiqs tracks growth across every stage.
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
