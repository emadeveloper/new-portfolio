import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { IdentitySection } from "./components/IdentitySection";
import { LabSection } from "./components/LabSection";
import { SignalSection } from "./components/SignalSection";
import { StackSection } from "./components/StackSection";
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
            if (current.has(entry.target.id)) {
              return current;
            }

            const next = new Set(current);
            next.add(entry.target.id);
            return next;
          });
          setActiveSection((current) =>
            current === entry.target.id ? current : entry.target.id
          );
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
      const nextValue = window.scrollY > 64;
      setIsTopbarStuck((current) => (current === nextValue ? current : nextValue));
    };

    syncTopbar();
    window.addEventListener("scroll", syncTopbar, { passive: true });

    return () => window.removeEventListener("scroll", syncTopbar);
  }, []);

  return (
    <div className="site-shell">
      <Navbar
        activeSection={activeSection}
        isTopbarStuck={isTopbarStuck}
        navItems={navItems}
      />

      <main>
        <HeroSection isVisible={visibleSections.has("mind-interface")} />
        <IdentitySection
          identityRows={identityRows}
          isVisible={visibleSections.has("core-identity")}
        />
        <LabSection
          isVisible={visibleSections.has("mental-lab")}
          labEntries={labEntries}
        />
        <StackSection
          capabilities={capabilities}
          isVisible={visibleSections.has("neural-stack")}
        />
        <SignalSection
          isVisible={visibleSections.has("signal-feed")}
          signals={signals}
        />
        <ContactSection isVisible={visibleSections.has("connection-protocol")} />
      </main>
    </div>
  );
}

export default App;
