import { useEffect, useRef, useState } from "react";

export function useReveal<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("reveal-in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}

/** True once the user has scrolled past `offset` px (default ~ viewport height). */
export function useScrolledPast(offset?: number) {
  const [past, setPast] = useState(false);
  useEffect(() => {
    const compute = () =>
      setPast(window.scrollY > (offset ?? window.innerHeight - 80));
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [offset]);
  return past;
}
