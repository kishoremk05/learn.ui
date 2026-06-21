import { Reveal, SectionBg, SectionHeading } from "./atoms";

export function About() {
  return (
    <SectionBg id="about" variant="solid" className="py-24 sm:py-28 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        {/* Centered Heading */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <SectionHeading kicker="About Studiqs" align="center">
            Beyond ERP. Beyond LMS.
            <br />
            Built for Academic Intelligence.
          </SectionHeading>
          
          <Reveal delay={120}>
            <p className="mt-6 text-[18px] sm:text-[20px] font-medium leading-[1.6] text-[#c97a3a]">
              Traditional school ERP systems focus on administration. Studiqs focuses on student growth.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Key Message */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full">
            <Reveal delay={220}>
              <p className="text-[16px] sm:text-[17px] leading-[1.8] text-[#2a2a2a]/85 font-medium">
                By combining attendance, academic performance, achievements, assessments, and behavioural indicators, Studiqs transforms raw school data into meaningful insights.
              </p>
            </Reveal>

            <Reveal delay={280} className="mt-6">
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#2a2a2a]/75">
                Traditional platforms simply log historical facts. Studiqs processes active indicators to help educators identify risks early, support individual student development, and raise institutional benchmarks.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Roles & Better Decisions Card Grid */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal delay={150}>
              <div className="bg-[#efeadd]/65 border border-[#1a1a1a]/10 rounded-2xl p-8 hover:bg-[#efeadd]/90 transition-all duration-300 hover:shadow-[0_12px_24px_-10px_rgba(26,26,26,0.1)]">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#c97a3a]" />
                  <h4 className="font-display text-[18px] font-semibold text-[#161616]">For School Leaders</h4>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#2a2a2a]/85">
                  Plan academic interventions early and gain high-level school-wide academic intelligence to improve institutional performance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="bg-[#efeadd]/65 border border-[#1a1a1a]/10 rounded-2xl p-8 hover:bg-[#efeadd]/90 transition-all duration-300 hover:shadow-[0_12px_24px_-10px_rgba(26,26,26,0.1)]">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#3a6b4a]" />
                  <h4 className="font-display text-[18px] font-semibold text-[#161616]">For Teachers</h4>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#2a2a2a]/85">
                  Track classroom progress automatically, identify at-risk students, and focus on target interventions instead of manual paperwork.
                </p>
              </div>
            </Reveal>

            <Reveal delay={350}>
              <div className="bg-[#efeadd]/65 border border-[#1a1a1a]/10 rounded-2xl p-8 hover:bg-[#efeadd]/90 transition-all duration-300 hover:shadow-[0_12px_24px_-10px_rgba(26,26,26,0.1)]">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#3e5db0]" />
                  <h4 className="font-display text-[18px] font-semibold text-[#161616]">For Parents</h4>
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-[#2a2a2a]/85">
                  Monitor your child's developmental growth with intuitive dashboards and actionable guidance for supporting learning at home.
                </p>
              </div>
            </Reveal>

            <Reveal delay={450} className="pt-2 text-center lg:text-left">
              <span className="inline-block text-[13px] font-mono tracking-widest text-[#2a2a2a]/60 uppercase">
                ✳︎ Providing the intelligence needed to make better decisions.
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </SectionBg>
  );
}
