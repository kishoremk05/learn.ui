import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/support")({
  component: SupportPage,
});

function SupportPage() {
  return (
    <FooterPageLayout
      title="Support Center"
      subtitle="Dedicated help and SLAs designed to ensure continuous school operations."
    >
      <div className="space-y-8 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p>
          We know that school platforms are critical to daily operations. Our support teams are available globally and regionally to assist with any questions, training, or onboarding issues immediately.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">24/7 Monitoring</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Our engineering team continuously monitors systems to ensure maximum uptime, ensuring parent apps and admin dashboards load instantly.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Dedicated Support SLA</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Standard plans include email support with a guaranteed 4-hour response time. Growth and Enterprise plans include phone support and under-1-hour response times.
            </p>
          </div>
        </div>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Training & Onboarding</h3>
        <p>
          During the initial setup, our team hosts on-site or virtual training workshops for your school's administrators, registers teachers, and helps configure parental access permissions to ensure a smooth transition.
        </p>
        
        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-8">
          <h4 className="font-bold text-[#161616] mb-2 font-display">✳︎ Support Hotline</h4>
          <p className="text-[13.5px]">
            For urgent school assistance, administrators on our Growth and Enterprise plans can reach their dedicated support manager via phone or Slack channel directly.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
