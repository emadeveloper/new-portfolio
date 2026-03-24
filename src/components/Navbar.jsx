export function Navbar({ activeSection, isTopbarStuck, navItems }) {
  return (
    <div className={`topbar-shell ${isTopbarStuck ? "is-stuck" : ""}`}>
      <header className={`topbar ${isTopbarStuck ? "is-stuck" : ""}`}>
        <div className="topbar-panel">
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

          <div className="topbar-actions" aria-label="Quick actions">
            <a className="topbar-icon" href="#signal-feed" aria-label="Open signal feed">
              <span>+</span>
            </a>
            <a className="topbar-icon" href="#mental-lab" aria-label="Open mental lab">
              <span>◌</span>
            </a>
            <a className="topbar-cta" href="#connection-protocol">
              Start contact
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}
