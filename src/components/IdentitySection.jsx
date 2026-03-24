import { SectionIntro } from "./SectionIntro";

export function IdentitySection({ isVisible, identityRows }) {
  return (
    <section
      className={`section identity-section ${isVisible ? "is-visible" : ""}`}
      id="core-identity"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label="Core Identity" />

        <div className="section-heading">
          <h2>THE WAY I THINK IS THE PRODUCT I BRING TO A TEAM.</h2>
          <p>
            I like software that feels coherent end to end. The interface should
            guide action, the backend should stay predictable, and the release
            process should reduce friction instead of adding it.
          </p>
        </div>

        <div className="integral-list">
          {identityRows.map((row) => (
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
