import { SectionIntro } from "./SectionIntro";

export function HeroSection({ isVisible }) {
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
        <SectionIntro label="Mind Interface" />

        <div className="hero-main">
          <div className="hero-title-block">
            <p className="microcopy">Neural entry point</p>
            <h1>
              EMANUEL&apos;S
              <br />
              FULLSTACK
              <br />
              SIGNAL
            </h1>
          </div>

          <div className="hero-side">
            <p className="subhero">
              A futuristic portfolio engineered to feel like a live system.
            </p>
            <p className="lede">
              I build web products from interface to infrastructure with a
              systems-first mindset, sharp frontend execution, and backend logic
              that stays clear under complexity.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#mental-lab">
                Enter Mental Lab
              </a>
              <a className="button button-ghost" href="#connection-protocol">
                Open Hiring Channel
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-tail signal-strip" aria-label="Profile highlights">
        <div>
          <span className="signal-label">Current Role</span>
          <p>Fullstack Product Builder</p>
        </div>
        <div>
          <span className="signal-label">Primary Focus</span>
          <p>Scalable web systems and polished UX</p>
        </div>
        <div>
          <span className="signal-label">Operating Mode</span>
          <p>Interface, logic, data, deployment</p>
        </div>
      </div>
    </section>
  );
}
