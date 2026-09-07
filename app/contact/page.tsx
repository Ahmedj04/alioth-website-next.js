import Link from "next/link";
import type { Metadata } from "next";
import { Suspense } from "react";
import RoutePreselect from "@/components/RoutePreselect";

export const metadata: Metadata = {
  title: "Contact AliothDigital | London",
  description: "Talk to AliothDigital in London about a tender, hiring need, digital project, software or IT requirement.",
  alternates: { canonical: "/contact" },
  robots: "index,follow",
};

export default function ContactPage() {
  return (
    <>
<section className="page-hero">
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>Contact</span></nav>
      </div>
      <div className="container"><span className="eyebrow">Start here</span>
        <h1>Tell us what<br /><span className="accent">needs doing.</span></h1>
        <p>Bring a tender, a role, a website problem or the question you are trying to answer. We'll take it from there.
        </p>
      </div><button className="btn ghost" data-meeting="">Start a meeting ↗</button>
      <Suspense fallback={null}><RoutePreselect /></Suspense>
    </section>
    <section className="section">
      <div className="container" style={{display: 'grid', gridTemplateColumns: '.75fr 1.25fr', gap: '70px'}}>
        <div><span className="kicker">A useful first conversation</span>
          <h2 className="title">No sales maze.</h2>
          <p className="muted">Email us directly or use the form. For tenders, the upload route below is usually the fastest
            way to give us context.</p>
          <p><strong>Email</strong><br /><a href="mailto:hello@aliothdigital.com">hello@aliothdigital.com</a></p>
          <p><strong>Address</strong><br />86–90 Paul Street<br />London EC2A 4NE<br />United Kingdom</p>
          <p className="muted"><strong>Office hours</strong><br />Mon–Fri: 9am–6pm<br />Sat: 10am–2pm<br />Sun: Closed</p>
          <div style={{border: '1px solid var(--line)', padding: '16px', fontSize: '.8rem', color: 'var(--muted)'}}>Please do not send
            classified information or sensitive personal data through a website form.</div>
        </div>
        <div>
          <form action="https://formsubmit.co/hello@aliothdigital.com" className="form" data-validate=""
            encType="multipart/form-data" method="POST">
            <input name="_subject" type="hidden" defaultValue="AliothDigital website enquiry" />
            <input name="_captcha" type="hidden" defaultValue="false" />
            <input name="_template" type="hidden" defaultValue="table" />
            <input name="_next" type="hidden" defaultValue="https://aliothdigital.com/thank-you.html" />
            <input autoComplete="off" name="_honey" style={{display: 'none'}} tabIndex={-1} type="text" />
            <div className="form-grid">
              <div className="field"><label htmlFor="first">First name *</label><input id="first" name="first_name"
                  required /></div>
              <div className="field"><label htmlFor="last">Last name</label><input id="last" name="last_name" /></div>
            </div>
            <div className="form-grid">
              <div className="field"><label htmlFor="email">Email *</label><input id="email" name="email" required
                  type="email" /></div>
              <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" /></div>
            </div>
            <div className="field"><label htmlFor="route">What can we help with? *</label><select id="route" name="route"
                required>
                <option value="">Select a route</option>
                <option>COMPETE — Proposal / Bid</option>
                <option>BUILD — Recruitment / Staffing</option>
                <option>GROW — Digital / Marketing</option>
                <option>Something else</option>
              </select></div>
            <div className="field"><label htmlFor="message">Tell us what is happening *</label><textarea id="message"
                name="message"
                placeholder="A few lines is enough. Include the deadline if this is a tender or the role if this is recruitment."
                required></textarea></div><button className="btn dark" type="submit">Send enquiry →</button>
            <p className="muted" style={{fontSize: '.76rem'}}>By submitting, you agree that AliothDigital can use the
              information to respond to your enquiry. See our <Link href="/privacy"><u>privacy notice</u></Link>.</p>
          </form>
        </div>
      </div>
    </section>
    <section className="section dark" id="upload">
      <div className="container">
        <div className="upload-layout">
          <div><span className="kicker">COMPETE · Upload a tender</span>
            <h2 className="title">Send the opportunity, not a sales pitch.</h2>
            <p style={{color: '#b6c1c6', maxWidth: '580px'}}>Upload an RFP, ITT, tender pack, framework document or scope. Tell
              us the deadline and what you want help with. The form sends the attachment to our business email through
              FormSubmit.</p>
            <p style={{color: '#8f9da3', fontSize: '.8rem'}}>Maximum 15 MB. Accepted: PDF, DOC, DOCX, XLS, XLSX, ZIP. Do not
              upload classified material, special-category personal data or information you are not authorised to share.
            </p>
          </div>
          <form action="https://formsubmit.co/hello@aliothdigital.com" className="form" data-validate=""
            encType="multipart/form-data" method="POST"><input name="_subject" type="hidden"
              defaultValue="Tender upload — AliothDigital" /><input name="_captcha" type="hidden" defaultValue="false" /><input name="_template" type="hidden" defaultValue="table" /><input name="_next" type="hidden"
              defaultValue="https://aliothdigital.com/thank-you.html" /><input autoComplete="off" name="_honey"
              style={{display: 'none'}} tabIndex={-1} type="text" />
            <div className="field"><label htmlFor="tenderName">Name *</label><input id="tenderName" name="name" required />
            </div>
            <div className="field"><label htmlFor="tenderEmail">Email *</label><input id="tenderEmail" name="email" required
                type="email" /></div>
            <div className="field"><label htmlFor="deadline">Tender deadline</label><input id="deadline" name="deadline"
                type="date" /></div>
            <div className="field"><label htmlFor="tenderFile">Tender file *</label><input accept=".pdf,.doc,.docx,.xls,.xlsx,.zip" id="tenderFile" name="attachment" required type="file" />
              <div className="file-note" id="fileName">No file selected.</div>
            </div><button className="btn primary" type="submit">Upload tender →</button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
