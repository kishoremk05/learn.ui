import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/modules")({
  component: ModulesPage,
});

const STAKEHOLDER_MODULES = [
  { name: "Student Module", desc: "Provides students with visibility into their academic progress, strengths, and opportunities for improvement." },
  { name: "Parent Module", desc: "Helps parents stay informed through simplified progress updates and educational insights." },
  { name: "Teacher Module", desc: "Supports educators with classroom-level insights that assist teaching and intervention efforts." },
  { name: "School Leadership Module", desc: "Provides school leadership with aggregated academic insights and institutional performance visibility." },
  { name: "Educational Intelligence Module", desc: "Transforms educational data into meaningful insights, trends, and indicators to support informed decision-making." },
  { name: "Security & Access Module", desc: "Ensures secure access, controlled permissions, and responsible handling of educational information." },
];

function ModulesPage() {
  return (
    <FooterPageLayout
      title="Platform Modules"
      subtitle="Designed Around Educational Stakeholders"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Studiqs delivers educational intelligence through modules designed to support different stakeholders within the learning ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {STAKEHOLDER_MODULES.map((m, idx) => (
            <div key={m.name} className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-[#c97a3a] font-semibold">
                  MODULE {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-[18px] font-bold text-[#161616]">{m.name}</h3>
              <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-8">
          <h4 className="font-bold text-[#161616] mb-2 font-display">✳︎ Built to Support Schools Across Learning Stages</h4>
          <p className="text-[13.5px]">
            Studiqs is designed to support institutions across multiple academic stages and learning journeys while adapting to their educational needs.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
