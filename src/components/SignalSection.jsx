import { SectionIntro } from "./SectionIntro";

export function SignalSection({ isVisible, signals }) {
  return (
    <section
      className={`section signal-section ${isVisible ? "is-visible" : ""}`}
      id="signal-feed"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label="Signal Feed" />

        <div className="section-heading">
          <h2>TECHNICAL CREDIBILITY SHOULD BE VISIBLE, NOT IMPLIED.</h2>
          <p>
            These are the quality signals I care about when building software and
            the standards I aim to bring into every team.
          </p>
        </div>

        <div className="integral-list">
          {signals.map((signal) => (
            <article className="integral-row" key={signal.index}>
              <span className="row-index">{signal.index}</span>
              <h3>{signal.title}</h3>
              <p>{signal.text}</p>
            </article>
          ))}
        </div>

        <div className="current-state">
          <span className="signal-label">Current State</span>
          <h3>Actively sharpening fullstack depth.</h3>
          <p>
            Focused on building stronger product systems, improving frontend
            precision, and writing backend code that scales with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}
