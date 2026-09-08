import Link from "next/link";
import type { Metadata } from "next";
import ApmpCertificate from "@/components/ApmpCertificate";

export const metadata: Metadata = {
  title:
    "AliothDigital — Bid & Tender Management, Recruitment & Digital, Software & IT",
  description:
    "AliothDigital helps UK organisations compete work through bid and tender management, build teams through recruitment, and grow through digital, software and IT.",
  alternates: { canonical: "/" },
  robots: "index,follow",
};

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="reveal">
            <span className="eyebrow">
              One partner, three ways forward
            </span>
            <h1>
              Compete.<span>Build.</span>Grow.
            </h1>
            <p className="hero-copy">
              Some businesses need to compete the next contract. Some need the
              right people to deliver it. Others need a digital presence that
              works harder. AliothDigital helps with all three — thoughtfully,
              practically and without the sales maze.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" href="/bid-development">
                Explore COMPETE ↗
              </Link>
              <button className="btn ghost" data-meeting>
                Start a meeting ↗
              </button>
            </div>
            <div className="signature-line">
              <span>Bid · Recruitment · Digital</span>
            </div>
          </div>
          <div className="hero-side reveal">
            <div className="hero-visual">
              <div className="frame"></div>
              <img
                src="/images/hero-meeting.svg"
                alt="Two people discussing work around a table"
              />
              {/* <div className="hero-note">
                <b>Start with the problem</b>
                <span>
                  You don't need to know which service you need. That's our job
                  to work out with you.
                </span>
              </div>
              <div className="meeting-orbit">
                <button data-meeting aria-label="Start a meeting">
                  START
                  <br />A MEETING
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">One partner · three routes</span>
              <h2 className="title">What are you trying to get done?</h2>
            </div>
            <p>
              Choose the problem, not the service. If you're not sure where you
              fit, just talk to us.
            </p>
          </div>
          <div className="three-paths">
            <Link className="path reveal" href="/bid-development">
              <span className="path-num">01 · COMPETE</span>
              <div>
                <h3>Compete the work.</h3>
                <p>
                  Bid & tender management for UK opportunities, including tender
                  analysis, proposal development, compliance and submission
                  readiness. for UK opportunities.
                </p>
              </div>
              <span className="path-arrow">↗</span>
              <span className="ghostline"></span>
            </Link>
            <Link className="path reveal" href="/recruitment">
              <span className="path-num">02 · BUILD</span>
              <div>
                <h3>Build the team.</h3>
                <p>
                  Recruitment and IT staffing built around the role, the market
                  and the people you actually need.
                </p>
              </div>
              <span className="path-arrow">↗</span>
              <span className="ghostline"></span>
            </Link>
            <Link className="path reveal" href="/services#grow">
              <span className="path-num">03 · GROW</span>
              <div>
                <h3>Grow the business.</h3>
                <p>
                  Digital marketing, software, IT, websites, AI, creative and
                  practical automation — all connected to commercial goals.
                </p>
              </div>
              <span className="path-arrow">↗</span>
              <span className="ghostline"></span>
            </Link>
          </div>
        </div>
      </section>
      <section className="alioth-tree-section">
        <div className="container alioth-tree">
          <div className="tree-intro reveal">
            <span className="kicker">The Alioth structure</span>
            <h2 className="title">
              One partner.
              <br />
              <span>Three branches.</span>
            </h2>
            <p>
              Everything we do sits under one of three clear outcomes. No long
              service list. No guessing which team you need.
            </p>
          </div>
          <div className="tree-diagram" aria-label="Alioth services tree">
            <div className="tree-root">
              <span className="tree-root-dot"></span>
              <strong>ALIOTHDIGITAL</strong>
              <small>One partner for the work ahead.</small>
            </div>
            <div className="tree-trunk"></div>
            <div className="tree-branches">
              <article className="tree-branch compete reveal">
                <div className="branch-head">
                  <span>01</span>
                  <h3>COMPETE</h3>
                  <p>Bid & Tender Management</p>
                </div>
                <div className="branch-leaves">
                  <Link href="/bid-development">Tender analysis</Link>
                  <Link href="/bid-development">Proposal development</Link>
                  <Link href="/bid-development">
                    Tender response writing
                  </Link>
                  <Link href="/bid-development">Compliance & QA</Link>
                  <Link href="/bid-development">
                    Bid planning & submission
                  </Link>
                  <Link href="/upload-tender">Upload a Tender ↗</Link>
                </div>
              </article>
              <article className="tree-branch build reveal">
                <div className="branch-head">
                  <span>02</span>
                  <h3>BUILD</h3>
                  <p>Recruitment & Talent</p>
                </div>
                <div className="branch-leaves">
                  <Link href="/recruitment">Recruitment</Link>
                  <Link href="/recruitment">IT staffing</Link>
                  <Link href="/recruitment">Talent sourcing</Link>
                  <Link href="/recruitment">Candidate screening</Link>
                  <Link href="/recruitment">Contract staffing</Link>
                </div>
              </article>
              <article className="tree-branch grow reveal">
                <div className="branch-head">
                  <span>03</span>
                  <h3>GROW</h3>
                  <p>Digital, Software & IT</p>
                </div>
                <div className="branch-leaves">
                  <Link href="/digital-marketing">Digital marketing & SEO</Link>
                  <Link href="/web-development">Web & software</Link>
                  <Link href="/ai-solutions">AI & automation</Link>
                  <Link href="/software-it-services">IT & systems</Link>
                  <Link href="/graphic-design">Creative & content</Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">COMPETE · Bid & tender management</span>
              <h2 className="title">Make the opportunity easier to compete.</h2>
            </div>
            <p>
              We can help turn a tender pack into a clear response plan,
              stronger evidence and a submission your team can stand behind.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature reveal">
              <strong>Opportunity review</strong>
              <span>
                Understand the buyer, requirements, deadlines and whether the
                opportunity is worth pursuing.
              </span>
            </div>
            <div className="feature reveal">
              <strong>Bid strategy</strong>
              <span>
                Build a practical response structure, compete themes,
                responsibilities and review points.
              </span>
            </div>
            <div className="feature reveal">
              <strong>Proposal development</strong>
              <span>
                Clear, persuasive content aligned to the evaluation criteria and
                your evidence.
              </span>
            </div>
            <div className="feature reveal">
              <strong>Compliance & QA</strong>
              <span>
                Check instructions, page limits, attachments, consistency and
                unanswered requirements.
              </span>
            </div>
            <div className="feature reveal">
              <strong>PQQ / SQ / frameworks</strong>
              <span>
                Support for common UK procurement routes and pre-qualification
                responses.
              </span>
            </div>
            <div className="feature reveal">
              <strong>Submission support</strong>
              <span>
                Bring the final pieces together before the deadline, without
                last-minute chaos.
              </span>
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: "28px" }}>
            <Link className="btn dark" href="/bid-development">
              See proposal services ↗
            </Link>
            <Link className="btn ghost dark" href="/upload-tender">
              Upload a tender ↗
            </Link>
          </div>
        </div>
      </section>
      <section className="section paper2">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Who we can write for</span>
              <h2 className="title">
                Your sector.
                <br />
                Your evidence.
              </h2>
            </div>
            <p>
              We can develop proposal responses for UK public, private and
              third-sector opportunities, subject to the tender requirements and
              the evidence available.
            </p>
          </div>
          <div
            className="sector-grid sector-marquee"
            aria-label="Who we can write for"
          >
            <div className="sector-track">
              <div className="sector reveal">
                <b>NHS</b>
              </div>
              <div className="sector reveal">
                <b>Civil Design</b>
              </div>
              <div className="sector reveal">
                <b>Healthcare</b>
              </div>
              <div className="sector reveal">
                <b>IT</b>
              </div>
              <div className="sector reveal">
                <b>Facilities Programme Management</b>
              </div>
              <div className="sector reveal">
                <b>NHS</b>
              </div>
              <div className="sector" aria-hidden="true">
                <b>Civil Design</b>
              </div>
              <div className="sector" aria-hidden="true">
                <b>Healthcare</b>
              </div>
              <div className="sector" aria-hidden="true">
                <b>IT</b>
              </div>
              <div className="sector" aria-hidden="true">
                <b>Facilities Programme Management</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="upload-box reveal">
            <div className="upload-layout">
              <div>
                <span className="kicker">COMPETE · Send the opportunity</span>
                <h2 className="title">Have a tender sitting in your inbox?</h2>
                <p style={{ color: "#b6c1c6", maxWidth: "590px" }}>
                  Don't write a long email first. Send the documents, tell us
                  the deadline and we'll start with the opportunity itself.
                </p>
                <Link className="btn primary" href="/upload-tender">
                  Upload a tender ↗
                </Link>
              </div>
              <div className="upload-drop">
                <strong>What you can send</strong>
                <p style={{ color: "#9eabb1", margin: "8px 0 18px" }}>
                  RFP · ITT · tender pack · framework documents · scope · PQQ ·
                  SQ
                </p>
                <span style={{ fontSize: ".7rem", color: "#7f8e94" }}>
                  PDF, DOC, DOCX, XLS, XLSX or ZIP · max 15 MB
                </span>
                <p className="file-note">
                  Please do not upload classified material or sensitive personal
                  data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">BUILD · Recruitment & staffing</span>
              <h2 className="title">Find the person you were missing.</h2>
            </div>
            <p>
              From IT and digital roles to specialist business hires, we keep
              the recruitment process focused on the actual role, market and
              fit.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature reveal">
              <strong>Tell us who you need</strong>
              <span>
                Role, location, skills, seniority, contract type and what
                success looks like.
              </span>
            </div>
            <div className="feature reveal">
              <strong>Source & screen</strong>
              <span>
                Search, shortlist and first-stage screening around the brief.
              </span>
            </div>
            <div className="feature reveal">
              <strong>Shortlist with context</strong>
              <span>
                Clear candidate information so you can make a faster decision.
              </span>
            </div>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" href="/recruitment">
              Explore BUILD ↗
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Clients</span>
              <h2 className="title">Businesses we've worked with.</h2>
            </div>
            <p>
              Our existing digital work spans healthcare, engineering, software,
              events, e-commerce and membership organisations.
            </p>
          </div>
          <div className="client-wall client-marquee" aria-label="Clients">
            <div className="client-logo-track">
              <div className="client">
                <span className="client-logo">
                  <img src="/images/bkma-logo.png" alt="BKMA" />
                </span>
                <small>Membership</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img src="/images/medecon-logo.png" alt="Medecon" />
                </span>
                <small>Healthcare</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img
                    src="/images/smart-flow-logo.png"
                    alt="Smart Flow Engineering"
                  />
                </span>
                <small>Industrial</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img src="/images/docacquire-logo.png" alt="DocAcquire" />
                </span>
                <small>Software</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img
                    src="/images/centennial-logo.png"
                    alt="Centennial Workshop"
                  />
                </span>
                <small>E-commerce</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img src="/images/bonny-arts-logo.png" alt="Bonny Arts" />
                </span>
                <small>Art marketplace</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img src="/images/eventezi-logo.png" alt="eventezi" />
                </span>
                <small>Events</small>
              </div>
              <div className="client">
                <span className="client-logo">
                  <img
                    src="/images/persian-dowry-logo.png"
                    alt="Persian Dowry"
                  />
                </span>
                <small>Brand / digital</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img src="/images/bkma-logo.png" alt="BKMA" />
                </span>
                <small>Membership</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img src="/images/medecon-logo.png" alt="Medecon" />
                </span>
                <small>Healthcare</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img
                    src="/images/smart-flow-logo.png"
                    alt="Smart Flow Engineering"
                  />
                </span>
                <small>Industrial</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img src="/images/docacquire-logo.png" alt="DocAcquire" />
                </span>
                <small>Software</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img
                    src="/images/centennial-logo.png"
                    alt="Centennial Workshop"
                  />
                </span>
                <small>E-commerce</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img src="/images/bonny-arts-logo.png" alt="Bonny Arts" />
                </span>
                <small>Art marketplace</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img src="/images/eventezi-logo.png" alt="eventezi" />
                </span>
                <small>Events</small>
              </div>
              <div className="client" aria-hidden="true">
                <span className="client-logo">
                  <img
                    src="/images/persian-dowry-logo.png"
                    alt="Persian Dowry"
                  />
                </span>
                <small>Brand / digital</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ApmpCertificate className="section " style={{backgroundColor: "white"}}/>

      <section className="section paper2">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="kicker">Not sure where to start?</span>
              <h2 className="title">Just tell us what's happening.</h2>
            </div>
            <p>
              You don't need a polished brief. A tender, a role, a website
              problem or a half-formed idea is enough for a first conversation.
            </p>
          </div>
          <div className="hero-actions">
            <button className="btn dark" data-meeting>
              Start a meeting ↗
            </button>
            <Link className="btn ghost dark" href="/contact">
              Send a message ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
