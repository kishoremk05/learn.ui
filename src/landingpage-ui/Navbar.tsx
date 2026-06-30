import { useState, useEffect } from "react";
import { useScrolledPast } from "./hooks";

const LINKS = ["How It Works", "Dashboards", "Studiqs AI", "Why Studiqs"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const past = useScrolledPast(50);
  const [isOverDarkSection, setIsOverDarkSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const darkSectionIds = ["hero-dark-band", "contact"];
      let overDark = false;

      for (const id of darkSectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // The navbar has height ~70px. If any part of the dark section overlaps the navbar's position (viewport top to 70px)
          if (rect.top <= 70 && rect.bottom >= 0) {
            overDark = true;
            break;
          }
        }
      }
      setIsOverDarkSection(overDark);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // On mobile (when max-width is not md), if the navbar is currently over a dark section and mobile menu is closed,
  // we use the beige background (#e9e2d4) for high contrast.
  // Otherwise (over light sections), we use the default dark background (#161616).
  const isMobileBeige = isOverDarkSection && !open;

  const shellClass = isMobileBeige
    ? "bg-[#e9e2d4] border-b border-[#161616]/10 md:bg-[#161616] md:border-white/15"
    : past
    ? "bg-[#161616] shadow-[0_8px_32px_-10px_rgba(0,0,0,0.6)] border-b border-white/20"
    : "bg-[#161616] border-b border-white/15";


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${shellClass}`}>
      <nav
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-6 sm:px-10 ${
          past ? "py-3.5" : "py-5"
        } transition-[padding] duration-500`}
      >
        {/* Brand */}
        <a
          href="#top"
          className={`flex items-center gap-2 transition-colors duration-500 ${
            isMobileBeige ? "text-[#161616] md:text-[#efeadd]" : "text-[#efeadd]"
          }`}
        >
          <span className="font-display text-[20px] tracking-tight">
            Studiqs<sup className="text-[10px] ml-[1px]">®</sup>
          </span>
          <span className="opacity-60 text-lg">✳︎</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-9 text-[14px] text-[#efeadd]/75">
          {LINKS.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="relative inline-block transition hover:text-[#efeadd] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#f0b352] after:transition-all hover:after:w-full"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#demo"
            className="rounded-full border border-white/20 px-5 py-2 text-[13.5px] text-[#efeadd] transition hover:bg-[#e8a73a] hover:border-[#e8a73a] hover:text-[#1a1a1a]"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile hamburger / X — dynamically styled to contrast with the active background */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          id="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 flex items-center justify-center"
          style={{ position: "relative", zIndex: 9999 }}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="#efeadd" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <line x1="4" y1="4" x2="18" y2="18" />
              <line x1="18" y1="4" x2="4" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke={isMobileBeige ? "#161616" : "#efeadd"} strokeWidth="2" strokeLinecap="round" className="transition-all duration-500" aria-hidden>
              <line x1="2" y1="6" x2="20" y2="6" />
              <line x1="2" y1="11" x2="20" y2="11" />
              <line x1="2" y1="16" x2="20" y2="16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {open && (
        <div
          className="md:hidden fixed inset-0 flex flex-col pt-24 px-8 pb-10"
          style={{ background: "#161616", color: "#efeadd", zIndex: 9998 }}
        >
          <ul className="flex flex-col gap-7">
            {LINKS.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-[#efeadd] transition hover:text-[#f0b352]"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-[#e8a73a] px-7 py-3 text-[15px] font-semibold text-[#1a1a1a] hover:bg-[#d9962a] transition"
            >
              Book Demo →
            </a>
          </div>
          <div className="mt-auto text-[10px] font-mono text-[#f0b352]/50 uppercase tracking-widest">
            Matric/Stateboard and CBSE Ready • India & GCC
          </div>
        </div>
      )}
    </header>
  );
}
