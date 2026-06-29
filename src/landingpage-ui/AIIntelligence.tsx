import { Reveal, SectionBg, SectionHeading } from "./atoms";

const INSIGHTS_LIST = [
  { t: "Subject Weakness Detection", desc: "Drills down into specific topics (e.g. Algebra, Chemical bonding) to reveal specific learning gaps." },
  { t: "Predictive Board Exam Readiness", desc: "Uses historical exam records to forecast final board results and exam confidence levels." },
  { t: "Early Learning Readiness Index", desc: "Assesses developmental milestones for early grades to track baseline preparedness." },
  { t: "Attendance Impact Assessment", desc: "Correlates attendance records directly with performance fluctuations to highlight risks." },
];

export function AIIntelligence() {
  return (
    <SectionBg id="studiqs-ai" variant="solid" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="Studiqs AI" align="center">
            AI Recommendations. Risk Detection. Performance Predictions.
          </SectionHeading>
          
          <Reveal delay={120}>
            <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.7] text-[#2a2a2a]/85 font-medium">
              Studiqs AI moves schools from reactive reporting to proactive intelligence — detecting at-risk students and topic gaps automatically.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Feature Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            <div className="mt-10 space-y-6">
              {INSIGHTS_LIST.map((item, idx) => (
                <Reveal key={item.t} delay={idx * 60} className="border-l-2 border-[#c97a3a]/40 pl-4">
                  <h4 className="font-display text-[15.5px] font-semibold text-[#161616]">{item.t}</h4>
                  <p className="text-[13.5px] text-[#2a2a2a]/75 mt-1 leading-normal">{item.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity CSS AI Dashboard Mockup */}
          <div className="lg:col-span-7 flex justify-center w-full">
            <Reveal delay={200} className="w-full max-w-[580px]">
              <div className="relative rounded-3xl border border-[#1a1a1a]/12 bg-[#efeadd]/75 backdrop-blur-md p-6 sm:p-7 shadow-[0_24px_50px_-20px_rgba(26,26,26,0.12)]">
                
                {/* Dashboard Header */}
                <div className="flex items-center justify-between border-b border-[#1a1a1a]/8 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-[#c97a3a] animate-pulse" />
                    <span className="font-mono text-[11px] tracking-widest text-[#2a2a2a]/60 uppercase font-bold">Predictive Engine Live</span>
                  </div>
                  <div className="text-[10px] text-[#2a2a2a]/55 font-mono">
                    Model: Academic-v3.2
                  </div>
                </div>

                {/* Main Predictive Score Display */}
                <div className="mt-6 bg-white/40 border border-[#1a1a1a]/5 rounded-2xl p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-wider text-[#2a2a2a]/60 uppercase">Projected Board Exam Average</span>
                    <span className="text-[11px] bg-[#3a6b4a]/12 text-[#3a6b4a] px-2 py-0.5 rounded-full font-medium font-mono">High Probability</span>
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="text-[36px] font-display font-bold tracking-tight text-[#161616]">92.4%</span>
                    <span className="text-[14px] text-[#2a2a2a]/60 font-medium">Confidence Interval: 91.2% - 94.5%</span>
                  </div>
                </div>

                {/* Sub-panels Grid */}
                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                  
                  {/* Panel 1: Learning Gaps */}
                  <div className="bg-white/40 border border-[#1a1a1a]/5 rounded-2xl p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-[#2a2a2a]/60 uppercase">Subject Topic Gaps</span>
                      <div className="mt-3 space-y-2.5">
                        <div>
                          <div className="flex justify-between text-[12px] font-medium text-[#161616]">
                            <span>Mathematics</span>
                            <span className="text-[#c97a3a]">Quadratic Equations</span>
                          </div>
                          <div className="mt-1.5 h-1.5 w-full bg-[#1a1a1a]/8 rounded-full overflow-hidden">
                            <div className="h-full bg-[#c97a3a] rounded-full" style={{ width: "81%" }} />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-[12px] font-medium text-[#161616]">
                            <span>Chemistry</span>
                            <span className="text-[#c97a3a]">Stoichiometry</span>
                          </div>
                          <div className="mt-1.5 h-1.5 w-full bg-[#1a1a1a]/8 rounded-full overflow-hidden">
                            <div className="h-full bg-[#c97a3a] rounded-full" style={{ width: "72%" }} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#1a1a1a]/5 text-[10.5px] text-[#2a2a2a]/60">
                      2 critical topics require revision
                    </div>
                  </div>

                  {/* Panel 2: Performance Trajectory */}
                  <div className="bg-white/40 border border-[#1a1a1a]/5 rounded-2xl p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-[#2a2a2a]/60 uppercase">Performance Trajectory</span>
                      
                      {/* Fake mini-chart lines using CSS */}
                      <div className="mt-4 h-16 flex items-end justify-between gap-1.5 px-2">
                        <div className="w-full bg-[#3a6b4a]/20 rounded-t h-[40%]" />
                        <div className="w-full bg-[#3a6b4a]/20 rounded-t h-[52%]" />
                        <div className="w-full bg-[#3a6b4a]/20 rounded-t h-[61%]" />
                        <div className="w-full bg-[#3a6b4a]/20 rounded-t h-[78%]" />
                        <div className="w-full bg-[#3a6b4a] rounded-t h-[88%]" />
                      </div>
                    </div>
                    <div className="mt-4 pt-3 border-t border-[#1a1a1a]/5 flex justify-between text-[10.5px] text-[#2a2a2a]/60">
                      <span>Term 1 → Final Prep</span>
                      <span className="text-[#3a6b4a] font-medium">Accelerating</span>
                    </div>
                  </div>

                </div>

                {/* Attendance Alert Panel */}
                <div className="mt-5 bg-white/40 border border-[#1a1a1a]/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-wider text-[#2a2a2a]/60 uppercase">Attendance Impact Risk</span>
                    <span className="inline-flex h-2 w-2 rounded-full bg-[#c97a3a]" />
                  </div>
                  <p className="mt-2 text-[12.5px] text-[#2a2a2a]/80 leading-relaxed">
                    Absenteeism of <strong className="text-[#161616] font-semibold">4 consecutive days</strong> has lowered current exam probability projections by <span className="text-[#c97a3a] font-semibold">-3.1%</span>.
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </SectionBg>
  );
}
