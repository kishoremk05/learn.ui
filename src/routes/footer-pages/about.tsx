import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <FooterPageLayout
      title="About Studiqs"
      subtitle="Beyond Administration. Designed for Academic Growth."
    >
      <div className="space-y-8 text-[15.5px] leading-[1.8] text-[#2a2a2a]/85">
        <p>
          Studiqs was founded to bridge the gap between school administration and student growth. While traditional school ERP platforms are built to log administrative facts — like billing, HR records, and attendance lists — Studiqs is designed to process active indicators and turn them into actionable student growth.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Our Vision</h3>
        <p>
          We envision a school community where data is no longer locked inside dusty database columns. By aggregating multiple performance touchpoints — class assignments, board preparation tests, physical and sports records, and behavioral indicators — we give school leaders, parents, and teachers a 360-degree, unified view of each student.
        </p>

        <h3 className="font-display text-[22px] font-bold text-[#161616] mt-8">Syllabus-Aligned Intelligence</h3>
        <p>
          Unlike generic administration software, Studiqs is custom-aligned to international syllabuses. Whether your school follows the CBSE, International Baccalaureate (IB), British National Curriculum, or local Ministry standards, our analytics and gap detection modules map directly to your curriculum's specific learning objectives and grading structures.
        </p>

        <div className="border border-[#1a1a1a]/8 rounded-2xl bg-white p-6 shadow-sm mt-8">
          <h4 className="font-bold text-[#161616] font-display">✳︎ The Academic Intelligence Core</h4>
          <p className="text-[14px] mt-2 text-[#2a2a2a]/75">
            By shifting from retrospective reporting to proactive, early risk detection, we help educators design lesson plans and classroom interventions before final exams, raising overall school averages.
          </p>
        </div>
      </div>
    </FooterPageLayout>
  );
}
