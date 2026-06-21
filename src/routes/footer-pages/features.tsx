import { createFileRoute } from "@tanstack/react-router";
import { FooterPageLayout } from "@/landingpage-ui/FooterPageLayout";

export const Route = createFileRoute("/footer-pages/features")({
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <FooterPageLayout
      title="Platform Features"
      subtitle="AI-driven school intelligence tailored to elevate outcomes for every role."
    >
      <div className="space-y-12 text-[15px] leading-[1.7] text-[#2a2a2a]/85">
        <section className="space-y-4">
          <h2 className="font-display text-[24px] text-[#161616] font-semibold">1. Student Intelligence</h2>
          <p>
            Studiqs continuously tracks and analyzes individual student indicators to provide a complete, multi-dimensional view of growth:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Academic Performance Tracking:</strong> Multi-term progress tracking with automated GPA and subject-level trends.</li>
            <li><strong>Subject-Wise Strength/Weakness Analysis:</strong> Deep topic-level gap detection (e.g. tracking specific concepts in Maths or Science).</li>
            <li><strong>Attendance Intelligence:</strong> Correlating daily attendance patterns with grade fluctuations to identify early risks.</li>
            <li><strong>Learning Readiness Indicators:</strong> Developmental milestone monitoring for kindergarten and primary grade readiness.</li>
            <li><strong>Achievement Portfolio:</strong> Digital storage of certified sports, arts, leadership, and extra-curricular credentials.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-[24px] text-[#161616] font-semibold">2. Parent Engagement</h2>
          <p>
            Keep parents actively involved in their child's learning journey with clean, non-administrative, growth-oriented dashboards:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Performance Visibility:</strong> Clear, visual representations of grades, trends, and focus areas without administrative complexity.</li>
            <li><strong>Parent-Friendly Insights:</strong> Plain-language summaries of child progress, replacing confusing codes and numbers.</li>
            <li><strong>Achievement Log:</strong> Digital record of co-curricular and sports achievements shared with parents.</li>
            <li><strong>Satisfaction Analytics:</strong> Continuous feedback loops through structured parent surveys to measure satisfaction.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-[24px] text-[#161616] font-semibold">3. Teacher Intelligence</h2>
          <p>
            Provide educators with the analytical tools they need to plan lessons and support students effectively:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Classroom Analytics:</strong> Aggregated views of class averages, topic-level understanding, and term progress.</li>
            <li><strong>At-Risk Student Identification:</strong> Automated alerts flagging students who need immediate attention or intervention.</li>
            <li><strong>Intervention Recommendations:</strong> AI-driven recommendations suggesting specific focus topics for classroom support.</li>
            <li><strong>Attendance Impact Monitoring:</strong> Quick dashboards showing which students have attendance patterns that impact their learning.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-[24px] text-[#161616] font-semibold">4. School Leadership Intelligence</h2>
          <p>
            Empower school administrators and board members to make data-driven, strategic decisions:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Campus-Wide Performance Monitoring:</strong> High-level dashboards tracking academic trends across all grades.</li>
            <li><strong>Institutional Risk Analysis:</strong> School-wide alerts identifying overall progress gaps and class-level anomalies.</li>
            <li><strong>Admissions & Retention Insights:</strong> Analytics correlating entrance performance with eventual student outcomes.</li>
            <li><strong>Parent Satisfaction Trends:</strong> Aggregated sentiment scores from campus-wide feedback collections.</li>
          </ul>
        </section>
      </div>
    </FooterPageLayout>
  );
}
