import { SectionIntro } from "./SectionIntro";

export function HeroSection({ hero, isVisible }) {
  return (
    <section
      className={`section hero ${isVisible ? "is-visible" : ""}`}
      id="mind-interface"
      data-section
    >
      <div className="section-frame">
        <div className="section-ornament section-ornament-left" aria-hidden="true"></div>
        <div className="section-ornament section-ornament-right" aria-hidden="true"></div>
        <div className="hero-brain" aria-hidden="true">
          <span className="brain-orbit brain-orbit-1"></span>
          <span className="brain-orbit brain-orbit-2"></span>
          <span className="brain-core"></span>
          <span className="brain-node brain-node-1"></span>
          <span className="brain-node brain-node-2"></span>
          <span className="brain-node brain-node-3"></span>
          <span className="brain-node brain-node-4"></span>
          <span className="brain-node brain-node-5"></span>
        </div>
        <SectionIntro label={hero.intro} />

        <div className="hero-main">
          <div className="hero-title-block">
            <p className="microcopy">{hero.microcopy}</p>
            <h1>
              {hero.title[0]}
              <br />
              {hero.title[1]}
              <br />
              {hero.title[2]}
            </h1>
          </div>

          <div className="hero-side">
            <p className="subhero">{hero.subhero}</p>
            <p className="lede">{hero.lede}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#mental-lab">
                {hero.primaryCta}
              </a>
              <a className="button button-ghost" href="#connection-protocol">
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-tail signal-strip" aria-label={hero.highlightsLabel}>
        {hero.highlights.map((highlight) => (
          <div key={highlight.label}>
            <span className="signal-label">{highlight.label}</span>
            <p>{highlight.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
