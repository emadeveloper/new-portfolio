const sections = document.querySelectorAll("[data-section]");
const navLinks = document.querySelectorAll(".topnav a");

const syncActiveLink = (id) => {
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${id}`;
    link.classList.toggle("is-active", isActive);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        syncActiveLink(entry.target.id);
      }
    });
  },
  {
    threshold: 0.28,
    rootMargin: "-10% 0px -10% 0px",
  }
);

sections.forEach((section) => observer.observe(section));

window.addEventListener("load", () => {
  const firstSection = document.querySelector("#mind-interface");
  if (firstSection) {
    firstSection.classList.add("is-visible");
    syncActiveLink(firstSection.id);
  }
});
