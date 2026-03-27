import { SectionIntro } from "./SectionIntro";

export function LabSection({ isVisible, lab }) {
  return (
    <section
      className={`section lab-section ${isVisible ? "is-visible" : ""}`}
      id="mental-lab"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label={lab.intro} />

        <div className="section-heading">
          <h2>{lab.title}</h2>
          <p>{lab.description}</p>
        </div>

        <div className="lab-stream">
          {lab.entries.map((entry) => (
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
