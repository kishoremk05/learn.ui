import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/disclaimer")({
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <FooterPageLayout
      title="Disclaimer"
      subtitle="Last Updated: July 2026"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          The information, insights, recommendations, indicators, and reports provided through the Studiqs platform are intended solely to support educational understanding and decision-making. Studiqs provides educational intelligence designed to assist schools, educators, parents, and students by presenting meaningful academic information and trends.
        </p>

        <p>
          While reasonable efforts are made to ensure the quality and relevance of platform outputs, Studiqs does not guarantee the completeness, accuracy, suitability, or outcomes of any recommendation, insight, or indicator generated through the platform.
        </p>

        <p>
          Educational decisions, academic interventions, admissions, assessments, promotions, disciplinary actions, and institutional policies remain the sole responsibility of the respective school, educator, parent, guardian, or student.
        </p>

        <p>
          The use of Studiqs does not replace professional educational judgment, institutional processes, or independent evaluation by qualified individuals.
        </p>

        <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm mt-8">
          <h4 className="font-bold text-[#161616] font-display">✳︎ Advisory Nature</h4>
          <p className="text-[14px] mt-2 text-[#2a2a2a]/75">
            Studiqs shall not be held responsible for decisions or actions taken solely on the basis of information, insights, recommendations, or outputs generated through the platform.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
