import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/modules")({
  component: ModulesPage,
});

const MODS = [
  { name: "Topic Gap Analytics", desc: "Automated analysis of student mock tests and marks sheets to pinpoint specific weak concepts before exam periods.", tag: "Academics" },
  { name: "Board Readiness Engine", desc: "AI-driven forecasting tool that uses historical mock exams and term records to predict final Board results.", tag: "Academics" },
  { name: "Student Dashboard", desc: "Specialized student portal displaying personal topic checklists, strengths, and smart revision targets.", tag: "Dashboards" },
  { name: "Parent Guidance Portal", desc: "Gives parents complete visibility into student growth trends and provides simple home-learning support tips.", tag: "Dashboards" },
  { name: "Teacher Intervention Assistant", desc: "Automatically flags at-risk students and generates recommended curriculum revision plans for classrooms.", tag: "Intelligence" },
  { name: "Management Foresight Console", desc: "Provides high-level school headers and district comparison charts tracking academic quality metrics.", tag: "Leadership" },
  { name: "Future Readiness Scorer", desc: "Maps learning strengths to career streams and evaluates higher education benchmarks and readiness.", tag: "Future Planning" },
];

function ModulesPage() {
  return (
    <FooterPageLayout
      title="Platform Modules"
      subtitle="A modular architecture built to scale. Pick what your school needs today, expand when ready."
    >
      <div className="space-y-10 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p>
          Studiqs brings every aspect of school operations together. Each module is fully functional on its own, but integrates seamlessly with others to power our central AI analytics engine.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {MODS.map((m, idx) => (
            <div key={m.name} className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest text-[#2a2a2a]/60 uppercase bg-[#1a1a1a]/5 px-2 py-0.5 rounded">
                  {m.tag}
                </span>
                <span className="text-[11px] font-mono text-[#c97a3a] font-semibold">
                  M.{String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-[18px] font-bold text-[#161616]">{m.name}</h3>
              <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </FooterPageLayout>
  );
}
