import { useEffect, useMemo, useState } from "react";
import { SectionIntro } from "./components/SectionIntro";
import {
  capabilities,
  identityRows,
  labEntries,
  navItems,
  signals,
} from "./content/portfolioContent";

function App() {
  const [activeSection, setActiveSection] = useState("mind-interface");
  const [visibleSections, setVisibleSections] = useState(() => new Set(["mind-interface"]));
  const [isTopbarStuck, setIsTopbarStuck] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          setVisibleSections((current) => {
            const next = new Set(current);
            next.add(entry.target.id);
            return next;
          });
          setActiveSection(entry.target.id);
        });
      },
      {
        threshold: 0.28,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const syncTopbar = () => {
      setIsTopbarStuck(window.scrollY > 64);
    };

    syncTopbar();
    window.addEventListener("scroll", syncTopbar, { passive: true });

    return () => window.removeEventListener("scroll", syncTopbar);
  }, []);

  return (
    <div className="site-shell">
      <div className={`topbar-shell ${isTopbarStuck ? "is-stuck" : ""}`}>
        <header className={`topbar ${isTopbarStuck ? "is-stuck" : ""}`}>
          <a className="brand" href="#mind-interface" aria-label="Go to home">
            <span className="brand-mark"></span>
            <span className="brand-copy">
              <strong>Emanuel Martinez</strong>
              <small>Neural Fullstack System</small>
            </span>
          </a>
          <nav className="topnav" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "is-active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      </div>

      <main>
        <section
          className={`section hero ${visibleSections.has("mind-interface") ? "is-visible" : ""}`}
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
                  systems-first mindset, sharp frontend execution, and backend
                  logic that stays clear under complexity.
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

        <section
          className={`section identity-section ${visibleSections.has("core-identity") ? "is-visible" : ""}`}
          id="core-identity"
          data-section
        >
          <div className="section-frame">
            <SectionIntro label="Core Identity" />

            <div className="section-heading">
              <h2>THE WAY I THINK IS THE PRODUCT I BRING TO A TEAM.</h2>
              <p>
                I like software that feels coherent end to end. The interface
                should guide action, the backend should stay predictable, and
                the release process should reduce friction instead of adding it.
              </p>
            </div>

            <div className="integral-list">
              {identityRows.map((row) => (
                <article className="integral-row" key={row.index}>
                  <span className="row-index">{row.index}</span>
                  <h3>{row.title}</h3>
                  <p>{row.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`section lab-section ${visibleSections.has("mental-lab") ? "is-visible" : ""}`}
          id="mental-lab"
          data-section
        >
          <div className="section-frame">
            <SectionIntro label="Mental Lab" />

            <div className="section-heading">
              <h2>EACH PROJECT IS A DEPLOYED THOUGHT PROCESS.</h2>
              <p>
                I do not present projects as screenshots. I present them as
                technical decisions translated into useful systems.
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

        <section
          className={`section stack-section ${visibleSections.has("neural-stack") ? "is-visible" : ""}`}
          id="neural-stack"
          data-section
        >
          <div className="section-frame">
            <SectionIntro label="Neural Stack" />

            <div className="section-heading">
              <h2>MY STACK IS ORGANIZED BY CAPABILITY, NOT BY LOGO COLLECTION.</h2>
              <p>
                I prefer technologies that help build coherent products,
                maintainable services, and dependable delivery cycles.
              </p>
            </div>

            <div className="capability-grid">
              {capabilities.map((capability) => (
                <article className="capability" key={capability.index}>
                  <span className="row-index">{capability.index}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className={`section signal-section ${visibleSections.has("signal-feed") ? "is-visible" : ""}`}
          id="signal-feed"
          data-section
        >
          <div className="section-frame">
            <SectionIntro label="Signal Feed" />

            <div className="section-heading">
              <h2>TECHNICAL CREDIBILITY SHOULD BE VISIBLE, NOT IMPLIED.</h2>
              <p>
                These are the quality signals I care about when building
                software and the standards I aim to bring into every team.
              </p>
            </div>

            <div className="integral-list">
              {signals.map((signal) => (
                <article className="integral-row" key={signal.index}>
                  <span className="row-index">{signal.index}</span>
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </article>
              ))}
            </div>

            <div className="current-state">
              <span className="signal-label">Current State</span>
              <h3>Actively sharpening fullstack depth.</h3>
              <p>
                Focused on building stronger product systems, improving frontend
                precision, and writing backend code that scales with confidence.
              </p>
            </div>
          </div>
        </section>

        <section
          className={`section contact-section ${visibleSections.has("connection-protocol") ? "is-visible" : ""}`}
          id="connection-protocol"
          data-section
        >
          <div className="section-frame">
            <SectionIntro label="Connection Protocol" />

            <div className="section-heading">
              <h2>LOOKING FOR A FULLSTACK DEVELOPER WHO THINKS BEYOND ISOLATED TASKS.</h2>
              <p>
                I am interested in product teams where technical quality,
                thoughtful execution, and long-term growth matter.
              </p>
            </div>

            <div className="contact-grid">
              <div>
                <span className="signal-label">Preferred Channel</span>
                <a className="contact-link" href="mailto:emanuel@example.com">
                  emanuel@example.com
                </a>
              </div>
              <div>
                <span className="signal-label">Hiring Context</span>
                <p>Frontend-heavy fullstack roles, product teams, growth environments.</p>
              </div>
              <div>
                <span className="signal-label">Availability</span>
                <p>Open to new opportunities and technical conversations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
