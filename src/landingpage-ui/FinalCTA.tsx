import { Arrow, Reveal, SectionBg, SectionLabel } from "./atoms";

export function FinalCTA() {
  return (
    <SectionBg id="demo" variant="solid" className="py-28 sm:py-32 border-t border-[#1a1a1a]/10">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-10 text-center">
        <Reveal className="flex justify-center">
          <SectionLabel>Join Studiqs</SectionLabel>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-[32px] sm:text-[48px] lg:text-[54px] leading-[1.1] tracking-tight text-[#161616]" style={{ textWrap: "balance" as never }}>
            Empower Every Student.
            <br />
            Support Every Teacher.
            <br />
            Strengthen Every School<span className="text-[#c97a3a]">*</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-8 max-w-[720px] mx-auto text-[16px] sm:text-[17px] leading-[1.7] text-[#2a2a2a]/85">
            Studiqs helps educational institutions unlock the power of academic data through AI-driven intelligence, enabling better decisions, stronger outcomes, and a brighter future for every learner.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#f0b352] px-7 py-3.5 text-[15px] hover:bg-[#e8a63a] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_10px_30px_-12px_rgba(192,124,40,0.5)]"
            >
              Schedule a Demo{" "}
              <Arrow className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#1a1a1a]/25 px-7 py-3.5 text-[15px] hover:bg-[#1a1a1a] hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              Contact Sales
            </a>
          </div>
        </Reveal>
      </div>
    </SectionBg>
  );
}
