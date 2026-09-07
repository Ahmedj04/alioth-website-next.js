import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | AliothDigital — Compete, Build, Grow",
  description: "AliothDigital helps UK organisations compete work, build teams and grow through bid and tender management, recruitment, digital, software and IT services.",
  alternates: { canonical: "/services" },
  robots: "index,follow",
};

export default function ServicesPage() {
  return (
    <>
<section className="page-hero premium-hero">
  <div className="hero-noise" aria-hidden="true"></div>
  <div className="container">
    <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Services</span></nav>
    <div className="service-hero-copy">
      <span className="eyebrow">What we do</span>
      <h1>Good work starts<br /><span className="accent">with clarity.</span></h1>
      <p>Three clear routes, built around real business moments: an opportunity you want to compete, a team you need to build, or a business you want to grow.</p>
      <div className="hero-actions"><Link className="btn primary" href="/contact">Start a conversation ↗</Link><a className="btn ghost" href="#routes">See the routes ↓</a></div>
    </div>
  </div>
</section>

<section className="section route-section" id="routes">
<div className="container">
  <div className="section-head">
    <div><span className="kicker">The Alioth way</span><h2 className="title">Choose the outcome.<br /><em>We build the route.</em></h2></div>
    <p>We deliberately keep the front door simple. Behind it is a deeper set of specialist services, delivered with one accountable team.</p>
  </div>

  <div className="route-tree">
    <div className="tree-stem" aria-hidden="true"></div>
    <Link className="route-card compete reveal" href="/bid-development">
      <span className="route-number">01</span><span className="route-word">COMPETE</span>
      <div><span className="route-tag">Proposal & Bid Management</span><h3>Turn a tender into a response people can score.</h3><p>Opportunity review, bid/no-bid support, tender analysis, response development, compliance mapping, evidence, review and submission readiness.</p><span className="card-link">Explore COMPETE ↗</span></div>
    </Link>
    <Link className="route-card build reveal" href="/recruitment">
      <span className="route-number">02</span><span className="route-word">BUILD</span>
      <div><span className="route-tag">Recruitment & Talent</span><h3>Bring the right capability into the room.</h3><p>Focused sourcing, screening and IT staffing for teams that care about capability, fit and pace.</p><span className="card-link">Explore BUILD ↗</span></div>
    </Link>
    <Link className="route-card grow reveal" href="#grow">
      <span className="route-number">03</span><span className="route-word">GROW</span>
      <div><span className="route-tag">Digital, Software & IT</span><h3>Make your digital operation earn its place.</h3><p>Marketing, websites, software, AI, IT support and creative — connected rather than scattered.</p><span className="card-link">Explore GROW ↓</span></div>
    </Link>
  </div>
</div>
</section>

<section className="section paper2" id="grow">
<div className="container">
  <div className="section-head"><div><span className="kicker">GROW</span><h2 className="title">A practical digital team<br /><em>without the agency fog.</em></h2></div><p>Pick the capability you need today. Build the rest when the business is ready.</p></div>
  <div className="bento-services">
    <Link className="bento bento-large reveal" href="/digital-marketing"><span>01</span><h3>Digital marketing</h3><p>SEO, content, campaigns and customer acquisition with a clear commercial purpose.</p><strong>Explore ↗</strong></Link>
    <Link className="bento reveal" href="/web-development"><span>02</span><h3>Web & software</h3><p>Websites, platforms, portals, e-commerce and integrations.</p><strong>Explore ↗</strong></Link>
    <Link className="bento reveal" href="/ai-solutions"><span>03</span><h3>AI & automation</h3><p>Useful automation that removes repetitive work and helps people move faster.</p><strong>Explore ↗</strong></Link>
    <Link className="bento reveal" href="/software-it-services"><span>04</span><h3>Software & IT</h3><p>Systems, support, maintenance and practical technology capability.</p><strong>Explore ↗</strong></Link>
    <Link className="bento reveal" href="/graphic-design"><span>05</span><h3>Creative & content</h3><p>Brand, design and video that make the business easier to understand.</p><strong>Explore ↗</strong></Link>
  </div>
</div>
</section>

<section className="section dark statement">
<div className="container narrow">
  <span className="kicker">A human promise</span>
  <h2>Less theatre.<br /><em>More useful work.</em></h2>
  <p>You will always know what we are doing, why we are doing it and what needs your input. No black box. No unnecessary jargon. No disappearing after the pitch.</p>
  <Link className="btn light" href="/contact">Let's talk ↗</Link>
</div>
</section>
    </>
  );
}
