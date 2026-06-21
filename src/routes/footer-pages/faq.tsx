import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/faq")({
  component: FAQPage,
});

const FAQS = [
  {
    q: "How long does it take to migrate from our old ERP system?",
    a: "Standard onboarding and data migration takes 2 to 4 weeks. Our customer success team handles the data mapping and uploads student records, timetables, and historical marks directly so your staff doesn't have to.",
  },
  {
    q: "Which boards and syllabuses does Studiqs support?",
    a: "Studiqs is fully syllabus-aligned and supports international and national boards including CBSE, IB (International Baccalaureate), British (GCSE/A-Levels), and Ministry of Education curricula, adapting easily to custom grading systems.",
  },
  {
    q: "Where is our student data hosted?",
    a: "We host data on secure, locally compliant cloud servers (including regional hosting centers and global clouds) to comply with local residency laws and institutional privacy guidelines.",
  },
  {
    q: "Can we use only specific modules (like SIS and AI Analytics)?",
    a: "Yes. Studiqs is modular. You can use our SIS and AI Analytics components while keeping your existing billing or payroll systems, integrating them via secure APIs.",
  },
  {
    q: "How do parents access the student dashboard?",
    a: "Parents receive a secure onboarding email or SMS containing unique login links. They can download the Studiqs Parent App or log in via browser to see child performance tracking.",
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
          Can't find what you're looking for? Reach out to our school support team at <a href="mailto:hello@studiqs.com" className="text-[#c97a3a] hover:underline">hello@studiqs.com</a>.
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
