import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | AliothDigital",
  description: "AliothDigital — practical, human digital, recruitment and bid support for businesses and organisations.",
  alternates: { canonical: "/thank-you" },
  robots: "noindex",
};

export default function ThankYouPage() {
  return (
    <>
<section className="page-hero">
            <div className="container">
                <nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Thank You</span></nav>
            </div>
            <div className="container"><span className="eyebrow">Received</span>
                <h1>Thanks.<br /><span className="accent">We'll take it from here.</span></h1>
                <p>Your message has been submitted. If it was a tender upload, please keep the original file and
                    deadline handy in case we need clarification.</p>
                <div className="hero-actions"><Link className="btn primary" href="/">Back to Alioth →</Link><Link className="btn ghost" href="/contact">Send another enquiry</Link></div>
            </div>
        </section>
    </>
  );
}
