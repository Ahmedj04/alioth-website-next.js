import Link from "next/link";
import type { Metadata } from "next";
import ApmpCertificate from "@/components/ApmpCertificate";

export const metadata: Metadata = {
  title: "About AliothDigital | London",
  description:
    "Meet AliothDigital and learn how we work: clear communication, practical delivery and accountable partnerships.",
  alternates: { canonical: "/about" },
  robots: "index,follow",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>About</span>
          </nav>
        </div>
        <div className="container">
          <span className="eyebrow">About AliothDigital</span>
          <h1>
            Serious about
            <br />
            <span className="accent">the work.</span>
          </h1>
          <p>
            AliothDigital Studios is a London-based business built around a
            simple idea: useful work starts with understanding the problem, not
            pushing a package.
          </p>
        </div>
        <button className="btn ghost" data-meeting="">
          Start a meeting ↗
        </button>
      </section>
      <section className="section">
        <div className="container service-layout">
          <div className="service-sticky">
            <span className="kicker">Why the model changed</span>
            <h2>One partner. Clearer routes.</h2>
          </div>
          <div>
            <div className="service-block">
              <h3>COMPETE</h3>
              <p>
                Proposal development and bid management is a new focus for
                AliothDigital, designed to help UK organisations turn
                procurement opportunities into structured, credible responses.
              </p>
            </div>
            <div className="service-block">
              <h3>BUILD</h3>
              <p>
                Recruitment and IT staffing extends that same practical approach
                to people: understand the capability, target the right market
                and communicate clearly.
              </p>
            </div>
            <div className="service-block">
              <h3>GROW</h3>
              <p>
                Digital is where our client history lives: websites, marketing,
                creative, maintenance, e-commerce and technology work for real
                organisations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Principles</span>
              <h2 className="title">How we show up.</h2>
            </div>
          </div>
          <div className="process">
            <div className="step">
              <b>01</b>
              <h3>Clear</h3>
              <p>Plain language. Clear ownership. No unnecessary complexity.</p>
            </div>
            <div className="step">
              <b>02</b>
              <h3>Human</h3>
              <p>People first — clients, candidates, customers and users.</p>
            </div>
            <div className="step">
              <b>03</b>
              <h3>Evidence-led</h3>
              <p>
                Recommendations should connect to facts, requirements and
                outcomes.
              </p>
            </div>
            <div className="step">
              <b>04</b>
              <h3>Practical</h3>
              <p>Good strategy only matters when someone can act on it.</p>
            </div>
          </div>
        </div>
      </section>

      <ApmpCertificate className="section paper2"/>
      
      <section className="section paper">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">What we don't do</span>
              <h2 className="title">No theatre.</h2>
            </div>
            <p>We would rather show the work than decorate it with claims.</p>
          </div>
          <div className="feature-grid">
            <div className="feature">
              <strong>We don't invent evidence.</strong>
              <span>
                If a case study or result is not real and approved, it does not
                go on the site.
              </span>
            </div>
            <div className="feature">
              <strong>We don't hide the process.</strong>
              <span>
                You should know what is happening, who owns it and what we need
                from you.
              </span>
            </div>
            <div className="feature">
              <strong>We don't force a package.</strong>
              <span>
                If a smaller piece of work solves the problem, that's what we'll
                recommend.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
