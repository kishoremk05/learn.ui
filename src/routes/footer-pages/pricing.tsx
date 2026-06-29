import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/pricing")({
  component: PricingPage,
});

const PLANS = [
  {
    name: "India Institution Plan",
    price: "Custom",
    period: "",
    desc: "Tailored specifically for schools following the CBSE or national curriculum. Custom pricing based on school enrollment.",
    features: [
      "CBSE Board Readiness Predictions",
      "Topic-Level Learning Gap Detection",
      "All 4 Role-Based Dashboards (Student, Parent, Teacher, Management)",
      "Studiqs AI Engine Integration",
      "Easy spreadsheet data import & onboarding assistance",
      "Dedicated academic success support",
    ],
  },
  {
    name: "UAE Institution Plan",
    price: "Custom",
    period: "",
    desc: "Built for international and private schools in the GCC (beginning with UAE). Bilingual Arabic/English support ready.",
    features: [
      "CBSE & International Syllabuses Gap Analysis",
      "Student Performance Predictions",
      "All 4 Role-Based Dashboards (Student, Parent, Teacher, Management)",
      "Studiqs AI Engine Integration & predictions",
      "Bilingual Arabic/English interface options",
      "GCC regional compliance & secure cloud hosting",
    ],
    popular: true,
  },
];

function PricingPage() {
  return (
    <FooterPageLayout
      title="Contact us for institution-specific pricing."
      subtitle="We work with institutions of all sizes. Pricing is tailored to enrollment size, number of campuses, and modules selected."
    >
      <div className="space-y-12 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p className="text-center max-w-[600px] mx-auto font-medium text-[#c97a3a]">
          Studiqs is an Academic Intelligence Platform that sits on top of your existing systems. Get custom pricing for your campus.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-stretch max-w-4xl mx-auto">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`border rounded-2xl bg-white p-6 sm:p-8 flex flex-col justify-between relative ${
                p.popular
                  ? "border-[#c97a3a] shadow-md ring-1 ring-[#c97a3a]/20"
                  : "border-[#1a1a1a]/8 shadow-sm"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c97a3a] text-white text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Recommended
                </span>
              )}
              <div>
                <h3 className="font-display text-[22px] font-bold text-[#161616]">{p.name}</h3>
                <p className="mt-3 text-[13.5px] text-[#2a2a2a]/70 leading-normal min-h-[50px]">{p.desc}</p>
                <div className="mt-6 border-y border-[#1a1a1a]/5 py-5 text-center">
                  <span className="font-display text-[28px] font-bold text-[#161616]">Custom Pricing</span>
                </div>
                <ul className="mt-6 space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13.5px]">
                      <span className="text-[#c97a3a] font-semibold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href="/#demo"
                  className={`block text-center w-full rounded-full py-2.5 text-[14px] font-semibold transition ${
                    p.popular
                      ? "bg-[#c97a3a] text-white hover:bg-[#b5692e] shadow-sm"
                      : "border border-[#1a1a1a]/30 hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-12 text-[14px] max-w-4xl mx-auto space-y-4">
          <h4 className="font-bold text-[#161616] font-display text-[16px]">✳︎ Flexible Payment Methods</h4>
          <p className="text-[#2a2a2a]/80">
            We support flexible billing methods to match your school administration requirements:
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[12px] text-[#c97a3a] uppercase tracking-wider font-semibold">
            <span>✓ International Wire Transfer</span>
            <span>✓ Bank Transfer</span>
            <span>✓ Institution Invoicing</span>
          </div>
          <div className="pt-2 border-t border-[#1a1a1a]/5">
            <strong>Looking for multi-school discounts?</strong> Contact hello@studiqs.com for custom group licensing structures.
          </div>
        </div>
      </div>
    </FooterPageLayout>
  );
}
