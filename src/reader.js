(() => {
  const reader = document.querySelector(".comic-reader");
  const pages = [...document.querySelectorAll("[data-reader-page]")];
  if (!reader || !pages.length) return;
  const progress = document.querySelector(".reader-progress");
  const progressBar = progress.querySelector("span");
  const current = document.querySelector("[data-reader-current]");
  const viewButtons = [
    ...document.querySelectorAll("button[data-reader-view]"),
  ];
  const compact = window.matchMedia("(max-width: 860px)");
  const preferenceKey = "ai-slop-reader-view";
  let activePage = pages[0];
  let pending = false;
  let preferredView = "fit";
  try {
    if (window.localStorage.getItem(preferenceKey) === "width")
      preferredView = "width";
  } catch {
    // Storage is optional; the controls work without persistence.
  }

  const updateProgress = () => {
    let closestDistance = Infinity;
    for (const page of pages) {
      const rect = page.getBoundingClientRect();
      const distance = Math.abs(
        rect.top + rect.height / 2 - window.innerHeight / 2,
      );
      if (distance < closestDistance) {
        activePage = page;
        closestDistance = distance;
      }
    }
    const pageNumber = activePage.dataset.readerPage;
    current.textContent = pageNumber.padStart(2, "0");
    progressBar.style.width = `${(Number(pageNumber) / pages.length) * 100}%`;
    progress.setAttribute("aria-valuenow", pageNumber);
    progress.setAttribute(
      "aria-valuetext",
      `${pages.length}페이지 중 ${pageNumber}페이지`,
    );
    pending = false;
  };
  const requestUpdate = () => {
    if (pending) return;
    pending = true;
    window.requestAnimationFrame(updateProgress);
  };
  const setView = () => {
    const view = compact.matches ? "width" : preferredView;
    document.body.dataset.readerView = view;
    for (const button of viewButtons)
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.readerView === view),
      );
    requestUpdate();
  };
  for (const button of viewButtons) {
    button.addEventListener("click", () => {
      if (button.dataset.readerView === preferredView) return;
      updateProgress();
      const anchor = activePage;
      preferredView = button.dataset.readerView;
      try {
        window.localStorage.setItem(preferenceKey, preferredView);
      } catch {
        /* Optional persistence. */
      }
      setView();
      anchor.scrollIntoView({ behavior: "instant", block: "start" });
    });
  }
  document
    .querySelector('a[href="#comic-reader"]')
    .addEventListener("click", (event) => {
      event.preventDefault();
      reader.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
      reader.focus({ preventScroll: true });
      window.history.replaceState(null, "", "#comic-reader");
    });
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  compact.addEventListener("change", setView);
  setView();
})();
