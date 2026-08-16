(() => {
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.dataset.open = "false";
    };

    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(open));
      navigation.dataset.open = String(open);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });
  }

  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const workCards = [...document.querySelectorAll("[data-work-card]")];
  const filterEmpty = document.querySelector("[data-filter-empty]");

  for (const button of filterButtons) {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      for (const candidate of filterButtons) {
        candidate.setAttribute("aria-pressed", String(candidate === button));
      }

      let visibleCount = 0;
      for (const card of workCards) {
        const visible = filter === "all" || card.dataset.type === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      }

      if (filterEmpty) filterEmpty.hidden = visibleCount !== 0;
    });
  }

  const progress = document.querySelector(".reader-progress span");
  if (progress) {
    let ticking = false;
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      progress.style.width = Math.min(100, Math.max(0, ratio * 100)) + "%";
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(updateProgress);
          ticking = true;
        }
      },
      { passive: true },
    );
    updateProgress();
  }
})();
