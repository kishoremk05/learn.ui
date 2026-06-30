import { Reveal, SectionBg, SectionHeading } from "./atoms";

const LIST = [
  { q: "For the first time, we could see exactly which topics our students were weak in — before the board exam.", a: "School Principal, Matric/Stateboard & CBSE School" },
  { q: "Parents stopped panicking at report card time. Studiqs gave them weekly visibility all term long.", a: "Academic Coordinator" },
  { q: "Our teachers now spend time on targeted interventions instead of guessing which students need help.", a: "Head of Academics" },
];

export function Testimonials() {
  return (
    <SectionBg className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="text-center">
          <SectionHeading kicker="Testimonials" align="center">
            Trusted by school leaders.
          </SectionHeading>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {LIST.map((t, i) => (
            <Reveal
              key={t.a}
              delay={i * 110}
              as="figure"
              className="rounded-3xl border border-[#1a1a1a]/10 bg-[#efeadd]/85 p-10 flex flex-col hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(20,20,20,0.25)] transition-all duration-300"
            >
              <span className="font-display text-[44px] leading-none text-[#c97a3a]/70">
                "
              </span>
              <blockquote className="-mt-2 font-display text-[19px] leading-[1.45] text-[#161616]">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 text-[11.5px] tracking-[0.2em] uppercase text-[#2a2a2a]/70">
                — {t.a}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionBg>
  );
}
