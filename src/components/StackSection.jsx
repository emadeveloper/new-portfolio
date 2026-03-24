import { SectionIntro } from "./SectionIntro";

export function StackSection({ capabilities, isVisible }) {
  return (
    <section
      className={`section stack-section ${isVisible ? "is-visible" : ""}`}
      id="neural-stack"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label="Neural Stack" />

        <div className="section-heading">
          <h2>MY STACK IS ORGANIZED BY CAPABILITY, NOT BY LOGO COLLECTION.</h2>
          <p>
            I prefer technologies that help build coherent products, maintainable
            services, and dependable delivery cycles.
          </p>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability" key={capability.index}>
              <span className="row-index">{capability.index}</span>
              <h3>{capability.title}</h3>
              <p>{capability.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
