"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PageEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];

    // Scroll reveal
    let io: IntersectionObserver | null = null;
    if (!reduceMotion && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((entry) => {
          if (entry.isIntersecting) { entry.target.classList.add("in"); io?.unobserve(entry.target); }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -30px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => io?.observe(el));
      cleanups.push(() => io?.disconnect());
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }

    // Pointer lift
    if (!reduceMotion && window.matchMedia("(pointer:fine)").matches) {
      document.querySelectorAll(".bento,.route-card").forEach((card) => {
        const el = card as HTMLElement;
        const onMove = (e: Event) => {
          const pe = e as PointerEvent;
          const r = el.getBoundingClientRect();
          const x = (pe.clientX - r.left) / r.width - 0.5;
          const y = (pe.clientY - r.top) / r.height - 0.5;
          el.style.transform = `perspective(900px) rotateX(${y * -1.2}deg) rotateY(${x * 1.2}deg) translateY(-4px)`;
        };
        const onLeave = () => (el.style.transform = "");
        el.addEventListener("pointermove", onMove);
        el.addEventListener("pointerleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      });
    }

    // Form validation
    document.querySelectorAll("form[data-validate]").forEach((form) => {
      const onSubmit = (e: Event) => {
        const f = form as HTMLFormElement;
        if (!f.checkValidity()) { e.preventDefault(); f.reportValidity(); }
      };
      form.addEventListener("submit", onSubmit);
      cleanups.push(() => form.removeEventListener("submit", onSubmit));
    });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return null;
}
