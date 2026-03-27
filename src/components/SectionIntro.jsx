import { sectionIcons } from "./sectionIcons";

export function SectionIntro({ icon, label }) {
  const Icon = sectionIcons[icon];

  return (
    <div className="section-intro">
      <span className="intro-line"></span>
      <p className="eyebrow">
        {Icon ? <Icon className="section-intro-icon" aria-hidden="true" strokeWidth={1.8} /> : null}
        <span>{label}</span>
      </p>
      <span className="intro-line"></span>
    </div>
  );
}
