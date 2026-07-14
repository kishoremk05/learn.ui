import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/support")({
  component: SupportPage,
});

function SupportPage() {
  return (
    <FooterPageLayout
      title="Support Center"
      subtitle="We're Here to Help"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          The Studiqs team is committed to supporting schools throughout onboarding, implementation, and ongoing platform usage. Whether you have questions about platform usage, account access, or general assistance, our team is available to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Support Services</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              We currently provide support for:
            </p>
            <ul className="list-disc pl-5 mt-2 text-[13.5px] text-[#2a2a2a]/75 space-y-1">
              <li>Account and access assistance</li>
              <li>Platform guidance</li>
              <li>Onboarding support</li>
              <li>General enquiries</li>
              <li>Service-related assistance</li>
            </ul>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Support Availability</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Support requests are reviewed and responded to as promptly as possible during business operations. Response times may vary depending on the nature and complexity of the request.
            </p>
          </div>
        </div>

        <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm mt-8">
          <h4 className="font-bold text-[#161616] font-display">✳︎ Contact Support</h4>
          <p className="text-[13.5px] mt-2 text-[#2a2a2a]/75">
            For support requests or assistance, please contact:
          </p>
          <a href="mailto:contact@studiqs.com" className="mt-2 inline-block text-[15px] font-semibold text-[#c97a3a] hover:underline">
            contact@studiqs.com
          </a>
        </div>
      </div>
    </FooterPageLayout>
  );
}
