import { Reveal } from "./atoms";

const GOAL_ITEMS = [
  { t: "Forecast Board Exam Average", desc: "Proactively prepare students by predicting final exam results using historical assessments." },
  { t: "Align Career Pathways", desc: "Guide student development by mapping learning strengths to university courses and professional paths." },
  { t: "Assess College Readiness", desc: "Evaluate preparation levels for higher education benchmarks and entrance criteria." },
  { t: "Detect Learning Gaps Early", desc: "Identify specific concept deficiencies at a topic level to guide classroom instruction." },
  { t: "Bilingual Performance Support", desc: "Expand predictive engines to support school systems utilizing Arabic & English curricula." },
  { t: "Support Teacher Interventions", desc: "Provide educators with automated, topic-level classroom analytics and alerts." },
  { t: "Enable Management Foresight", desc: "Empower school administrators to measure institutional benchmarks and satisfaction trends." }
];

export function FutureVision() {
  return (
    <section id="future" className="relative py-24 sm:py-28 bg-[#161616] text-[#efeadd] overflow-hidden border-t border-white/5">
      {/* Decorative Glowing Mesh Orbs */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-radial from-[#c97a3a]/15 to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-radial from-[#3e5db0]/12 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 sm:px-10">
        
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[#efeadd]/60">
            <span className="inline-block h-[1px] w-8 bg-[#efeadd]/40" />
            Ecosystem Mission
          </div>
          <h2 className="mt-6 font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#efeadd]">
            Our Goal
          </h2>
          <Reveal delay={150}>
            <p className="mt-6 text-[15.5px] leading-[1.7] text-[#efeadd]/75 max-w-[600px] mx-auto">
              Studiqs is dedicated to establishing a comprehensive academic intelligence ecosystem that turns school records into actionable student growth.
            </p>
          </Reveal>
        </div>

        {/* Goals Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {GOAL_ITEMS.map((item, idx) => (
            <Reveal
              key={item.t}
              delay={idx * 60}
              className="group relative rounded-2xl border border-white/10 bg-[#222]/30 backdrop-blur-sm p-6 hover:bg-[#222]/65 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#c97a3a] group-hover:scale-125 transition-transform" />
                <h3 className="font-display text-[16px] font-semibold text-white leading-tight">
                  {item.t}
                </h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-[#efeadd]/70">
                {item.desc}
              </p>
            </Reveal>
          ))}
          
          {/* visual badge representing ecosystem */}
          <Reveal
            delay={7 * 60}
            className="group relative rounded-2xl border border-dashed border-white/15 bg-transparent p-6 flex flex-col justify-center items-center text-center"
          >
            <span className="text-[28px] animate-spin" style={{ animationDuration: "20s" }}>✳︎</span>
            <div className="text-[11px] font-mono tracking-widest text-[#efeadd]/60 uppercase mt-4">
              AI Intelligent Core
            </div>
            <div className="text-[13px] text-[#efeadd]/75 mt-1 font-semibold">
              Always Evolving
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
