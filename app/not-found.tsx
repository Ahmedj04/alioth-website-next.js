import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | AliothDigital",
  description: "The page you requested could not be found.",
  robots: "index,follow",
};

export default function NotFound() {
  return (
    <>
      <section className="page-hero"><div className="container"><nav aria-label="Breadcrumb" className="breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>404</span></nav></div><div className="container"><span className="eyebrow">404</span><h1>That page<br /><span className="accent">went elsewhere.</span></h1><p>Let's get you back to something useful.</p><div className="hero-actions"><Link className="btn primary" href="/">Back to home →</Link><Link className="btn ghost" href="/contact">Contact us</Link></div></div></section>
    </>
  );
}
