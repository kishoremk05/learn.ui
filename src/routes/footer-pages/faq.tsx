import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/faq")({
  component: FAQPage,
});

const FAQS = [
  {
    q: "Does Studiqs replace our current School ERP system?",
    a: "No. Studiqs is an Academic Intelligence Platform that sits on top of your existing systems. You don't need to replace your current ERP or LMS. You simply export your student marks sheets or reports and upload them to Studiqs to generate insights.",
  },
  {
    q: "Which boards and syllabuses does Studiqs support?",
    a: "Studiqs is fully optimized for Matric/Stateboard and CBSE standards and Board exam readiness predictions, while also supporting custom international school grading systems.",
  },
  {
    q: "How does Studiqs get our school data?",
    a: "Getting started is extremely simple and requires no API integrations. You simply export standard reports or marks sheets from your existing ERP/LMS and drag-and-drop them into the Studiqs upload interface.",
  },
  {
    q: "Where is our student data hosted?",
    a: "We host data on secure, locally compliant cloud servers (including regional hosting centers and global clouds) to comply with local residency laws and institutional privacy guidelines in both India and the UAE.",
  },
  {
    q: "How do parents access the student dashboard?",
    a: "Parents receive a secure onboarding email or SMS containing a unique login link. They can log in via browser on any device to view their child's topic gaps and learning progress.",
  },
];

function FAQPage() {
  return (
    <FooterPageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions about Studiqs deployment and features."
    >
      <div className="space-y-8 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p>
          Can't find what you're looking for? Reach out to our school support team at <a href="mailto:contact@studiqs.com" className="text-[#c97a3a] hover:underline">contact@studiqs.com</a>.
        </p>

        <div className="space-y-6 mt-8">
          {FAQS.map((f, idx) => (
            <div key={idx} className="border-b border-[#1a1a1a]/8 pb-6">
              <h3 className="font-display text-[17px] font-bold text-[#161616]">
                ✳︎ {f.q}
              </h3>
              <p className="mt-3 text-[14px] text-[#2a2a2a]/75 leading-relaxed pl-6">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FooterPageLayout>
  );
}
