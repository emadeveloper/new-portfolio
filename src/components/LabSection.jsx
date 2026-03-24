import { SectionIntro } from "./SectionIntro";

export function LabSection({ isVisible, labEntries }) {
  return (
    <section
      className={`section lab-section ${isVisible ? "is-visible" : ""}`}
      id="mental-lab"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label="Mental Lab" />

        <div className="section-heading">
          <h2>EACH PROJECT IS A DEPLOYED THOUGHT PROCESS.</h2>
          <p>
            I do not present projects as screenshots. I present them as technical
            decisions translated into useful systems.
          </p>
        </div>

        <div className="lab-stream">
          {labEntries.map((entry) => (
            <article className="lab-entry" key={entry.title}>
              <div className="entry-topline">
                <span>{entry.experiment}</span>
                <span>{entry.label}</span>
              </div>
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
              <div className="entry-points">
                {entry.points.map((point) => (
                  <p key={point}>{point}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
