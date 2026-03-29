import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { sectionIconByPath } from "./sectionIcons";

export function Navbar({
  isTopbarStuck,
  language,
  navbar,
  navItems,
  onToggleLanguage,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className={`topbar2-shell ${isTopbarStuck ? "is-stuck" : ""}`}>
      <header className={`topbar2 ${isTopbarStuck ? "is-stuck" : ""}`}>
        <div className="topbar2-rail">
          <Link
            className="topbar2-brand"
            to="/"
            aria-label="Go to home"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="topbar2-brand-core" aria-hidden="true"></span>
            <span className="topbar2-brand-copy">{navbar.brand}</span>
          </Link>

          <nav
            id="mobile-nav"
            className={`topbar2-nav ${isMenuOpen ? "is-open" : ""}`}
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const Icon = sectionIconByPath[item.path];

              return (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) => (isActive ? "is-active" : "")}
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
                </NavLink>
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
                <span className="language-toggle-flag" aria-hidden="true">
                  🇺🇸
                </span>
                <span>{navbar.languages.en}</span>
              </span>
              <span className="language-toggle-divider" aria-hidden="true"></span>
              <span className={language === "es" ? "is-active" : ""}>
                <span className="language-toggle-flag" aria-hidden="true">
                  🇦🇷
                </span>
                <span>{navbar.languages.es}</span>
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
