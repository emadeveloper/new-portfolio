import { SectionIntro } from "./SectionIntro";

export function SignalSection({ isVisible, signal }) {
  return (
    <section
      className={`section signal-section ${isVisible ? "is-visible" : ""}`}
      id="signal-feed"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label={signal.intro} />

        <div className="section-heading">
          <h2>{signal.title}</h2>
          <p>{signal.description}</p>
        </div>

        <div className="integral-list">
          {signal.items.map((item) => (
            <article className="integral-row" key={item.index}>
              <span className="row-index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="current-state">
          <span className="signal-label">{signal.currentState.label}</span>
          <h3>{signal.currentState.title}</h3>
          <p>{signal.currentState.text}</p>
        </div>
      </div>
    </section>
  );
}
