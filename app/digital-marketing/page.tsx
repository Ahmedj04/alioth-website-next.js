import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO | AliothDigital",
  description:
    "Digital marketing and SEO services designed around visibility, useful content, qualified leads and measurable growth.",
  alternates: { canonical: "/digital-marketing" },
  robots: "index,follow",
};

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span
            aria-hidden="true">/</span><span>Digital Marketing</span></nav>
        </div>
        <div className="container"><span className="eyebrow">GROW · Digital, Software &amp; IT Marketing</span>
          <h1>Be easier to find.</h1>
          <p>SEO, content, paid campaigns, analytics and digital marketing built around the customer journey.</p>
          <div className="hero-actions">
            <Link href="/contact" className="btn primary">Talk about your project →</Link>
            <button className="btn ghost" data-meeting="">Start a meeting ↗</button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container service-layout">
          <div className="service-sticky"><span className="kicker">Practical delivery</span>
            <h2>Useful work, not a menu of buzzwords.</h2>
            <p>We start with your goal, constraints and audience. Then we choose the right technology and level of work.
            </p><a className="btn dark" href="contact.html">Tell us the problem →</a>
          </div>
          <div>
            <div className="service-block">
              <h3>What we can help with</h3>
              <p>SEO, content, performance marketing, analytics and digital marketing built around the customer journey.
              </p>
              <div className="service-list">
                <div>SEO strategy</div>
                <div>Google Business Profile</div>
                <div>Content planning</div>
                <div>Performance marketing</div>
                <div>Google &amp; Meta Ads</div>
                <div>Social media</div>
                <div>Email marketing</div>
                <div>Analytics &amp; reporting</div>
              </div>
            </div>
            <div className="service-block">
              <h3>How we work</h3>
              <p>Understand the context → agree the smallest useful plan → build or deliver → review what changed and what
                should happen next.</p>
            </div>
            <div className="service-block">
              <h3>What you can expect</h3>
              <p>Clear scope, visible ownership, sensible communication and an outcome you can explain to your own team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper2">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">GROW · Paid media</span>
              <h2 className="title">Performance marketing that earns its budget.</h2>
            </div>
            <p>We plan, launch and manage paid campaigns across Google, Meta and beyond — built around measurable
              leads and sales, not vanity impressions.</p>
          </div>
          <div className="feature-grid">
            <div className="feature">
              <strong>Google Ads</strong>
              <span>Search, Shopping, Display and YouTube campaigns built around commercial intent, with quality score
                and conversion tracking set up from day one.</span>
            </div>
            <div className="feature">
              <strong>Meta Ads</strong>
              <span>Facebook and Instagram campaigns across the funnel — awareness, consideration and conversion each
                handled with different creative and targeting.</span>
            </div>
            <div className="feature">
              <strong>Google Business Profile</strong>
              <span>Set-up, optimisation and ongoing management of your Google Business Profile so you show up and
                look credible in local search and Maps.</span>
            </div>
            <div className="feature">
              <strong>Retargeting &amp; remarketing</strong>
              <span>Bring back visitors who didn't convert the first time, with messaging matched to where they dropped
                off.</span>
            </div>
            <div className="feature">
              <strong>Conversion rate optimisation</strong>
              <span>Landing pages, offers and forms tested and refined so paid traffic converts at a higher rate.</span>
            </div>
            <div className="feature">
              <strong>Budget &amp; bid management</strong>
              <span>Ongoing bid strategy, budget pacing and spend allocation across channels based on what's actually
                performing.</span>
            </div>
            <div className="feature">
              <strong>Attribution &amp; reporting</strong>
              <span>Clear, regular reporting tied to leads, sales or sign-ups — not just clicks and impressions.</span>
            </div>
            <div className="feature">
              <strong>A/B &amp; creative testing</strong>
              <span>Structured testing of ad copy, creative and audiences so budget moves toward what wins.</span>
            </div>
            <div className="feature">
              <strong>Marketplace &amp; shopping ads</strong>
              <span>Product listing and shopping campaigns for businesses that sell online, set up for accurate feed
                data.</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">The Alioth standard</span>
              <h2 className="title">No unnecessary complexity.</h2>
            </div>
            <p>Good digital work should make the business easier to understand, easier to use or easier to operate.</p>
          </div>
          <div className="process">
            <div className="step"><b>01</b>
              <h3>Listen</h3>
              <p>Audience, business goal and constraints.</p>
            </div>
            <div className="step"><b>02</b>
              <h3>Make a plan</h3>
              <p>Priorities, deliverables and evidence.</p>
            </div>
            <div className="step"><b>03</b>
              <h3>Build</h3>
              <p>Focused execution with transparent communication.</p>
            </div>
            <div className="step"><b>04</b>
              <h3>Check together</h3>
              <p>Quality check and next recommendation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div><span className="kicker">Before you talk to us</span>
              <h2 className="title">Common questions.</h2>
            </div>
            <p>The things people usually want to know before starting a digital marketing or performance marketing
              project.</p>
          </div>
          <div className="faq">
            <details>
              <summary>Do you handle both SEO and paid/performance marketing?</summary>
              <p>Yes. We treat organic (SEO, content) and paid (search, social, display) as one plan rather than two
                separate teams, so budget and messaging stay consistent across both.</p>
            </details>
            <details>
              <summary>What platforms do you run performance marketing on?</summary>
              <p>Mainly Google Ads and Meta Ads, plus Google Business Profile for local visibility, and LinkedIn,
                TikTok, Bing Ads or programmatic display where the audience or budget justifies it. We recommend
                channels based on where your audience actually is, not by default.</p>
            </details>
            <details>
              <summary>Is there a minimum budget or contract length?</summary>
              <p>It depends on the channel and goal. We'll talk through realistic budget ranges and timelines before
                anything is agreed, so there are no surprises later.</p>
            </details>
            <details>
              <summary>How do you report on results?</summary>
              <p>Regular reporting tied to leads, sales or sign-ups, alongside the underlying channel metrics —
                agreed upfront so everyone knows what "working" looks like.</p>
            </details>
            <details>
              <summary>What if we already have some of this in place?</summary>
              <p>We're happy to review what's already running, keep what's working and improve or replace what isn't
                — you don't need to start from zero.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
