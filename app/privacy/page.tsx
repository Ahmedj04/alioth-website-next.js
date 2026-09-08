import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | AliothDigital",
  description:
    "How AliothDigital handles personal information, website data and privacy.",
  alternates: { canonical: "/privacy" },
  robots: "index,follow",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Privacy</span>
          </nav>
        </div>
        <div className="container">
          <span className="eyebrow">Legal</span>
          <h1>
            Privacy
            <br />
            <span className="accent">Policy.</span>
          </h1>
          <p>
            Plain-English information about how this website handles enquiry and
            tender-upload information.
          </p>
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
            <summary>What information do we collect?</summary>
            <p>
              Information you choose to submit through enquiry and tender forms,
              such as name, company information, email, phone, message, deadline
              and any attachment you choose to upload.
            </p>
          </details>
          <details>
            <summary>Why do we use it?</summary>
            <p>
              To respond to enquiries, assess opportunities, provide requested
              services and operate the website. We do not sell enquiry
              information.
            </p>
          </details>
          <details>
            <summary>Tender uploads</summary>
            <p>
              Tender files are sent to the AliothDigital business email through
              the configured form provider. Only upload documents you are
              authorised to share. Do not upload classified information,
              passwords, payment credentials or unnecessary special-category
              personal data.
            </p>
          </details>
          <details>
            <summary>Cookies and local storage</summary>
            <p>
              This site does not require advertising or analytics cookies. A
              small essential local-storage preference may be used to remember
              that the cookie notice has been dismissed.
            </p>
          </details>
          <details>
            <summary>Third parties</summary>
            <p>
              Website forms currently use FormSubmit to transmit enquiries.
              Review the provider's current privacy and security terms before
              production deployment and replace the form endpoint if your
              production workflow changes.
            </p>
          </details>
          <details>
            <summary>Your rights</summary>
            <p>
              Depending on applicable UK data-protection law, you may have
              rights relating to access, correction, deletion, restriction and
              objection. Contact hello@aliothdigital.com for privacy enquiries.
            </p>
          </details>
        </div>
      </section>
    </>
  );
}
