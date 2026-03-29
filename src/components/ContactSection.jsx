import { Mail, Network, SendHorizontal, UserRound } from "lucide-react";
import { SectionIntro } from "./SectionIntro";

export function ContactSection({ contact, isVisible = true }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const sender = String(formData.get("sender") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const mission = String(formData.get("mission") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const subject = `${contact.form.mailSubjectPrefix} ${sender || mission || "Signal"}`;
    const body = [
      `${contact.form.bodyLabels.sender}: ${sender}`,
      `${contact.form.bodyLabels.email}: ${email}`,
      `${contact.form.bodyLabels.mission}: ${mission}`,
      "",
      `${contact.form.bodyLabels.message}:`,
      message,
    ].join("\n");

    window.location.href = `mailto:${contact.form.targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      className={`section contact-section ${isVisible ? "is-visible" : ""}`}
      id="connection-protocol"
    >
      <div className="section-frame">
        <SectionIntro icon="contact" label={contact.intro} />

        <div className="section-heading">
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
        </div>

        <div className="contact-channel-grid">
          {contact.items.map((item) => (
            <article className="contact-channel" key={item.label}>
              <span className="signal-label">{item.label}</span>
              {item.href ? (
                <a className="contact-link" href={item.href}>
                  {item.text}
                </a>
              ) : (
                <p>{item.text}</p>
              )}
            </article>
          ))}
        </div>

        <div className="contact-transmission-shell">
          <div className="contact-transmission-panel">
            <div className="contact-transmission-intro">
              <span className="signal-label">{contact.form.panelLabel}</span>
              <h3>{contact.form.title}</h3>
              <p>{contact.form.description}</p>
            </div>

            <div className="contact-transmission-markers" aria-label={contact.form.markersLabel}>
              {contact.form.markers.map((marker) => (
                <span className="contact-transmission-marker" key={marker}>
                  {marker}
                </span>
              ))}
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-grid">
                <label className="contact-field">
                  <span className="contact-field-label">
                    <UserRound aria-hidden="true" strokeWidth={1.8} />
                    {contact.form.fields.sender.label}
                  </span>
                  <input
                    name="sender"
                    type="text"
                    placeholder={contact.form.fields.sender.placeholder}
                    required
                  />
                </label>

                <label className="contact-field">
                  <span className="contact-field-label">
                    <Mail aria-hidden="true" strokeWidth={1.8} />
                    {contact.form.fields.email.label}
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder={contact.form.fields.email.placeholder}
                    required
                  />
                </label>

                <label className="contact-field contact-field-full">
                  <span className="contact-field-label">
                    <Network aria-hidden="true" strokeWidth={1.8} />
                    {contact.form.fields.mission.label}
                  </span>
                  <input
                    name="mission"
                    type="text"
                    placeholder={contact.form.fields.mission.placeholder}
                    required
                  />
                </label>

                <label className="contact-field contact-field-full">
                  <span className="contact-field-label">
                    <SendHorizontal aria-hidden="true" strokeWidth={1.8} />
                    {contact.form.fields.message.label}
                  </span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder={contact.form.fields.message.placeholder}
                    required
                  ></textarea>
                </label>
              </div>

              <div className="contact-form-footer">
                <p>{contact.form.helper}</p>
                <button className="button button-primary contact-submit" type="submit">
                  {contact.form.submitLabel}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
