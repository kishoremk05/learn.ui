import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/privacy-policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <FooterPageLayout
      title="Privacy Policy"
      subtitle="Last Updated: July 2026"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Studiqs Intelligence LLP ("Studiqs", "we", "our", or "us") is committed to protecting the privacy and confidentiality of educational information entrusted to us. This Privacy Policy explains how information is collected, used, stored, and protected when using the Studiqs platform and related services.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Information We Collect</h3>
        <p>Depending on the services used, Studiqs may process information such as:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Student academic information</li>
          <li>Assessment and performance records</li>
          <li>Learning progress information</li>
          <li>Parent or guardian contact information</li>
          <li>Teacher and school administrator information</li>
          <li>User account and authentication information</li>
          <li>Platform usage and support information</li>
        </ul>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">How Information Is Used</h3>
        <p>Information processed through Studiqs may be used to:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Deliver platform functionality and services</li>
          <li>Generate educational insights and recommendations</li>
          <li>Support academic progress monitoring</li>
          <li>Improve user experience and platform performance</li>
          <li>Provide customer support and service communications</li>
        </ul>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Data Ownership</h3>
        <p>
          Schools retain ownership of their institutional, staff, parent, and student information. Studiqs acts solely as a technology platform that processes information to provide services requested by the institution.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Data Access</h3>
        <p>
          Access to information is restricted to authorized users based on their roles and responsibilities. Studiqs personnel may access information only when necessary for support, maintenance, security, or service delivery purposes and under appropriate confidentiality obligations.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Data Storage and Security</h3>
        <p>
          Studiqs uses secure cloud infrastructure and responsible operational practices designed to support the confidentiality and integrity of educational information.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Data Retention</h3>
        <p>
          Information is retained only for as long as necessary to provide services and fulfill contractual or legal obligations. Following subscription termination, schools will be provided an opportunity to export their information. Data may be permanently removed approximately 60 days after such export opportunity has been provided, unless retention is required by law or agreed otherwise.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Website Usage Information</h3>
        <p>
          The Studiqs website may collect limited technical information necessary for security, platform functionality, performance monitoring, and service improvement. This may include cookies and similar technologies where applicable.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Third-Party Services</h3>
        <p>
          Studiqs may use trusted third-party service providers to support hosting, communications, analytics, security, and operational services. Such providers are expected to maintain appropriate safeguards for the information they process.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">User Rights</h3>
        <p>
          Authorized institutions and users may request access to, correction of, or deletion of eligible information in accordance with applicable laws and contractual obligations. Requests may be submitted through the contact information provided below.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Policy Updates</h3>
        <p>
          Studiqs may update this Privacy Policy periodically to reflect improvements to services, operational practices, or legal requirements. Updated versions will be published on this page with the revised effective date.
        </p>

        <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm mt-8">
          <h4 className="font-bold text-[#161616] font-display">✳︎ Privacy Contact</h4>
          <p className="text-[14px] mt-2 text-[#2a2a2a]/75">
            For privacy-related questions or requests, please contact:{" "}
            <a href="mailto:contact@studiqs.com" className="text-[#c97a3a] font-semibold hover:underline">
              contact@studiqs.com
            </a>
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
