import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/security")({
  component: SecurityPage,
});

function SecurityPage() {
  return (
    <FooterPageLayout
      title="Security & Compliance"
      subtitle="Your data is protected. Built to meet local compliance and institutional security standards."
    >
      <div className="space-y-8 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p>
          At Studiqs, protecting student record data and institutional reports is our highest priority. We employ advanced technical safeguards and comply with local data policies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">1. Compliant Cloud Hosting</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Studiqs databases are hosted on secure, enterprise-grade cloud server regions. We support localized data hosting setups to ensure full compliance with regional data residency policies and regulatory requirements for schools.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">2. End-to-End Encryption</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              All data transmitted to or from Studiqs is encrypted in transit using industry-standard TLS 1.3 encryption. At-rest databases are encrypted using AES-256 keys to protect sensitive student performance files.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">3. Role-Based Access (RBAC)</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Access permissions are strictly governed. Teachers, students, parents, and school administrators only see the specific modules and records assigned to their designated role, preventing unauthorized visibility.
            </p>
          </div>

          <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-display text-[18px] font-bold text-[#161616]">4. Privacy & Compliance</h3>
            <p className="mt-2 text-[13.5px] text-[#2a2a2a]/75">
              Our data processing policies are strictly aligned with global standards like GDPR and regional privacy laws, guaranteeing parents and students complete control over their personal academic records.
            </p>
          </div>
        </div>

        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-8">
          <h4 className="font-bold text-[#161616] mb-2 font-display">✳︎ Penetration Testing & Audits</h4>
          <p className="text-[13.5px]">
            We perform regular third-party vulnerability scans and network penetration tests on our servers. Security reports are available for review by institutional IT heads under NDA during onboarding.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
