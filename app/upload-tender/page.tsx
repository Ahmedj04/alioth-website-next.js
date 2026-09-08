import Link from "next/link";
import type { Metadata } from "next";
import TenderFileInput from "@/components/TenderFileInput";

export const metadata: Metadata = {
  title: "Upload a Tender | AliothDigital",
  description:
    "Upload a tender pack to AliothDigital for an initial review and a practical conversation about how we can help.",
  alternates: { canonical: "/upload-tender" },
  robots: "index,follow",
};

export default function UploadTenderPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Upload Tender</span>
          </nav>
        </div>
        <div className="container">
          <span className="eyebrow">COMPETE · Send the opportunity</span>
          <h1>
            Have a tender?
            <br />
            <span className="accent">Send it over.</span>
          </h1>
          <p>
            You don't need to write the perfect email first. Upload the
            opportunity, give us the deadline and tell us what you need help
            with.
          </p>
          <div className="hero-actions">
            <button className="btn ghost" data-meeting="">
              Start a meeting ↗
            </button>
          </div>
        </div>
      </section>
      <section className="section">
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: ".8fr 1.2fr",
            gap: "70px",
          }}
        >
          <div>
            <span className="kicker">What happens next</span>
            <h2 className="title">We start with the documents.</h2>
            <div className="process" style={{ marginTop: "35px" }}>
              <div className="step">
                <b>01</b>
                <h3>Review</h3>
                <p>We look at the opportunity, requirements and deadline.</p>
              </div>
              <div className="step">
                <b>02</b>
                <h3>Understand</h3>
                <p>
                  We identify what needs answering and what evidence matters.
                </p>
              </div>
              <div className="step">
                <b>03</b>
                <h3>Respond</h3>
                <p>
                  We come back with practical next steps and the best route.
                </p>
              </div>
            </div>
          </div>
          <form
            className="form"
            action="https://formsubmit.co/hello@aliothdigital.com"
            method="POST"
            encType="multipart/form-data"
            data-validate
          >
            <input
              type="hidden"
              name="_subject"
              defaultValue="Tender upload — AliothDigital"
            />
            <input type="hidden" name="_captcha" defaultValue="false" />
            <input type="hidden" name="_template" defaultValue="table" />
            <input
              type="hidden"
              name="_next"
              defaultValue="https://aliothdigital.com/thank-you.html"
            />
            <input
              type="text"
              name="_honey"
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name *</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="company">Organisation</label>
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                />
              </div>
            </div>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
            </div>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="deadline">Tender deadline</label>
                <input id="deadline" name="deadline" type="date" />
              </div>
              <div className="field">
                <label htmlFor="route">What do you need?</label>
                <select id="route" name="route">
                  <option>Proposal development</option>
                  <option>Bid management</option>
                  <option>Compliance / QA</option>
                  <option>Not sure yet</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="sector">Sector</label>
              <select id="sector" name="sector">
                <option>NHS / Healthcare</option>
                <option>Central Government</option>
                <option>Local Government</option>
                <option>Education</option>
                <option>Housing / Social Care</option>
                <option>Construction / Infrastructure</option>
                <option>Technology / Professional Services</option>
                <option>Charity / Third Sector</option>
                <option>Other</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Anything we should know?</label>
              <textarea
                id="message"
                name="message"
                placeholder="A few lines is enough. Tell us what matters, where you're stuck or what you'd like us to handle."
              ></textarea>
            </div>
            <div className="field">
              <label htmlFor="tenderFile">Tender documents *</label>
              <input
                id="tenderFile"
                name="attachment"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.zip"
                required
              />
              <div className="file-note" id="fileName">
                PDF, DOC, DOCX, XLS, XLSX or ZIP · max 15 MB.
              </div>
            </div>
            <TenderFileInput />
            <button className="btn dark" type="submit">
              Send the tender ↗
            </button>
            <p className="muted" style={{ fontSize: ".74rem" }}>
              Please only upload material you are authorised to share. Do not
              send classified material or sensitive personal data. By
              submitting, you agree that AliothDigital can use the information
              to respond to your enquiry.
            </p>
          </form>
        </div>
      </section>
      <section className="section paper2">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Need to talk first?</span>
              <h2 className="title">That's fine.</h2>
            </div>
            <p>
              Use the meeting button and choose COMPETE, BUILD, GROW or JUST
              TALK. No polished brief required.
            </p>
          </div>
          <button className="btn dark" data-meeting>
            Start a meeting ↗
          </button>
        </div>
      </section>
    </>
  );
}
