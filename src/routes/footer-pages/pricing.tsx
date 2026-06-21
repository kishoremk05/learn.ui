import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/pricing")({
  component: PricingPage,
});

const PLANS = [
  {
    name: "Starter",
    price: "15",
    period: "student / month",
    desc: "Perfect for single-campus schools looking to automate basic operations and communication.",
    features: [
      "Student & Parent Portal",
      "Teacher Workspace & Portal",
      "Basic Gradebook & Assessments",
      "Attendance Management",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "25",
    period: "student / month",
    desc: "Ideal for growing institutions ready to implement AI analytics and comprehensive dashboards.",
    features: [
      "Everything in Starter",
      "Topic-Level Gap Detection",
      "Predictive Board Exam Readiness",
      "Bilingual Support (Arabic/English)",
      "Automated Teacher Alert Systems",
      "Priority Email & Chat Support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "Built for multi-school groups and large educational networks requiring consolidated management.",
    features: [
      "Everything in Growth",
      "Multi-Campus Master Console",
      "Custom AI Engine Training",
      "Dedicated Database & Hosting",
      "API Integrations & Custom Reporting",
      "Dedicated Account Manager",
      "24/7 Phone SLA Support",
    ],
  },
];

function PricingPage() {
  return (
    <FooterPageLayout
      title="Transparent Pricing"
      subtitle="Flexible plans built to grow with your school. Local AED transactions."
    >
      <div className="space-y-12 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p className="text-center max-w-[600px] mx-auto">
          We believe in simple, transparent pricing based on your student enrollment. No hidden fees, setup costs, or surprising annual license jumps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`border rounded-2xl bg-white p-6 flex flex-col justify-between relative ${
                p.popular
                  ? "border-[#c97a3a] shadow-md ring-1 ring-[#c97a3a]/20"
                  : "border-[#1a1a1a]/8 shadow-sm"
              }`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c97a3a] text-white text-[10px] font-mono font-bold px-3 py-0.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <div>
                <h3 className="font-display text-[20px] font-bold text-[#161616]">{p.name}</h3>
                <p className="mt-2 text-[13px] text-[#2a2a2a]/70 leading-normal min-h-[50px]">{p.desc}</p>
                <div className="mt-5 border-y border-[#1a1a1a]/5 py-4">
                  {p.price === "Custom" ? (
                    <span className="font-display text-[28px] font-bold text-[#161616]">Custom Pricing</span>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className="text-[14px] font-semibold text-[#2a2a2a]/80">AED</span>
                      <span className="font-display text-[36px] font-bold text-[#161616]">{p.price}</span>
                      <span className="text-[13px] text-[#2a2a2a]/60 font-medium ml-1">/ {p.period}</span>
                    </div>
                  )}
                </div>
                <ul className="mt-5 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px]">
                      <span className="text-[#c97a3a] font-semibold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <a
                  href="#demo"
                  className={`block text-center w-full rounded-full py-2 text-[13px] font-medium transition ${
                    p.popular
                      ? "bg-[#c97a3a] text-white hover:bg-[#b5692e] shadow-sm"
                      : "border border-[#1a1a1a]/30 hover:bg-[#1a1a1a] hover:text-white"
                  }`}
                >
                  {p.price === "Custom" ? "Contact Enterprise" : "Get Started"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#efeadd]/30 border border-[#1a1a1a]/5 rounded-2xl p-6 mt-12 text-[13.5px]">
          <h4 className="font-bold text-[#161616] mb-2">✳︎ Frequently Asked Pricing Questions</h4>
          <p>
            <strong>Are there any onboarding fees?</strong> No. Standard onboarding, data upload assistance, and staff orientation are fully included in all plans. Custom integrations or custom modules for enterprise customers are quoted separately.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
