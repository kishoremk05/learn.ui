import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/terms-&-conditions")({
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  return (
    <FooterPageLayout
      title="Terms & Conditions"
      subtitle="Last Updated: July 2026"
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Welcome to Studiqs. By accessing or using the Studiqs platform, website, or related services, you agree to comply with these Terms & Conditions. If you do not agree with these terms, please discontinue use of the platform and services.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Use of Services</h3>
        <p>
          Studiqs provides educational intelligence services intended to support schools, educators, parents, and students through educational insights and related services. Users agree to use the platform only for lawful and authorized educational purposes.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">User Responsibilities</h3>
        <p>Users are responsible for:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Maintaining the confidentiality of their account credentials.</li>
          <li>Providing accurate and up-to-date information where required.</li>
          <li>Using the platform in accordance with applicable laws and institutional policies.</li>
          <li>Ensuring authorized use of institutional accounts and information.</li>
        </ul>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Prohibited Activities</h3>
        <p>Users shall not:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Attempt unauthorized access to the platform or its services.</li>
          <li>Interfere with platform operations or security mechanisms.</li>
          <li>Use the platform for unlawful, harmful, or fraudulent purposes.</li>
          <li>Misuse or improperly disclose educational information obtained through the platform.</li>
        </ul>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Intellectual Property</h3>
        <p>
          The Studiqs platform, website, branding, designs, content, and technology are the intellectual property of Studiqs Intelligence LLP and are protected under applicable intellectual property laws. No part of the platform may be copied, reproduced, distributed, or used without prior written permission from Studiqs Intelligence LLP.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Data Ownership</h3>
        <p>
          Schools retain ownership of their institutional, staff, parent, and student information. Studiqs acts as a technology service provider and processes information solely for the purpose of delivering agreed services and functionality.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Service Availability</h3>
        <p>
          While Studiqs aims to provide reliable and uninterrupted services, availability may occasionally be affected by maintenance activities, upgrades, third-party dependencies, or circumstances beyond reasonable control.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Third-Party Services</h3>
        <p>
          Certain platform functions may rely on trusted third-party service providers for infrastructure, communications, security, analytics, or operational support.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Limitation of Liability</h3>
        <p>
          Studiqs provides educational insights and support tools intended to assist educational decision-making. Studiqs shall not be responsible for decisions, actions, outcomes, admissions, academic results, or institutional actions taken solely based on platform outputs, recommendations, or insights.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Modifications to Services</h3>
        <p>
          Studiqs may enhance, modify, suspend, or discontinue certain features or services as part of ongoing platform improvements and business operations.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Changes to Terms</h3>
        <p>
          These Terms & Conditions may be updated periodically to reflect service improvements, operational changes, or legal requirements. Updated versions will be published on this page with the revised effective date.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Data Protection Commitment</h3>
        <p>
          Studiqs is committed to protecting educational information through responsible data handling practices, controlled access mechanisms, secure infrastructure, and appropriate operational safeguards designed to support confidentiality, integrity, and availability of information. Studiqs aims to process personal information responsibly and in accordance with applicable privacy, data protection, and contractual obligations in the jurisdictions where services are provided.
        </p>

        <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm mt-8">
          <h4 className="font-bold text-[#161616] font-display">✳︎ Support Contact</h4>
          <p className="text-[14px] mt-2 text-[#2a2a2a]/75">
            For questions regarding these Terms & Conditions, please contact:{" "}
            <a href="mailto:contact@studiqs.com" className="text-[#c97a3a] font-semibold hover:underline">
              contact@studiqs.com
            </a>
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
