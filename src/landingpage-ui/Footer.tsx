import { Link } from "@tanstack/react-router";

const COLS = [
  { h: "Product", l: ["Features", "Modules", "Pricing", "Security"] },
  { h: "Company", l: ["About", "Contact", "Careers"] },
  { h: "Resources", l: ["Documentation", "Support", "FAQ"] },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-[#161616] text-[#efeadd]">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-display text-[22px]">
            Studiqs<sup className="text-[10px] ml-[1px]">®</sup>{" "}
            <span className="opacity-70">✳︎</span>
          </div>
          <p className="mt-4 max-w-[360px] text-[13px] text-[#efeadd]/75 leading-[1.65]">
            An AI-driven Student Intelligence and Performance Analytics Platform that helps schools identify learning gaps, track progress, and empower school leaders, teachers, and parents with actionable insights.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-2.5 gap-y-1 text-[10px] font-mono text-[#f0b352] uppercase tracking-wider">
            <span>AI-Powered</span>
            <span className="opacity-45">•</span>
            <span>Multi-School Ready</span>
            <span className="opacity-45">•</span>
            <span>Role-Based Intelligence</span>
          </div>
          <p className="mt-6 text-[12px] font-mono text-[#efeadd]/50 uppercase tracking-wider">
            CBSE Ready • India & GCC Countries
          </p>
          <a
            href="mailto:hello@studiqs.com"
            className="mt-2 inline-block text-[14px] underline underline-offset-4 hover:text-[#f0b352] transition"
          >
            hello@studiqs.com
          </a>
          <p className="mt-3 text-[12px] text-[#efeadd]/60 italic font-medium">
            Serving schools across India and GCC countries, beginning with UAE.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.h}>
            <div className="text-[12px] tracking-[0.2em] uppercase text-[#efeadd]/60">
              {c.h}
            </div>
            <ul className="mt-5 space-y-3 text-[14px]">
              {c.l.map((x) => (
                <li key={x}>
                  <Link
                    to={`/footer-pages/${x.toLowerCase().replace(" ", "-")}` as any}
                    className="hover:opacity-80 transition hover:text-[#f0b352]"
                  >
                    {x}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#efeadd]/50">
          <span>© {new Date().getFullYear()} Studiqs. All rights reserved.</span>
          <span className="font-mono uppercase tracking-wider text-[10px] text-[#f0b352]/60">AI-Powered • Multi-School Ready • Role-Based Intelligence</span>
        </div>
      </div>
    </footer>
  );
}
