import { SectionIntro } from "./SectionIntro";

export function IdentitySection({ identity, isVisible = true }) {
  return (
    <section
      className={`section identity-section ${isVisible ? "is-visible" : ""}`}
      id="core-identity"
    >
      <div className="section-frame">
        <SectionIntro icon="identity" label={identity.intro} />

        <div className="section-heading">
          <h2>{identity.title}</h2>
          <p>{identity.description}</p>
        </div>

        <div className="integral-list">
          {identity.rows.map((row) => (
            <article className="integral-row" key={row.index}>
              <span className="row-index">{row.index}</span>
              <h3>{row.title}</h3>
              <p>{row.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
