import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/careers")({
  component: CareersPage,
});

const JOBS = [
  { title: "Senior AI Engineer (EdTech)", loc: "Dubai, UAE", type: "Full-Time", desc: "Build and train our predictive engines and topic-level gap detection recommendation systems." },
  { title: "Product Manager (School Operations)", loc: "Dubai, UAE", type: "Full-Time", desc: "Lead the roadmap and feature execution for our core Student Information System and mobile workspaces." },
  { title: "Customer Success Specialist", loc: "Abu Dhabi, UAE", type: "Full-Time", desc: "Onboard school administrators, teachers, and coordinate teacher training and data migration setups." },
];

function CareersPage() {
  return (
    <FooterPageLayout
      title="Join the Team"
      subtitle="Help us shape the future of global educational intelligence."
    >
      <div className="space-y-10 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <p>
          We are always looking for passionate engineers, designers, product minds, and educational specialists to help us build a world-class student intelligence platform. If you want to work at the intersection of AI and EdTech, we'd love to hear from you.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Open Positions</h3>
        <div className="space-y-4 mt-6">
          {JOBS.map((j) => (
            <div key={j.title} className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm hover:border-[#c97a3a]/40 transition-colors duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h4 className="font-display text-[17px] font-bold text-[#161616]">{j.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono bg-[#1a1a1a]/5 text-[#2a2a2a]/70 px-2 py-0.5 rounded">
                    {j.loc}
                  </span>
                  <span className="text-[11px] font-mono bg-[#c97a3a]/10 text-[#c97a3a] px-2 py-0.5 rounded">
                    {j.type}
                  </span>
                </div>
              </div>
              <p className="text-[13.5px] text-[#2a2a2a]/75">{j.desc}</p>
              <a href="mailto:careers@studiqs.com" className="inline-block mt-4 text-[13px] font-medium text-[#c97a3a] hover:underline">
                Apply for role →
              </a>
            </div>
          ))}
        </div>
      </div>
    </FooterPageLayout>
  );
}
