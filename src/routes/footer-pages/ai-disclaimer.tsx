import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/ai-disclaimer")({
  component: AIDisclaimerPage,
});

function AIDisclaimerPage() {
  return (
    <FooterPageLayout
      title="AI Disclaimer"
      subtitle="Last Updated: July 2026"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Studiqs may provide AI-assisted educational insights, recommendations, indicators, and trend analysis intended to support schools, educators, parents, and students in understanding educational information more effectively. These outputs are designed solely for educational support purposes and should be considered advisory in nature.
        </p>

        <p>
          AI-generated outputs provided by Studiqs are not intended to serve as final academic decisions, professional educational advice, counselling services, admission guidance, career advice, or institutional policy decisions.
        </p>

        <p>
          Schools, educators, parents, and students are encouraged to exercise independent judgment and consider institutional policies and professional guidance when making important decisions.
        </p>

        <p>
          While Studiqs continuously strives to improve the quality and relevance of its outputs, AI-generated insights may not always reflect complete contextual information and should not be relied upon as the sole basis for decision-making.
        </p>

        <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm mt-8">
          <h4 className="font-bold text-[#161616] font-display">✳︎ AI Advisory Policy</h4>
          <p className="text-[14px] mt-2 text-[#2a2a2a]/75">
            Studiqs shall not be held responsible for decisions or actions taken solely on the basis of AI-generated outputs or recommendations.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
