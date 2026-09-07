"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menus when route changes
  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  // Header events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    const handleResize = () => {
      if (window.innerWidth > 980) {
        setMobileOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
  };

  const handleMenuToggle = () => {
    setMobileOpen((prev) => {
      if (prev) setServicesOpen(false);
      return !prev;
    });
  };

  const handleServicesClick = () => {
    if (window.innerWidth <= 980) {
      setServicesOpen((prev) => !prev);
    }
  };

  return (
    <>
      <div className="topline">
        <div className="container topbar-inner">
          <span>
            <strong>ALIOTHDIGITAL</strong>
            <i>London · UK</i>
          </span>

          <span className="topbar-right">
            COMPETE <b>·</b> BUILD <b>·</b> GROW
          </span>
        </div>
      </div>

      <header
        className={`site-header${scrolled ? " scrolled" : ""}`}
        data-header
      >
        <div className="container nav">

          <Link
            aria-label="AliothDigital home"
            className="brand"
            href="/"
            onClick={closeMenus}
          >
            <img alt="AliothDigital" src="/images/alioth-logo.png" />
          </Link>

          <button
            className={`menu${mobileOpen ? " is-open" : ""}`}
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={handleMenuToggle}
          >
            <span></span>
            <span></span>
          </button>

          <nav
            id="primary-navigation"
            aria-label="Primary navigation"
            className={`navlinks${mobileOpen ? " mobile-open" : ""}`}
          >
            <div
              className={`navdrop ${servicesOpen ? " open" : ""}`}
              onMouseEnter={() => {
                if (window.innerWidth > 980) {
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 980) {
                  setServicesOpen(false);
                }
              }}
            >
              <button
                type="button"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                onClick={handleServicesClick}
              >
                Services
                <span className="nav-chevron" aria-hidden="true"></span>
              </button>

              <div className="dropdown mega-menu" role="menu">

                <div className="mega-intro">
                  <span className="kicker">How we help</span>

                  <h3>
                    Three routes.
                    <br />
                    <em>One team.</em>
                  </h3>

                  <p>
                    Choose the outcome first. We will help you work out the
                    route, the next step and the right level of support.
                  </p>

                  <Link
                    className="text-link"
                    href="/services"
                    onClick={closeMenus}
                  >
                    View all services <span>↗</span>
                  </Link>
                </div>

                <div className="mega-group compete">
                  <span className="mega-index">01</span>
                  <span className="mega-label">COMPETE</span>

                  <h4>Bid & Tender Management</h4>

                  <p>
                    Make the opportunity easier to understand, shape and
                    submit.
                  </p>

                  <Link
                    href="/proposal-development"
                    onClick={closeMenus}
                  >
                    <strong>Bid & tender management</strong>
                    <small>
                      Opportunity review · response development · compliance ·
                      QA
                    </small>
                  </Link>

                  <Link
                    href="/upload-tender"
                    onClick={closeMenus}
                  >
                    <strong>Upload a tender</strong>
                    <small>
                      Send the pack and deadline. Start with the opportunity.
                    </small>
                  </Link>
                </div>

                <div className="mega-group build">
                  <span className="mega-index">02</span>
                  <span className="mega-label">BUILD</span>

                  <h4>Recruitment & Talent</h4>

                  <p>
                    Find capable people without turning recruitment into CV
                    volume.
                  </p>

                  <Link
                    href="/recruitment"
                    onClick={closeMenus}
                  >
                    <strong>Recruitment & IT staffing</strong>
                    <small>
                      Sourcing · screening · technical capability · placement
                    </small>
                  </Link>
                </div>

                <div className="mega-group grow">
                  <span className="mega-index">03</span>
                  <span className="mega-label">GROW</span>

                  <h4>Digital, Software & IT</h4>

                  <p>
                    Practical digital capability for businesses that want to
                    move forward.
                  </p>

                  <div className="mega-links">

                    <Link
                      href="/digital-marketing"
                      onClick={closeMenus}
                    >
                      <strong>Digital marketing</strong>
                      <small>SEO · content · campaigns</small>
                    </Link>

                    <Link
                      href="/web-development"
                      onClick={closeMenus}
                    >
                      <strong>Web & software</strong>
                      <small>Websites · platforms · integrations</small>
                    </Link>

                    <Link
                      href="/ai-solutions"
                      onClick={closeMenus}
                    >
                      <strong>AI & automation</strong>
                      <small>Useful systems, not AI theatre</small>
                    </Link>

                    <Link
                      href="/software-it-services"
                      onClick={closeMenus}
                    >
                      <strong>Software & IT services</strong>
                      <small>Support · systems · maintenance</small>
                    </Link>

                    <Link
                      href="/graphic-design"
                      onClick={closeMenus}
                    >
                      <strong>Creative & content</strong>
                      <small>Brand · design · video</small>
                    </Link>

                  </div>
                </div>

                <div className="mega-footer">
                  <span>Not sure what you need?</span>

                  <Link
                    href="/contact?route=just-talk"
                    onClick={closeMenus}
                  >
                    Just talk to us <span>↗</span>
                  </Link>
                </div>

              </div>
            </div>

            <Link href="/work" onClick={closeMenus}>
              Work
            </Link>

            <Link href="/about" onClick={closeMenus}>
              About
            </Link>

            <Link href="/insights" onClick={closeMenus}>
              Insights
            </Link>

            <Link href="/contact" onClick={closeMenus}>
              Contact
            </Link>

            <Link
              className="navcta"
              href="/contact"
              onClick={closeMenus}
            >
              Start a conversation <span>↗</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}