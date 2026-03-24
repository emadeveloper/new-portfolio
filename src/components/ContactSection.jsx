import { SectionIntro } from "./SectionIntro";

export function ContactSection({ isVisible }) {
  return (
    <section
      className={`section contact-section ${isVisible ? "is-visible" : ""}`}
      id="connection-protocol"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label="Connection Protocol" />

        <div className="section-heading">
          <h2>LOOKING FOR A FULLSTACK DEVELOPER WHO THINKS BEYOND ISOLATED TASKS.</h2>
          <p>
            I am interested in product teams where technical quality, thoughtful
            execution, and long-term growth matter.
          </p>
        </div>

        <div className="contact-grid">
          <div>
            <span className="signal-label">Preferred Channel</span>
            <a className="contact-link" href="mailto:emanuel@example.com">
              emanuel@example.com
            </a>
          </div>
          <div>
            <span className="signal-label">Hiring Context</span>
            <p>Frontend-heavy fullstack roles, product teams, growth environments.</p>
          </div>
          <div>
            <span className="signal-label">Availability</span>
            <p>Open to new opportunities and technical conversations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
