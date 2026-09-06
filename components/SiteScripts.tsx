"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function SiteScripts() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const body = document.body;
    const header = document.querySelector("[data-header]");
    const menu = document.querySelector(".menu");
    const serviceDrop = document.querySelector(".navdrop");
    const serviceButton = serviceDrop?.querySelector(":scope > button") as HTMLElement | null;
    const cleanups: Array<() => void> = [];

    const on = (target: EventTarget, type: string, fn: EventListenerOrEventListenerObject, opts?: AddEventListenerOptions) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };

    // Header scroll state
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    on(window, "scroll", onScroll, { passive: true });

    function closeServices() {
      serviceDrop?.classList.remove("open");
      serviceButton?.setAttribute("aria-expanded", "false");
    }

    function closeMenu() {
      body.classList.remove("mobile-open");
      menu?.classList.remove("is-open");
      menu?.setAttribute("aria-expanded", "false");
      menu?.setAttribute("aria-label", "Open menu");
      closeServices();
    }

    if (menu) {
      on(menu, "click", () => {
        const open = !body.classList.contains("mobile-open");
        body.classList.toggle("mobile-open", open);
        menu.classList.toggle("is-open", open);
        menu.setAttribute("aria-expanded", String(open));
        menu.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        if (!open) closeServices();
      });
    }

    if (serviceButton && serviceDrop) {
      on(serviceButton, "click", (e) => {
        e.preventDefault();
        const open = !serviceDrop.classList.contains("open");
        serviceDrop.classList.toggle("open", open);
        serviceButton.setAttribute("aria-expanded", String(open));
      });
    }

    serviceDrop?.querySelectorAll(".mega-group").forEach((group) => {
      const handler = (e: Event) => {
        if (!window.matchMedia("(max-width: 800px)").matches) return;
        if ((e.target as HTMLElement).closest("a")) return;
        const route = group.classList.contains("compete")
          ? "/proposal-development"
          : group.classList.contains("build")
            ? "/recruitment"
            : group.classList.contains("grow")
              ? "/services#grow"
              : null;
        if (route) window.location.href = route;
      };
      on(group, "click", handler);
    });

    const docClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (serviceDrop && !serviceDrop.contains(target)) closeServices();
      if (target.closest(".navlinks a") && window.matchMedia("(max-width: 980px)").matches) closeMenu();
      if (body.classList.contains("mobile-open") && !target.closest(".navlinks") && !target.closest(".menu")) closeMenu();
    };
    on(document, "click", docClick);

    const onKeydown = (e: Event) => {
      if ((e as KeyboardEvent).key === "Escape") closeMenu();
    };
    on(document, "keydown", onKeydown);

    const onResize = () => {
      if (window.innerWidth > 980 && body.classList.contains("mobile-open")) closeMenu();
    };
    on(window, "resize", onResize, { passive: true });

    // Scroll reveal
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let io: IntersectionObserver | null = null;
    if (!reduceMotion && "IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in");
              io?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -30px" }
      );
      document.querySelectorAll(".reveal").forEach((el) => io?.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }
    if (io) {
      const observer = io;
      cleanups.push(() => observer.disconnect());
    }

    // Pointer lift for premium cards
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
        on(el, "pointermove", onMove);
        on(el, "pointerleave", onLeave);
      });
    }

    // Meeting panel
    const meeting = document.querySelector("#meetingPanel");
    let lastFocus: HTMLElement | null = null;
    function openMeeting() {
      if (!meeting) return;
      lastFocus = document.activeElement as HTMLElement | null;
      meeting.classList.add("open");
      meeting.setAttribute("aria-hidden", "false");
      body.classList.add("no-scroll");
      (meeting.querySelector(".close") as HTMLElement | null)?.focus();
    }
    function closeMeeting() {
      if (!meeting) return;
      meeting.classList.remove("open");
      meeting.setAttribute("aria-hidden", "true");
      body.classList.remove("no-scroll");
      lastFocus?.focus?.();
    }
    document.querySelectorAll("[data-meeting]").forEach((b) => on(b, "click", openMeeting));
    document.querySelectorAll("[data-close-meeting]").forEach((b) => on(b, "click", closeMeeting));
    if (meeting) {
      on(meeting, "click", (e) => {
        if (e.target === meeting) closeMeeting();
      });
    }

    // Cookie banner
    const cookie = document.querySelector("#cookieBanner");
    if (cookie && !localStorage.getItem("alioth_cookie_ack")) cookie.classList.add("show");
    document.querySelectorAll("[data-cookie]").forEach((b) =>
      on(b, "click", () => {
        localStorage.setItem("alioth_cookie_ack", "1");
        cookie?.classList.remove("show");
      })
    );

    // Tender upload validation
    const file = document.querySelector("#tenderFile") as HTMLInputElement | null;
    const fileName = document.querySelector("#fileName");
    if (file) {
      on(file, "change", () => {
        const f = file.files?.[0];
        if (!f) {
          if (fileName) fileName.textContent = "No file selected.";
          return;
        }
        const allowed = ["pdf", "doc", "docx", "xls", "xlsx", "zip"];
        const ext = f.name.split(".").pop()?.toLowerCase() ?? "";
        if (!allowed.includes(ext) || f.size > 15 * 1024 * 1024) {
          alert("Please choose a PDF, DOC, DOCX, XLS, XLSX or ZIP file under 15 MB.");
          file.value = "";
          if (fileName) fileName.textContent = "No file selected.";
          return;
        }
        if (fileName) fileName.textContent = `${f.name} · ${(f.size / 1024 / 1024).toFixed(2)} MB`;
      });
    }

    document.querySelectorAll("form[data-validate]").forEach((form) =>
      on(form, "submit", (e) => {
        const f = form as HTMLFormElement;
        if (!f.checkValidity()) {
          e.preventDefault();
          f.reportValidity();
        }
      })
    );

    // Preserve route preselection for contact page
    const route = searchParams.get("route");
    const select = document.querySelector("#route") as HTMLSelectElement | null;
    if (select && route) {
      const map: Record<string, string> = { proposal: "proposal", recruitment: "recruitment", grow: "grow", "just-talk": "just" };
      const target = map[route];
      if (target) {
        [...select.options].some((opt) => {
          const match = (opt.value + " " + opt.textContent).toLowerCase().includes(target);
          if (match) {
            select.value = opt.value;
            return true;
          }
          return false;
        });
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [pathname, searchParams]);

  return null;
}
