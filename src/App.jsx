import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { portfolioContent } from "./content/portfolioContent";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { IdentityPage } from "./pages/IdentityPage";
import { LabPage } from "./pages/LabPage";
import { SignalPage } from "./pages/SignalPage";
import { StackPage } from "./pages/StackPage";
import { appRoutes } from "./routes";

function App() {
  const [language, setLanguage] = useState(() => {
    const storedLanguage = window.localStorage.getItem("portfolio-language");
    return storedLanguage === "es" ? "es" : "en";
  });
  const [isTopbarStuck, setIsTopbarStuck] = useState(false);
  const content = portfolioContent[language];

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

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
      <ScrollToTop />

      <Navbar
        isTopbarStuck={isTopbarStuck}
        language={language}
        navbar={content.navbar}
        navItems={content.navItems}
        onToggleLanguage={() =>
          setLanguage((current) => (current === "en" ? "es" : "en"))
        }
      />

      <Routes>
        <Route path={appRoutes.home} element={<HomePage hero={content.hero} />} />
        <Route
          path={appRoutes.identity}
          element={
            <IdentityPage identity={content.identity} backLabel={content.shared.backToHub} />
          }
        />
        <Route
          path={appRoutes.lab}
          element={<LabPage lab={content.lab} backLabel={content.shared.backToHub} />}
        />
        <Route
          path={appRoutes.stack}
          element={<StackPage stack={content.stack} backLabel={content.shared.backToHub} />}
        />
        <Route
          path={appRoutes.signal}
          element={<SignalPage signal={content.signal} backLabel={content.shared.backToHub} />}
        />
        <Route
          path={appRoutes.connect}
          element={
            <ContactPage contact={content.contact} backLabel={content.shared.backToHub} />
          }
        />
        <Route path="*" element={<HomePage hero={content.hero} />} />
      </Routes>
    </div>
  );
}

export default App;
