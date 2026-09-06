import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility | AliothDigital",
  description: "Accessibility information and commitments for the AliothDigital website.",
  alternates: { canonical: "/accessibility" },
  robots: "index,follow",
};

export default function AccessibilityPage() {
  return (
    <>
<section className="page-hero"><div className="container"><nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Accessibility</span></nav></div><div className="container"><span className="eyebrow">Accessibility</span><h1>Designed for<br /><span className="accent">more people.</span></h1><p>We aim to make this website usable across devices, input methods and assistive technologies.</p></div><button className="btn ghost" data-meeting="">Start a meeting ↗</button></section><section className="section"><div className="container faq"><details open><summary>Our approach</summary><p>We aim to follow WCAG 2.2 AA principles, including keyboard access, semantic structure, readable contrast, accessible forms, alternative text and reduced-motion support.</p></details><details><summary>Something not working?</summary><p>Email hello@aliothdigital.com with the page, problem and device/browser if known. We will use the feedback to improve the experience.</p></details></div></section>
    </>
  );
}
