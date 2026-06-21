import { useState } from "react";
import { Reveal, SectionBg, SectionHeading } from "./atoms";

type TabId = "students" | "parents" | "teachers" | "management";

type TabContent = {
  label: string;
  roleTitle: string;
  kicker: string;
  desc: string;
  color: string;
  accentBg: string;
  features: string[];
  mockup: () => React.JSX.Element;
};

export function PeopleSection() {
  const [activeTab, setActiveTab] = useState<TabId>("students");

  const TABS: Record<TabId, TabContent> = {
    students: {
      label: "Students",
      roleTitle: "Personal Growth & Trajectory",
      kicker: "Own Your Academic Journey",
      desc: "Identify strengths, improve weaknesses, and stay on track toward academic goals with simple, direct indicators.",
      color: "#c97a3a",
      accentBg: "bg-[#c97a3a]/8",
      features: [
        "Track subject-wise average grades and performance history",
        "View customized revision recommendations",
        "Access digital achievement portfolios and credentials",
      ],
      mockup: () => (
        <div className="bg-white/60 border border-[#1a1a1a]/8 rounded-2xl p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#2a2a2a]/60 uppercase font-bold">
              <span>Student Workspace</span>
              <span className="text-[#c97a3a] font-bold">Class 10-A</span>
            </div>
            <h4 className="font-display text-[15px] font-bold text-[#161616] mt-3">Next Revision Target</h4>
            
            <div className="mt-3.5 p-3 bg-[#efeadd]/60 border border-[#1a1a1a]/5 rounded-xl">
              <div className="text-[11.5px] font-semibold text-[#161616]">Physics — Electromagnetic Induction</div>
              <div className="text-[10px] text-[#2a2a2a]/70 mt-1">Recommended: 15 Quiz Questions</div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-[11px] text-[#2a2a2a]/80">
                <span>Algebra readiness</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="h-1 bg-[#1a1a1a]/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#c97a3a] rounded-full" style={{ width: "92%" }} />
              </div>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#1a1a1a]/5 text-[10px] font-mono text-[#2a2a2a]/55">
            Updated: 2 hours ago
          </div>
        </div>
      ),
    },
    parents: {
      label: "Parents",
      roleTitle: "Complete Visibility & Guidance",
      kicker: "Stay Connected with Growth",
      desc: "Gain complete visibility into your child's academic journey with simple, actionable insights instead of final report card surprises.",
      color: "#3e5db0",
      accentBg: "bg-[#3e5db0]/8",
      features: [
        "Monitor daily attendance logs and class participations",
        "Receive alerts on learning gaps and recommended actions",
        "Direct communications channel with course teachers",
      ],
      mockup: () => (
        <div className="bg-white/60 border border-[#1a1a1a]/8 rounded-2xl p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#2a2a2a]/60 uppercase font-bold">
              <span>Parent Portal</span>
              <span className="text-[#3e5db0] font-bold">Aarav Sharma</span>
            </div>
            <h4 className="font-display text-[15px] font-bold text-[#161616] mt-3">Child Growth Snapshot</h4>
            
            <div className="mt-4 space-y-2.5">
              <div className="flex justify-between items-center bg-[#efeadd]/60 border border-[#1a1a1a]/5 rounded-xl p-2.5">
                <span className="text-[12px] font-medium text-[#161616]">Weekly Attendance</span>
                <span className="text-[11px] font-mono text-[#3a6b4a] font-semibold bg-[#3a6b4a]/10 px-2 py-0.5 rounded">100% Present</span>
              </div>
              <div className="flex justify-between items-center bg-[#efeadd]/60 border border-[#1a1a1a]/5 rounded-xl p-2.5">
                <span className="text-[12px] font-medium text-[#161616]">Latest Assessment</span>
                <span className="text-[11px] font-mono text-[#3e5db0] font-semibold bg-[#3e5db0]/10 px-2 py-0.5 rounded">Grade A-</span>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#1a1a1a]/5 text-[10px] font-mono text-[#2a2a2a]/55">
            Verified by Horizon Heights Registrar
          </div>
        </div>
      ),
    },
    teachers: {
      label: "Teachers",
      roleTitle: "Classroom Analytics & Interventions",
      kicker: "Focus on Teaching, Not Admin",
      desc: "Focus on the right students, the right topics, and the right interventions with automatic intelligence dashboards.",
      color: "#3a6b4a",
      accentBg: "bg-[#3a6b4a]/8",
      features: [
        "View automated classroom average trends and outliers",
        "Identify specific students who require immediate attention",
        "Auto-generate curriculum intervention guides",
      ],
      mockup: () => (
        <div className="bg-white/60 border border-[#1a1a1a]/8 rounded-2xl p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#2a2a2a]/60 uppercase font-bold">
              <span>Teacher Workspace</span>
              <span className="text-[#3a6b4a] font-bold">Class 10-A</span>
            </div>
            <h4 className="font-display text-[15px] font-bold text-[#161616] mt-3">Classroom Alerts</h4>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 bg-[#c97a3a]/8 border border-[#c97a3a]/15 rounded-xl p-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c97a3a] shrink-0" />
                <span className="text-[11.5px] text-[#2a2a2a] leading-tight">
                  <strong>2 students</strong> are sliding in math quadratic assessments.
                </span>
              </div>
              <div className="flex items-center gap-2 bg-[#3e5db0]/8 border border-[#3e5db0]/15 rounded-xl p-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3e5db0] shrink-0" />
                <span className="text-[11.5px] text-[#2a2a2a] leading-tight">
                  Trigonometry assessment scheduled for next Monday.
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#1a1a1a]/5 text-[10px] font-mono text-[#2a2a2a]/55">
            Suggested: 1 intervention session
          </div>
        </div>
      ),
    },
    management: {
      label: "School Management",
      roleTitle: "Institutional Academic Intelligence",
      kicker: "Data-Backed Decision Making",
      desc: "Monitor school-wide academic indicators, risks, and enrollment indices from one unified leadership console.",
      color: "#7a4ea1",
      accentBg: "bg-[#7a4ea1]/8",
      features: [
        "Aggregate multiple campuses and report macro trends",
        "Analyze admission pipelines and enrollment statistics",
        "Monitor parent satisfaction metrics and communication logs",
      ],
      mockup: () => (
        <div className="bg-white/60 border border-[#1a1a1a]/8 rounded-2xl p-5 flex flex-col justify-between h-full shadow-sm">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[#2a2a2a]/60 uppercase font-bold">
              <span>Management Hub</span>
              <span className="text-[#7a4ea1] font-bold">All Campus</span>
            </div>
            <h4 className="font-display text-[15px] font-bold text-[#161616] mt-3">Institutional Health</h4>
            
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="bg-white/60 border border-[#1a1a1a]/5 rounded-xl p-2.5 text-center">
                <div className="text-[14px] font-bold text-[#161616]">94.2%</div>
                <div className="text-[9px] font-mono text-[#2a2a2a]/55 uppercase mt-0.5">Parent Sat.</div>
              </div>
              <div className="bg-white/60 border border-[#1a1a1a]/5 rounded-xl p-2.5 text-center">
                <div className="text-[14px] font-bold text-[#161616]">88.5%</div>
                <div className="text-[9px] font-mono text-[#2a2a2a]/55 uppercase mt-0.5">Overall GPA</div>
              </div>
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#1a1a1a]/5 text-[10px] font-mono text-[#2a2a2a]/55">
            Audit status: Complete
          </div>
        </div>
      ),
    },
  };

  return (
    <SectionBg id="stakeholders" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="Designed for Everyone" align="center">
            Built for every stakeholder.
          </SectionHeading>
          
          <Reveal delay={120}>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85 font-medium">
              Academic intelligence requires collaboration. Studiqs provides personalized workspaces tailored to the distinct needs of each member of your school community:
            </p>
          </Reveal>
        </div>

        {/* Unified Mockup App Dashboard Container */}
        <Reveal delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl border border-[#1a1a1a]/12 overflow-hidden bg-[#efeadd]/75 backdrop-blur-md shadow-[0_24px_50px_-20px_rgba(26,26,26,0.15)] items-stretch">
            
            {/* Dashboard Sidebar Navigation */}
            <div className="md:col-span-3 bg-[#1a1a1a]/4 border-r border-[#1a1a1a]/8 p-4 flex flex-col gap-1">
              <div className="px-3.5 py-3 mb-2">
                <span className="text-[10px] font-mono tracking-widest text-[#2a2a2a]/50 uppercase font-bold">Role Workspace</span>
              </div>
              
              {Object.entries(TABS).map(([id, item]) => {
                const active = activeTab === id;
                const activeBg = active 
                  ? "bg-white/70 border-[#1a1a1a]/15 shadow-sm text-[#161616]" 
                  : "bg-transparent border-transparent text-[#2a2a2a]/75 hover:bg-white/30";
                
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id as TabId)}
                    className={`text-left px-3.5 py-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${activeBg}`}
                  >
                    <div className="flex items-center gap-3">
                      <span 
                        className={`h-2.5 w-2.5 rounded-full transition-transform ${active ? "scale-125" : "scale-100"}`} 
                        style={{ backgroundColor: item.color }} 
                      />
                      <span className="font-display text-[15.5px] font-bold">
                        {item.label}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] opacity-40 group-hover:opacity-70 transition-opacity">
                      {active ? "Active" : "Open"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dashboard Main Workspace Area */}
            <div className="md:col-span-9 p-6 sm:p-8 flex flex-col justify-between min-h-[400px]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start h-full">
                
                {/* Left Details Panel */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <span className={`inline-flex items-center rounded px-2 py-0.5 text-[10px] font-mono tracking-widest uppercase font-semibold ${TABS[activeTab].accentBg}`} style={{ color: TABS[activeTab].color }}>
                      {TABS[activeTab].kicker}
                    </span>
                    <h3 className="font-display text-[22px] sm:text-[24px] font-bold text-[#161616] mt-4 leading-tight">
                      {TABS[activeTab].roleTitle}
                    </h3>
                    <p className="mt-4 text-[14.5px] leading-relaxed text-[#2a2a2a]/80">
                      {TABS[activeTab].desc}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {TABS[activeTab].features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <span className="text-[12px] mt-0.5 font-bold" style={{ color: TABS[activeTab].color }}>✳︎</span>
                        <span className="text-[13.5px] text-[#2a2a2a]/85 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Inner Workspace Widget */}
                <div className="md:col-span-5 flex items-stretch h-full min-h-[220px]">
                  <div className="w-full flex flex-col justify-center">
                    {TABS[activeTab].mockup()}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </SectionBg>
  );
}
