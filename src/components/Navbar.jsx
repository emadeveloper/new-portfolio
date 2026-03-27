export function Navbar({
  activeSection,
  isTopbarStuck,
  language,
  navbar,
  navItems,
  onToggleLanguage,
}) {
  return (
    <div className={`topbar2-shell ${isTopbarStuck ? "is-stuck" : ""}`}>
      <header className={`topbar2 ${isTopbarStuck ? "is-stuck" : ""}`}>
        <div className="topbar2-rail">
          <a className="topbar2-brand" href="#mind-interface" aria-label="Go to home">
            <span className="topbar2-brand-core" aria-hidden="true"></span>
            <span className="topbar2-brand-copy">{navbar.brand}</span>
          </a>

          <nav className="topbar2-nav" aria-label="Primary">
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
          </div>
        </div>
      </header>
    </div>
  );
}
