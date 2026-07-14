import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/features")({
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <FooterPageLayout
      title="Platform Features"
      subtitle="Educational Intelligence for Schools"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Studiqs helps schools transform academic data into meaningful insights that support students, teachers, parents, and school leadership.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Academic Performance Insights</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Understand student progress through meaningful academic indicators and trends:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[13.5px] text-[#2a2a2a]/75 space-y-1">
              <li>Performance tracking</li>
              <li>Progress monitoring</li>
              <li>Strength and improvement areas</li>
              <li>Academic trend visibility</li>
            </ul>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Learning Insights</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Support better educational outcomes through improved visibility into learning progress:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[13.5px] text-[#2a2a2a]/75 space-y-1">
              <li>Learning progression indicators</li>
              <li>Readiness insights</li>
              <li>Early support identification</li>
            </ul>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Parent Visibility</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Enable parents to stay informed through clear and actionable educational insights:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[13.5px] text-[#2a2a2a]/75 space-y-1">
              <li>Progress updates</li>
              <li>Performance visibility</li>
              <li>Educational recommendations</li>
            </ul>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">School Intelligence</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Provide leadership teams with aggregated academic insights to support decision-making:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[13.5px] text-[#2a2a2a]/75 space-y-1">
              <li>Class-level insights</li>
              <li>School-wide trends</li>
              <li>Performance summaries</li>
            </ul>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Security & Privacy</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Built with secure data handling practices and privacy-focused design principles:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[13.5px] text-[#2a2a2a]/75 space-y-1">
              <li>Controlled access</li>
              <li>Secure infrastructure</li>
              <li>Responsible data practices</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-8">
          <h4 className="font-bold text-[#161616] mb-2 font-display">✳︎ Responsible Educational Intelligence</h4>
          <p className="text-[13.5px]">
            Studiqs provides educational insights, recommendations, risk indicators, and trend analysis intended to support educational decision-making.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
