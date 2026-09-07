import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bid & Tender Management | AliothDigital",
  description:
    "UK bid and tender management covering tender analysis, proposal development, response writing, compliance, QA and submission readiness.",
  alternates: { canonical: "/proposal-development" },
  robots: "index,follow",
};

export default function ProposalDevelopmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Bid & Tender Management</span>
          </nav>
        </div>
        <div className="container">
          <span className="eyebrow">COMPETE · Bid & Tender Management</span>
          <h1>
            Make the opportunity
            <br />
            <span className="accent">easier to compete.</span>
          </h1>
          <p>
            We help UK organisations understand the requirement, build a
            response strategy, develop persuasive proposal content and get the
            submission ready — without turning the process into a black box.
          </p>
          <div className="hero-actions">
            <Link className="btn primary" href="/contact#upload">
              Upload your tender →
            </Link>
            <button className="btn ghost" data-meeting="">
              Start a bid conversation ↗
            </button>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container service-layout">
          <div className="service-sticky">
            <span className="kicker">What we do</span>
            <h2>From tender pack to submission.</h2>
            <p>
              Bring the documents. We help turn requirements into a clear plan,
              a consistent response and a submission you can stand behind.
            </p>
            <Link className="btn dark" href="/contact#upload">
              Send an opportunity →
            </Link>
          </div>
          <div>
            <div className="service-block">
              <h3>Opportunity & bid/no-bid support</h3>
              <p>
                Assess fit, capability, effort, risk, evidence and strategic
                value before you commit serious resource.
              </p>
            </div>
            <div className="service-block">
              <h3>Tender review & compliance mapping</h3>
              <p>
                Extract instructions, mandatory requirements, evaluation
                criteria, deadlines and response structure into a practical
                working view.
              </p>
            </div>
            <div className="service-block">
              <h3>Proposal development</h3>
              <p>
                Develop clear, evidence-led responses around the buyer's
                requirements, evaluation logic, compete themes and your actual
                capability.
              </p>
            </div>
            <div className="service-block">
              <h3>Bid coordination</h3>
              <p>
                Bring subject-matter experts into one response story, manage
                inputs, review points and version control.
              </p>
            </div>
            <div className="service-block">
              <h3>Final QA & submission readiness</h3>
              <p>
                Check compliance, consistency, formatting, evidence, page limits
                and obvious submission risks before the deadline.
              </p>
            </div>
            <div className="service-block">
              <h3>Frameworks, PQQs, SQs & supplier responses</h3>
              <p>
                Support can be adapted to the procurement format and the
                evidence you actually have available.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section dark">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">Who we can write for</span>
              <h2 className="title">UK opportunities across sectors.</h2>
            </div>
            <p>
              We can develop proposals for organisations pursuing opportunities
              across public, private and third-sector procurement. We do not
              invent experience or evidence — we build the strongest response
              from what you can genuinely substantiate.
            </p>
          </div>
          <div className="sector-grid">
            <div className="sector reveal">
              <b>NHS & Healthcare</b>
              <span>
                Healthcare services, medical suppliers, clinical support,
                biomedical, facilities and health technology.
              </span>
            </div>
            <div className="sector reveal">
              <b>Government</b>
              <span>
                Central government, agencies and public-sector supplier
                opportunities.
              </span>
            </div>
            <div className="sector reveal">
              <b>Local Authorities</b>
              <span>
                Council services, local delivery, housing and community
                programmes.
              </span>
            </div>
            <div className="sector reveal">
              <b>Education</b>
              <span>
                Schools, colleges, universities and education-sector suppliers.
              </span>
            </div>
            <div className="sector reveal">
              <b>Construction & Infrastructure</b>
              <span>
                Engineering, maintenance, facilities, construction and
                built-environment services.
              </span>
            </div>
            <div className="sector reveal">
              <b>Technology</b>
              <span>
                Software, SaaS, IT, cybersecurity, data and digital
                transformation.
              </span>
            </div>
            <div className="sector reveal">
              <b>Professional Services</b>
              <span>
                Consultancy, finance, legal, HR, marketing and specialist
                business services.
              </span>
            </div>
            <div className="sector reveal">
              <b>Charities & Third Sector</b>
              <span>
                Funded services, commissioned programmes and mission-led
                contracts.
              </span>
            </div>
            <div className="sector reveal">
              <b>Other UK procurement</b>
              <span>
                Tell us what you are bidding for and we'll assess whether we can
                help.
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section paper2">
        <div className="container">
          <div className="section-head">
            <div>
              <span className="kicker">The working method</span>
              <h2 className="title">
                Clear work. Clear ownership. Clear next steps.
              </h2>
            </div>
            <p>
              We keep the process visible so your team knows what is needed and
              when.
            </p>
          </div>
          <div className="process">
            <div className="step">
              <b>01</b>
              <h3>Read</h3>
              <p>Understand the tender before deciding how to respond.</p>
            </div>
            <div className="step">
              <b>02</b>
              <h3>Map</h3>
              <p>
                Turn requirements and evaluation criteria into a working plan.
              </p>
            </div>
            <div className="step">
              <b>03</b>
              <h3>Write</h3>
              <p>
                Build the response around evidence, relevance and buyer
                priorities.
              </p>
            </div>
            <div className="step">
              <b>04</b>
              <h3>Check</h3>
              <p>Quality assurance, compliance and submission readiness.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
