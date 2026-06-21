import heroBg from "../assets/hero_bg.png";
import { Arrow } from "./atoms";

const HERO_BG = heroBg;

const SUBJECTS = [
  { name: "Mathematics", score: 48,  priority: "High",   color: "#e05252", bg: "#fef2f2" },
  { name: "Science",     score: 56,  priority: "High",   color: "#e05252", bg: "#fef2f2" },
  { name: "English",     score: 78,  priority: "Low",    color: "#2d8a52", bg: "#f0fdf4" },
  { name: "Social Std.", score: 63,  priority: "Medium", color: "#c97a3a", bg: "#fff7ed" },
];

/** Sparkline path for the performance chart */
const SPARKLINE_POINTS = "4,42 16,35 28,28 40,22 52,16 64,12 76,10";

/** Premium real-feel dashboard card */
function LiveDashboard() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden animate-fade-up select-none"
      style={{
        animationDelay: "600ms",
        background: "#ffffff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow:
          "0 0 0 1px rgba(0,0,0,0.04), 0 4px 6px -1px rgba(0,0,0,0.07), 0 20px 50px -10px rgba(0,0,0,0.18)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* ── Top bar: brand + status ── */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: "1px solid #f0f0f0", background: "#fafafa" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-white text-[9px] font-bold"
            style={{ background: "linear-gradient(135deg,#e8a73a,#c97a3a)" }}
          >
            S
          </div>
          <span className="text-[11px] font-semibold" style={{ color: "#111" }}>
            Studiqs Analytics
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-mono text-green-600 uppercase tracking-wider">Live</span>
        </div>
      </div>

      {/* ── Class Overview Row ── */}
      <div
        className="grid grid-cols-2 items-center gap-0"
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        {/* Score block */}
        <div className="px-4 py-3" style={{ borderRight: "1px solid #f0f0f0" }}>
          <div className="text-[8px] font-mono uppercase tracking-wider mb-1" style={{ color: "#999" }}>
            Overall Average
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[28px] font-bold leading-none" style={{ color: "#111", fontVariantNumeric: "tabular-nums" }}>
              68%
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1 text-[9px]" style={{ color: "#e05252" }}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden>
              <polyline points="1 2 4.5 7 8 2" stroke="#e05252" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            6% vs last term
          </div>
        </div>

        {/* Mini sparkline */}
        <div className="px-3 py-3">
          <div className="text-[8px] font-mono uppercase tracking-wider mb-2" style={{ color: "#999" }}>
            6-Month Trend
          </div>
          <svg viewBox="0 0 80 48" width="100%" height="36" aria-hidden>
            <defs>
              <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e8a73a" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#e8a73a" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M${SPARKLINE_POINTS} L76 48 L4 48 Z`}
              fill="url(#sg)"
            />
            <polyline
              points={SPARKLINE_POINTS}
              fill="none"
              stroke="#e8a73a"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Last point dot */}
            <circle cx="76" cy="10" r="2.5" fill="#e8a73a" />
          </svg>
          <div className="flex justify-between text-[7px] font-mono mt-0.5" style={{ color: "#bbb" }}>
            {["JAN", "MAR", "JUN"].map((m) => <span key={m}>{m}</span>)}
          </div>
        </div>
      </div>

      {/* ── Subject table header ── */}
      <div
        className="grid px-4 pt-2.5 pb-1.5 text-[7.5px] font-mono uppercase tracking-wider"
        style={{
          gridTemplateColumns: "1fr 36px 60px 52px",
          gap: "0 8px",
          color: "#aaa",
          borderBottom: "1px solid #f4f4f4",
        }}
      >
        <span>Subject</span>
        <span className="text-right">Avg</span>
        <span className="text-center">Progress</span>
        <span className="text-right">Priority</span>
      </div>

      {/* ── Subject rows ── */}
      {SUBJECTS.map((s, i) => (
        <div
          key={s.name}
          className="grid px-4 py-2 items-center"
          style={{
            gridTemplateColumns: "1fr 36px 60px 52px",
            gap: "0 8px",
            borderBottom: i < SUBJECTS.length - 1 ? "1px solid #f7f7f7" : "none",
          }}
        >
          <span className="text-[10px] font-medium truncate" style={{ color: "#1a1a1a" }}>
            {s.name}
          </span>
          <span
            className="text-[10px] font-mono font-semibold text-right"
            style={{ color: s.color }}
          >
            {s.score}%
          </span>
          {/* Progress bar */}
          <div className="h-[5px] rounded-full overflow-hidden" style={{ background: "#f0f0f0" }}>
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${s.score}%`,
                background: `linear-gradient(90deg, ${s.color}88, ${s.color})`,
              }}
            />
          </div>
          {/* Priority chip */}
          <div className="flex justify-end">
            <span
              className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{ background: s.bg, color: s.color }}
            >
              {s.priority}
            </span>
          </div>
        </div>
      ))}

      {/* ── Bottom stat row ── */}
      <div
        className="grid grid-cols-2"
        style={{ borderTop: "1px solid #f0f0f0", background: "#fafafa" }}
      >
        <div
          className="px-4 py-3"
          style={{ borderRight: "1px solid #f0f0f0" }}
        >
          <div className="text-[7.5px] font-mono uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>
            At Risk Students
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[20px] font-bold leading-none" style={{ color: "#e05252" }}>
              23
            </span>
            <span className="text-[8px]" style={{ color: "#999" }}>students</span>
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="text-[7.5px] font-mono uppercase tracking-wider mb-1" style={{ color: "#aaa" }}>
            Improvement Potential
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[20px] font-bold leading-none" style={{ color: "#2d8a52" }}>
              18%
            </span>
            <span className="text-[8px]" style={{ color: "#999" }}>avg gain</span>
          </div>
        </div>
      </div>

      {/* ── NOVA recommendation ── */}
      <div
        className="flex items-start gap-2.5 px-4 py-3"
        style={{ background: "#fffbf5", borderTop: "1px solid #fef3e2" }}
      >
        <div
          className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
          style={{ background: "#e8a73a22" }}
        >
          <span style={{ color: "#c97a3a", fontSize: 10 }}>◎</span>
        </div>
        <p className="text-[8.5px] leading-[1.55]" style={{ color: "#555" }}>
          <strong style={{ color: "#111" }}>NOVA Insight:</strong> Focus Mathematics & Science for Grade 8. Address foundational skills — projected improvement of 15–20%.
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden flex flex-col lg:block"
    >
      {/* ────────── DESKTOP: full-height section with bg image ────────── */}
      <div className="hidden lg:block relative w-full min-h-screen max-h-[1100px] overflow-hidden">
        {/* BG image layer */}
        <div
          className="absolute right-[-31px] pointer-events-none select-none overflow-hidden"
          style={{
            top: "calc(50% + 50px)",
            transform: "translateY(-50%) scaleX(0.95) scaleY(0.95)",
            transformOrigin: "right center",
            width: "max(100%, calc(90vh * 1.8989))",
            height: "max(90%, calc(100vw / 1.8989))",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${HERO_BG})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* AI Insight callout over the bg image */}
          <div
            className="absolute animate-fade-up z-10"
            style={{ animationDelay: "560ms", top: "17.5%", left: "36%", width: "19%" }}
          >
            <div className="text-[9px] font-mono tracking-[0.24em] uppercase" style={{ color: "rgba(42,42,42,0.7)" }}>
              AI Insight
            </div>
            <h3 className="mt-2 font-display text-[14px] xl:text-[15px] leading-[1.2] font-medium" style={{ color: "#161616" }}>
              Every student.<br />Every moment.<br />Every outcome.
            </h3>
            <p className="mt-3 text-[10px] leading-[1.5]" style={{ color: "rgba(42,42,42,0.8)" }}>
              NOVA analyzes performance across subjects to identify gaps and improve outcomes.
            </p>
          </div>
        </div>

        {/* Left-to-right gradient wash */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to right, rgba(233,226,212,0.95) 0%, rgba(233,226,212,0.7) 38%, rgba(233,226,212,0.15) 60%, transparent 75%)",
          }}
        />



        {/* Desktop content */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 sm:px-10 pt-[110px] pb-16 flex flex-col justify-between min-h-screen">
          <div className="flex flex-col justify-center flex-1">
            <h1
              className="font-display tracking-tight leading-[1.08] text-[38px] xl:text-[48px] max-w-[500px] animate-fade-up"
              style={{ color: "#161616", animationDelay: "60ms" }}
            >
              <span className="block" style={{ animationDelay: "80ms" }}>Transform Academic</span>
              <span className="block" style={{ animationDelay: "160ms" }}>
                Data Into Student{" "}
                <span style={{ color: "#c97a3a" }}>Success*</span>
              </span>
            </h1>

            <p
              className="mt-6 max-w-[440px] text-[15px] leading-[1.6] font-medium animate-fade-up"
              style={{ color: "rgba(42,42,42,0.78)", animationDelay: "260ms" }}
            >
              An AI-driven Student Intelligence and Performance Analytics Platform that helps schools identify learning gaps, track progress, and empower teachers and parents with role-based dashboards.
            </p>

            <div
              className="mt-8 flex flex-row gap-3 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href="#platform"
                className="group inline-flex items-center gap-2 rounded-full font-semibold text-[14px] transition-all hover:-translate-y-0.5"
                style={{
                  background: "#e8a73a",
                  color: "#1a1a1a",
                  padding: "13px 28px",
                  boxShadow: "0 8px 20px -8px rgba(232,167,58,0.6)",
                }}
              >
                Explore Platform
                <Arrow className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full font-semibold text-[14px] transition-all hover:-translate-y-0.5"
                style={{
                  border: "1.5px solid rgba(26,26,26,0.28)",
                  color: "#1a1a1a",
                  padding: "13px 28px",
                  background: "rgba(255,255,255,0.25)",
                  backdropFilter: "blur(6px)",
                }}
              >
                Book Demo
              </a>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="flex items-center gap-3 text-[9px] font-mono tracking-[0.24em] uppercase" style={{ color: "rgba(42,42,42,0.5)" }}>
            <div className="flex flex-col items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(42,42,42,0.4)" }} />
              <svg width="10" height="28" viewBox="0 0 10 28" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
                <line x1="5" y1="0" x2="5" y2="22" />
                <polyline points="2 18 5 24 8 18" fill="none" />
              </svg>
            </div>
            <span>Scroll to discover</span>
          </div>
        </div>
      </div>

      {/* ────────── MOBILE: Two-tone split ────────── */}

      {/* Dark top band */}
      <div
        className="lg:hidden w-full"
        style={{
          background: "#161616",
          paddingTop: "120px",
          paddingBottom: "40px",
          paddingLeft: "22px",
          paddingRight: "22px",
        }}
      >
        {/* Kicker badge */}
        <div
          className="inline-flex items-center gap-2 rounded-full mb-5 text-[8.5px] font-mono tracking-[0.18em] uppercase animate-fade-up"
          style={{
            background: "rgba(232,167,58,0.12)",
            color: "#f0b352",
            padding: "5px 12px",
            border: "1px solid rgba(232,167,58,0.22)",
            animationDelay: "40ms",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f0b352]" />
          AI-Powered · Student Intelligence
        </div>

        <h1
          className="font-display tracking-tight leading-[1.07] animate-fade-up"
          style={{
            color: "#efeadd",
            fontSize: "clamp(26px, 8vw, 36px)",
            animationDelay: "100ms",
          }}
        >
          Transform Academic
          <br />
          Data Into Student{" "}
          <span style={{ color: "#e8a73a" }}>Success*</span>
        </h1>

        <p
          className="mt-4 text-[13px] leading-[1.65] animate-fade-up"
          style={{ color: "rgba(239,234,221,0.6)", animationDelay: "200ms" }}
        >
          An AI platform that helps schools identify learning gaps, track progress, and empower teachers &amp; parents with role-based dashboards.
        </p>

        {/* CTAs */}
        <div
          className="mt-7 flex flex-row gap-3 animate-fade-up"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#platform"
            className="group inline-flex items-center gap-1.5 rounded-full font-semibold text-[13.5px] transition-all active:scale-95"
            style={{
              background: "#e8a73a",
              color: "#1a1a1a",
              padding: "11px 20px",
              boxShadow: "0 6px 20px -6px rgba(232,167,58,0.55)",
            }}
          >
            Explore Platform <Arrow className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-full font-semibold text-[13.5px] transition-all active:scale-95"
            style={{
              border: "1px solid rgba(239,234,221,0.2)",
              color: "#efeadd",
              padding: "11px 20px",
              background: "rgba(255,255,255,0.06)",
            }}
          >
            Book Demo
          </a>
        </div>
      </div>

      {/* Light dashboard section */}
      <div
        className="lg:hidden w-full"
        style={{
          background: "#e9e2d4",
          padding: "28px 18px 40px",
        }}
      >
        {/* Label */}
        <div className="flex items-center gap-3 mb-5">
          <span
            className="text-[7.5px] font-mono uppercase tracking-[0.2em] shrink-0"
            style={{ color: "rgba(42,42,42,0.45)" }}
          >
            Live Dashboard Preview
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(26,26,26,0.1)" }} />
        </div>

        <LiveDashboard />

        {/* Scroll cue */}
        <div
          className="mt-8 flex items-center gap-2.5 text-[9px] font-mono uppercase tracking-[0.2em]"
          style={{ color: "rgba(42,42,42,0.4)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(42,42,42,0.3)" }} />
          Scroll to discover
        </div>
      </div>
    </section>
  );
}
