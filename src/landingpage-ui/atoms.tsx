import { type CSSProperties, type ReactNode } from "react";
import siteBg from "@/assets/website_bg.png";
import { useReveal } from "./hooks";

export const SITE_BG = siteBg;


export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/** Wrap any block to fade-and-rise on scroll into view. */
export function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  style: customStyle = {},
  children,
}: {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties = {
    ...customStyle,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };
  const Component = Tag as React.ElementType;
  return (
    <Component ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Component>
  );
}

export function SectionBg({
  id,
  children,
  className = "",
  variant = "textured",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: "textured" | "solid" | "cream";
}) {
  const bgStyle =
    variant === "solid"
      ? { backgroundColor: "#fbfaf7" }
      : variant === "cream"
      ? { backgroundColor: "#f4efe2" }
      : {
          backgroundImage: `linear-gradient(180deg, rgba(233,226,212,0.88), rgba(233,226,212,0.92)), url(${SITE_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };

  return (
    <section id={id} className={`relative ${className}`} style={bgStyle}>
      {children}
    </section>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-[#2a2a2a]/70">
      <span className="inline-block h-[1px] w-8 bg-[#1a1a1a]/60" />
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  kicker,
  align = "left",
}: {
  children: ReactNode;
  kicker?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto" : ""}>
      {kicker && (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <SectionLabel>{kicker}</SectionLabel>
        </div>
      )}
      <h2 className="mt-6 font-display text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.05] tracking-tight text-[#161616] max-w-[920px]">
        {children}
      </h2>
    </Reveal>
  );
}
