import { SectionIntro } from "./SectionIntro";

export function StackSection({ isVisible, stack }) {
  return (
    <section
      className={`section stack-section ${isVisible ? "is-visible" : ""}`}
      id="neural-stack"
      data-section
    >
      <div className="section-frame">
        <SectionIntro icon="stack" label={stack.intro} />

        <div className="section-heading">
          <h2>{stack.title}</h2>
          <p>{stack.description}</p>
        </div>

        <div className="capability-grid">
          {stack.capabilities.map((capability) => (
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
