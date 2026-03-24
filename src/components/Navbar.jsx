export function Navbar({ activeSection, isTopbarStuck, navItems }) {
  return (
    <div className={`topbar2-shell ${isTopbarStuck ? "is-stuck" : ""}`}>
      <header className={`topbar2 ${isTopbarStuck ? "is-stuck" : ""}`}>
        <div className="topbar2-rail">
          <a className="topbar2-brand" href="#mind-interface" aria-label="Go to home">
            <span className="topbar2-brand-core" aria-hidden="true"></span>
            <span className="topbar2-brand-copy">EMANUEL MARTINEZ</span>
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
        </div>
      </header>
    </div>
  );
}
