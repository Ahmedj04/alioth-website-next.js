import type { CSSProperties } from "react";

interface ApmpCertificateProps {
  className?: string;
  style?: CSSProperties;
}

export default function ApmpCertificate({className, style}: ApmpCertificateProps) {
    return (
        <>
            <section className={`${className || ""}`} style={style}>
                <div className="container apmp-spotlight-inner">
                    <div className="apmp-badge-wrap">
                        <img
                            src="/images/apmp-certificate.png"
                            alt="APMP Certified Member"
                            className="apmp-badge-large"
                        />
                    </div>
                    <div className="apmp-spotlight-text">
                        <span className="apmp-tag">Quality Assurance & Methodology</span>
                        <h2>Grounded in APMP best-practice standards.</h2>
                        <p>
                            Every bid strategy, compliance matrix, and proposal response follows the
                            globally recognised Association of Proposal Management Professionals framework
                            to ensure evaluation-focused, compliant submissions.
                        </p>
                        <div className="apmp-points">
                            <span>Verified proposal processes</span>
                            <span>•</span>
                            <span>Evidence-based scoring logic</span>
                            <span>•</span>
                            <span>Strict compliance control</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="apmp-split-section">
        <div className="container">
          <div className="apmp-split-header">
            <span className="apmp-split-kicker">Governance & Standard</span>
            <h2>Certified APMP Delivery Architecture</h2>
            <p>
              Every tender response runs against the globally recognised Association of Proposal Management Professionals framework.
            </p>
          </div>

          <div className="apmp-split-core">
            <div className="apmp-split-col left">
              <div className="apmp-split-card">
                <h4>Opportunity Qualification</h4>
                <p>Strict bid/no-bid gating to protect delivery resources and strategic viability.</p>
              </div>
              <div className="apmp-split-card">
                <h4>Compliance Matrixing</h4>
                <p>Requirement-by-requirement tracking aligned to public and private sector evaluation criteria.</p>
              </div>
            </div>

            <div className="apmp-center-pedestal">
              <div className="pedestal-card">
                <img
                  src="/images/apmp-certificate.png"
                  alt="APMP Certified Member Seal"
                  className="apmp-split-badge"
                />
              </div>
              <span className="pedestal-label">Verified APMP Practitioner</span>
            </div>

            <div className="apmp-split-col right">
              <div className="apmp-split-card">
                <h4>Evidence Architecture</h4>
                <p>Substantiated proof points, case studies, and metrics drafted to meet buyer priorities.</p>
              </div>
              <div className="apmp-split-card">
                <h4>Final Red-Team QA</h4>
                <p>Pre-submission scoring reviews run against actual buyer marking schemes.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}


            {/* <section className="apmp-feature">
        <div className="container">
          <div className="apmp-feature-frame">
            <div className="apmp-plaque-col">
              <div className="apmp-plaque">
                <div className="plaque-corner top-left" aria-hidden="true" />
                <div className="plaque-corner bottom-right" aria-hidden="true" />
                <img
                  src="/images/apmp-certificate.png"
                  alt="APMP Certification Seal"
                  className="apmp-hero-badge"
                />
              </div>
            </div>

            <div className="apmp-body-col">
              <div className="apmp-kicker-row">
                <span className="apmp-stamp">Official Standard</span>
                <span className="apmp-id">ID: Practitioner-Grade Governance</span>
              </div>

              <h2>Built on APMP Bid Governance</h2>
              <p>
                We operate directly under the Association of Proposal Management
                Professionals body of knowledge. That means systematic win-strategy design,
                verifiable compliance matrices, and gate reviews built directly into every submission.
              </p>

              <div className="apmp-metrics-row">
                <div className="apmp-metric">
                  <strong>100%</strong>
                  <span>Compliant gating structure</span>
                </div>
                <div className="apmp-metric-divider" aria-hidden="true" />
                <div className="apmp-metric">
                  <strong>Zero</strong>
                  <span>Unsubstantiated claims</span>
                </div>
                <div className="apmp-metric-divider" aria-hidden="true" />
                <div className="apmp-metric">
                  <strong>UK</strong>
                  <span>Public & private procurement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

        </>

    )
}