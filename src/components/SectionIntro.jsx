export function SectionIntro({ label }) {
  return (
    <div className="section-intro">
      <span className="intro-line"></span>
      <p className="eyebrow">{label}</p>
      <span className="intro-line"></span>
    </div>
  );
}
