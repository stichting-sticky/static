// Keep the copyright year current
for (const el of document.querySelectorAll("[data-year]")) {
  el.textContent = new Date().getFullYear();
}

// Fade sections in as they scroll into view
if ("IntersectionObserver" in window) {
  document.documentElement.classList.add("js");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 },
  );

  for (const el of document.querySelectorAll(".reveal")) {
    observer.observe(el);
  }
}
