"use client";

import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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

    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 12);
    onScroll();
    on(window, "scroll", onScroll, { passive: true });

    function closeServices() {
      serviceDrop?.classList.remove("open");
      serviceDrop?.classList.add("closing");
      serviceButton?.setAttribute("aria-expanded", "false");

      window.setTimeout(() => {
        serviceDrop?.classList.remove("closing");
      }, 300);
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

        // Remove closing state if user opens it again
        serviceDrop.classList.remove("closing");

        const open = !serviceDrop.classList.contains("open");

        serviceDrop.classList.toggle("open", open);
        serviceButton.setAttribute("aria-expanded", String(open));
      });
    }

    // Close mega-menu immediately when navigating to a service
    serviceDrop?.querySelectorAll("a").forEach((link) => {
      on(link, "click", () => {
        closeServices();
      });
    });

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

    on(document, "keydown", (e) => {
      if ((e as KeyboardEvent).key === "Escape") closeMenu();
    });

    on(window, "resize", () => {
      if (window.innerWidth > 980 && body.classList.contains("mobile-open")) closeMenu();
    }, { passive: true });

    return () => cleanups.forEach((fn) => fn());
  }, [pathname]);

  return (
    <>
      <div className="topline">
        <div className="container topbar-inner">
          <span><strong>ALIOTHDIGITAL</strong><i>London · UK</i></span>
          <span className="topbar-right">COMPETE <b>·</b> BUILD <b>·</b> GROW</span>
        </div>
      </div>
      <header className="site-header" data-header>
        <div className="container nav">
          <Link aria-label="AliothDigital home" className="brand" href="/">
            <img alt="AliothDigital" src="/images/alioth-logo.png" />
          </Link>

          <button className="menu" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open menu">
            <span></span><span></span>
          </button>

          <nav id="primary-navigation" aria-label="Primary navigation" className="navlinks">
            <div className="navdrop">
              <button type="button" aria-expanded="false" aria-haspopup="true">Services <span className="nav-chevron" aria-hidden="true">⌄</span></button>
              <div className="dropdown mega-menu" role="menu">
                <div className="mega-intro">
                  <span className="kicker">How we help</span>
                  <h3>Three routes.<br /><em>One team.</em></h3>
                  <p>Choose the outcome first. We will help you work out the route, the next step and the right level of support.</p>
                  <Link className="text-link" href="/services">View all services <span>↗</span></Link>
                </div>

                <div className="mega-group compete">
                  <span className="mega-index">01</span>
                  <span className="mega-label">COMPETE</span>
                  <h4>Bid & Tender Management</h4>
                  <p>Make the opportunity easier to understand, shape and submit.</p>
                  <Link href="/proposal-development"><strong>Bid & tender management</strong><small>Opportunity review · response development · compliance · QA</small></Link>
                  <Link href="/upload-tender"><strong>Upload a tender</strong><small>Send the pack and deadline. Start with the opportunity.</small></Link>
                </div>

                <div className="mega-group build">
                  <span className="mega-index">02</span>
                  <span className="mega-label">BUILD</span>
                  <h4>Recruitment & Talent</h4>
                  <p>Find capable people without turning recruitment into CV volume.</p>
                  <Link href="/recruitment"><strong>Recruitment & IT staffing</strong><small>Sourcing · screening · technical capability · placement</small></Link>
                </div>

                <div className="mega-group grow">
                  <span className="mega-index">03</span>
                  <span className="mega-label">GROW</span>
                  <h4>Digital, Software & IT</h4>
                  <p>Practical digital capability for businesses that want to move forward.</p>
                  <div className="mega-links">
                    <Link href="/digital-marketing"><strong>Digital marketing</strong><small>SEO · content · campaigns</small></Link>
                    <Link href="/web-development"><strong>Web & software</strong><small>Websites · platforms · integrations</small></Link>
                    <Link href="/ai-solutions"><strong>AI & automation</strong><small>Useful systems, not AI theatre</small></Link>
                    <Link href="/software-it-services"><strong>Software & IT services</strong><small>Support · systems · maintenance</small></Link>
                    <Link href="/graphic-design"><strong>Creative & content</strong><small>Brand · design · video</small></Link>
                  </div>
                </div>

                <div className="mega-footer">
                  <span>Not sure what you need?</span>
                  <Link href="/contact?route=just-talk">Just talk to us <span>↗</span></Link>
                </div>
              </div>
            </div>

            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
            <Link className="navcta" href="/contact">Start a conversation <span>↗</span></Link>
          </nav>
        </div>
      </header>
    </>
  );
}
