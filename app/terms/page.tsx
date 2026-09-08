import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms | AliothDigital",
  description:
    "Terms and conditions for using AliothDigital services and this website.",
  alternates: { canonical: "/terms" },
  robots: "index,follow",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Terms</span>
          </nav>
        </div>
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>
            Terms of
            <br />
            <span className="accent">use.</span>
          </h1>
          <p>Website terms for AliothDigital Studios.</p>
          <div className="hero-actions">
            <button className="btn ghost" data-meeting>
              Start a meeting ↗
            </button>
          </div>
        </div>
        
      </section>
      <section className="section">
        <div className="container faq">
          <details open>
            <summary>Website information</summary>
            <p>
              We aim to keep the website accurate and useful, but content is
              provided for general information and may change without notice.
            </p>
          </details>
          <details>
            <summary>Services</summary>
            <p>
              Any proposal, recruitment or digital engagement is subject to a
              separate agreed scope, commercial terms and applicable contractual
              documents.
            </p>
          </details>
          <details>
            <summary>Intellectual property</summary>
            <p>
              Unless stated otherwise, website content, design and code are
              owned by or licensed to AliothDigital Studios. Client work remains
              subject to the relevant client agreement.
            </p>
          </details>
          <details>
            <summary>Uploads</summary>
            <p>
              You must have authority to upload any document. Do not upload
              confidential, classified or sensitive information unless an agreed
              secure channel has been provided.
            </p>
          </details>
          <details>
            <summary>Contact</summary>
            <p>
              Alioth Digital Studios, 86–90 Paul Street, London EC2A 4NE, United
              Kingdom. Registered in England No. 14610211. Email:
              hello@aliothdigital.com.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
