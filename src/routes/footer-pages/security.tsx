import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/security")({
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <FooterPageLayout
      title="Security & Privacy"
      subtitle="Security and Privacy by Design"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Studiqs is designed with a strong focus on protecting educational information and supporting responsible data practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Controlled Access</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Access to information is restricted based on user roles and permissions to ensure that users only access information relevant to their responsibilities.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Secure Data Handling</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Educational information is processed and managed using secure and responsible data handling practices.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Protected Infrastructure</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Studiqs operates on secure cloud infrastructure managed through trusted technology providers.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Privacy Focused Approach</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Student and school information is handled with confidentiality and care, with access limited to authorized users only.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">Data Ownership</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Schools retain ownership of their institutional and student data. Studiqs acts solely as a technology platform that processes information to provide educational insights and services.
            </p>
          </div>
        </div>

        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-8">
          <h4 className="font-bold text-[#161616] mb-2 font-display">✳︎ Responsible Operations</h4>
          <p className="text-[13.5px]">
            Studiqs continuously aims to maintain appropriate safeguards to support the confidentiality, integrity, and availability of educational information.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
