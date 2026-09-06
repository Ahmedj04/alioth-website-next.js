import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights | AliothDigital",
  description: "Practical insights from AliothDigital across bids, recruitment, digital, software, IT and growth.",
  alternates: { canonical: "/insights" },
  robots: "index,follow",
};

export default function InsightsPage() {
  return (
    <>
<section className="page-hero"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Insights</span></nav></div><div className="container"><span className="eyebrow">Insights</span><h1>Useful<br /><span className="accent">thinking.</span></h1><p>Short, practical notes on bidding, hiring and digital work — written to help you make the next decision.</p></div><button className="btn ghost" data-meeting="">Start a meeting ↗</button></section><section className="section"><div className="container"><div className="feature-grid"><article className="feature"><span className="meta">COMPETE · Proposal</span><h3>Why a tender is not just a writing exercise.</h3><span>The strongest response starts with requirements, evidence, evaluation and ownership — before anyone writes the first polished paragraph.</span></article><article className="feature"><span className="meta">BUILD · Recruitment</span><h3>Why a good job description is not a hiring strategy.</h3><span>Define the capability, target the right people and build a screening process that respects candidates.</span></article><article className="feature"><span className="meta">GROW · Digital, Software & IT</span><h3>When a website should stop being a brochure.</h3><span>Your website has a job. The design should make that job easier to understand and easier to complete.</span></article></div></div></section>
    </>
  );
}
