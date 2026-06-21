import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/documentation")({
  component: DocumentationPage,
});

function DocumentationPage() {
  return (
    <FooterPageLayout
      title="Documentation Portal"
      subtitle="Guides, API access references, and tutorials for Studiqs integration."
    >
      <div className="space-y-10 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p>
          Welcome to the Studiqs documentation hub. Here, you'll find comprehensive guides to help school IT administrators configure dashboards, sync existing school databases, and set up role permissions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Administrator Guides</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Learn how to manage school configurations, set grading scales, configure AED currency settings, and set up HR calendars.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Teacher Onboarding</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Step-by-step guides for educators to record daily attendance, design lesson plans, and access class assessment analytics.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Parent & Student Tutorials</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Help guides for families to download the mobile application, track grade reports, and view co-curricular certificates.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">API Reference & Sync</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Documentation for school developers to integrate Studiqs with legacy identity providers and SIS systems using secure REST APIs.
            </p>
          </div>
        </div>
      </div>
    </FooterPageLayout>
  );
}
