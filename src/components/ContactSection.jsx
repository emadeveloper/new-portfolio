import { SectionIntro } from "./SectionIntro";

export function ContactSection({ contact, isVisible }) {
  return (
    <section
      className={`section contact-section ${isVisible ? "is-visible" : ""}`}
      id="connection-protocol"
      data-section
    >
      <div className="section-frame">
        <SectionIntro label={contact.intro} />

        <div className="section-heading">
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
        </div>

        <div className="contact-grid">
          {contact.items.map((item) => (
            <div key={item.label}>
              <span className="signal-label">{item.label}</span>
              {item.href ? (
                <a className="contact-link" href={item.href}>
                  {item.text}
                </a>
              ) : (
                <p>{item.text}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
