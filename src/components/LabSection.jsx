import { SectionIntro } from "./SectionIntro";

export function LabSection({ isVisible = true, lab }) {
  return (
    <section
      className={`section lab-section ${isVisible ? "is-visible" : ""}`}
      id="mental-lab"
    >
      <div className="section-frame">
        <SectionIntro icon="lab" label={lab.intro} />

        <div className="section-heading">
          <h2>{lab.title}</h2>
          <p>{lab.description}</p>
        </div>

        <div className="lab-stream">
          {lab.entries.map((entry, index) => (
            <article
              className={`lab-entry lab-entry-${entry.tone} ${index % 2 === 1 ? "is-reversed" : ""}`}
              key={entry.title}
            >
              <div className="lab-head">
                <div className="entry-topline">
                  <span>{entry.experiment}</span>
                  <span>{entry.label}</span>
                </div>
                <p className="lab-entry-kicker">{entry.kicker}</p>
                <h3>{entry.title}</h3>
              </div>

              <div className="lab-visual" aria-label={entry.imageAlt}>
                {entry.image ? (
                  <img className="lab-visual-image" src={entry.image} alt={entry.imageAlt} />
                ) : null}
                <div className="lab-visual-frame">
                  <div className="lab-visual-grid" aria-hidden="true"></div>
                  <div className="lab-visual-orbit" aria-hidden="true"></div>
                  <div className="lab-visual-panel">
                    <span>{entry.previewTag}</span>
                    <strong>{entry.previewTitle}</strong>
                    <small>{entry.previewMeta}</small>
                  </div>
                </div>
              </div>

              <div className="lab-body">
                <p>{entry.text}</p>
                <div className="entry-points">
                  {entry.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>

              <div className="lab-foot">
                <div className="lab-tech-stack" aria-label={lab.stackLabel}>
                  {entry.stack.map((item) => (
                    <span className="lab-tech-chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="lab-actions">
                  <a className="button button-primary lab-action-primary" href={entry.primaryHref}>
                    {entry.primaryLabel}
                  </a>
                  <a
                    className="lab-github-link"
                    href={entry.repoHref}
                    aria-label={entry.repoLabel}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.86-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.83c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.56 1.41.21 2.45.11 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{entry.repoLabel}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
