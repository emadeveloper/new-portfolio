import { Menu, X } from "lucide-react";
import { useState } from "react";
import { sectionIconById } from "./sectionIcons";

export function Navbar({
  activeSection,
  isTopbarStuck,
  language,
  navbar,
  navItems,
  onToggleLanguage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={`topbar2-shell ${isTopbarStuck ? "is-stuck" : ""}`}>
      <header className={`topbar2 ${isTopbarStuck ? "is-stuck" : ""}`}>
        <div className="topbar2-rail">
          <a
            className="topbar2-brand"
            href="#mind-interface"
            aria-label="Go to home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="topbar2-brand-core" aria-hidden="true"></span>
            <span className="topbar2-brand-copy">{navbar.brand}</span>
          </a>

          <nav
            className={`topbar2-nav ${isMenuOpen ? "is-open" : ""}`}
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const Icon = sectionIconById[item.id];

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "is-active" : ""}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {Icon ? (
                    <Icon
                      className="topbar2-nav-icon"
                      aria-hidden="true"
                      strokeWidth={1.8}
                    />
                  ) : null}
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="topbar2-controls">
            <button
              type="button"
              className="language-toggle"
              onClick={onToggleLanguage}
              aria-label={navbar.toggleLabel}
            >
              <span className={language === "es" ? "" : "is-active"}>
                {navbar.languages.en}
              </span>
              <span className="language-toggle-divider" aria-hidden="true"></span>
              <span className={language === "es" ? "is-active" : ""}>
                {navbar.languages.es}
              </span>
            </button>

            <button
              type="button"
              className="topbar2-menu-toggle"
              aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" strokeWidth={1.8} />
              ) : (
                <Menu aria-hidden="true" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
