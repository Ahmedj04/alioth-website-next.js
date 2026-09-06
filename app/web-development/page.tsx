import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Software Development | AliothDigital",
  description: "Web and software development for websites, e-commerce, portals, platforms and integrations.",
  alternates: { canonical: "/web-development" },
  robots: "index,follow",
};

export default function WebDevelopmentPage() {
  return (
    <>
<section className="page-hero"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Web Development</span></nav></div><div className="container"><span className="eyebrow">GROW · Web Development</span><h1>Build a digital home that works.</h1><p>Responsive websites and e-commerce experiences built for performance, accessibility, maintainability and conversion.</p><div className="hero-actions"><Link className="btn primary" href="/contact">Talk about your project →</Link><button className="btn ghost" data-meeting="">Start a meeting ↗</button></div></div></section><section className="section"><div className="container service-layout"><div className="service-sticky"><span className="kicker">Practical delivery</span><h2>Useful work, not a menu of buzzwords.</h2><p>We start with your goal, constraints and audience. Then we choose the right technology and level of work.</p><Link className="btn dark" href="/contact">Tell us the problem →</Link></div><div><div className="service-block"><h3>What we can help with</h3><p>Responsive websites and e-commerce experiences built for performance, accessibility, maintainability and conversion.</p><div className="service-list"><div>Business websites</div><div>E-commerce</div><div>WordPress</div><div>Custom front-end</div><div>API integrations</div><div>UX & performance</div></div></div><div className="service-block"><h3>How we work</h3><p>Understand the context → agree the smallest useful plan → build or deliver → review what changed and what should happen next.</p></div><div className="service-block"><h3>What you can expect</h3><p>Clear scope, visible ownership, sensible communication and an outcome you can explain to your own team.</p></div></div></div></section><section className="section dark"><div className="container"><div className="section-head"><div><span className="kicker">The Alioth standard</span><h2 className="title">No unnecessary complexity.</h2></div><p>Good digital work should make the business easier to understand, easier to use or easier to operate.</p></div><div className="process"><div className="step"><b>01</b><h3>Listen</h3><p>Audience, business goal and constraints.</p></div><div className="step"><b>02</b><h3>Make a plan</h3><p>Priorities, deliverables and evidence.</p></div><div className="step"><b>03</b><h3>Build</h3><p>Focused execution with transparent communication.</p></div><div className="step"><b>04</b><h3>Check together</h3><p>Quality check and next recommendation.</p></div></div></div></section>
    </>
  );
}
