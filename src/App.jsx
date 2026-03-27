import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ContactSection } from "./components/ContactSection";
import { HeroSection } from "./components/HeroSection";
import { IdentitySection } from "./components/IdentitySection";
import { LabSection } from "./components/LabSection";
import { SignalSection } from "./components/SignalSection";
import { StackSection } from "./components/StackSection";
import { portfolioContent } from "./content/portfolioContent";

function App() {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    return storedLanguage === "es" ? "es" : "en";
  });
  const [activeSection, setActiveSection] = useState("mind-interface");
  const [visibleSections, setVisibleSections] = useState(() => new Set(["mind-interface"]));
  const [isTopbarStuck, setIsTopbarStuck] = useState(false);
  const content = portfolioContent[language];

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    const syncSections = () => {
      const viewportHeight = window.innerHeight;
      const nextVisible = new Set(["mind-interface"]);
      let currentActive = "mind-interface";
      let closestOffset = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const intersectsViewport =
          rect.top < viewportHeight * 0.82 && rect.bottom > viewportHeight * 0.18;

        if (intersectsViewport || rect.top < viewportHeight * 0.18) {
          nextVisible.add(section.id);
        }

        const distanceToTop = Math.abs(rect.top);
        if (distanceToTop < closestOffset) {
          closestOffset = distanceToTop;
          currentActive = section.id;
        }
      });

      setVisibleSections(nextVisible);
      setActiveSection(currentActive);
    };

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
    syncSections();
    window.addEventListener("hashchange", syncSections);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncSections);
    };
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
        language={language}
        navbar={content.navbar}
        navItems={content.navItems}
        onToggleLanguage={() =>
          setLanguage((current) => (current === "en" ? "es" : "en"))
        }
      />

      <main>
        <HeroSection hero={content.hero} isVisible={visibleSections.has("mind-interface")} />
        <IdentitySection
          identity={content.identity}
          isVisible={visibleSections.has("core-identity")}
        />
        <LabSection isVisible={visibleSections.has("mental-lab")} lab={content.lab} />
        <StackSection isVisible={visibleSections.has("neural-stack")} stack={content.stack} />
        <SignalSection isVisible={visibleSections.has("signal-feed")} signal={content.signal} />
        <ContactSection
          contact={content.contact}
          isVisible={visibleSections.has("connection-protocol")}
        />
      </main>
    </div>
  );
}

export default App;
