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

  const rotatingWord = document.querySelector("[data-hero-word]");
  if (rotatingWord && typeof rotatingWord.animate === "function") {
    const heroPhrases = ["만듭니다.", "생각합니다.", "운영합니다."];
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let phraseIndex = 0;
    let timerId = null;
    let rotating = false;

    const rotateHeroWord = async () => {
      if (rotating || motionPreference.matches || document.hidden) return;
      rotating = true;
      let outgoing;
      let incoming;

      try {
        outgoing = rotatingWord.animate(
          [
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
            { opacity: 0, transform: "translate3d(0, -0.32em, 0)" },
          ],
          {
            duration: 240,
            easing: "cubic-bezier(0.55, 0, 1, 0.45)",
            fill: "both",
          },
        );
        await outgoing.finished;

        phraseIndex = (phraseIndex + 1) % heroPhrases.length;
        rotatingWord.textContent = heroPhrases[phraseIndex];
        outgoing.cancel();

        incoming = rotatingWord.animate(
          [
            { opacity: 0, transform: "translate3d(0, 0.32em, 0)" },
            { opacity: 1, transform: "translate3d(0, 0, 0)" },
          ],
          {
            duration: 360,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "both",
          },
        );
        await incoming.finished;
      } catch {
        // A motion preference change may cancel an in-flight animation.
      } finally {
        outgoing?.cancel();
        incoming?.cancel();
        rotating = false;
      }
    };

    const stopRotation = () => {
      if (timerId !== null) window.clearInterval(timerId);
      timerId = null;
      for (const animation of rotatingWord.getAnimations()) animation.cancel();
    };

    const startRotation = () => {
      if (timerId !== null || motionPreference.matches) return;
      timerId = window.setInterval(() => void rotateHeroWord(), 3000);
    };

    const handleMotionPreference = () => {
      if (motionPreference.matches) stopRotation();
      else startRotation();
    };

    motionPreference.addEventListener?.("change", handleMotionPreference);
    startRotation();
  }

  const reader = document.querySelector(".comic-reader");
  const readerPages = [...document.querySelectorAll("[data-reader-page]")];
  const readerProgress = document.querySelector(".reader-progress");
  const readerProgressBar = readerProgress?.querySelector("span");
  const readerCurrent = document.querySelector("[data-reader-current]");
  const readerViewButtons = [...document.querySelectorAll("[data-reader-view]")];
  const readerJump = document.querySelector('a[href="#comic-reader"]');

  if (reader && readerPages.length > 0) {
    const compactReader = window.matchMedia("(max-width: 860px)");
    const preferenceKey = "ai-slop-reader-view";
    let ticking = false;
    let activePage = readerPages[0];

    const storedReaderView = () => {
      try {
        const stored = window.localStorage.getItem(preferenceKey);
        return stored === "fit" || stored === "width" ? stored : null;
      } catch {
        return null;
      }
    };

    const closestPage = () => {
      const viewportCenter = window.innerHeight / 2;
      return readerPages.reduce((closest, page) => {
        const rect = page.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - viewportCenter);
        return distance < closest.distance ? { page, distance } : closest;
      }, { page: readerPages[0], distance: Number.POSITIVE_INFINITY }).page;
    };

    const updateReaderState = () => {
      activePage = closestPage();
      const pageNumber = Number(activePage.dataset.readerPage) || 1;
      const progressRatio = pageNumber / readerPages.length;
      if (readerCurrent) readerCurrent.textContent = String(pageNumber).padStart(2, "0");
      if (readerProgressBar) readerProgressBar.style.width = progressRatio * 100 + "%";
      if (readerProgress) readerProgress.setAttribute("aria-valuenow", String(pageNumber));
      ticking = false;
    };

    const requestReaderUpdate = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateReaderState);
    };

    const setReaderView = (view, { remember = false, keepPage = false } = {}) => {
      const anchoredPage = keepPage ? activePage : null;
      document.body.dataset.readerView = view;
      for (const button of readerViewButtons) {
        button.setAttribute("aria-pressed", String(button.dataset.readerView === view));
      }
      if (remember) {
        try {
          window.localStorage.setItem(preferenceKey, view);
        } catch {
          // The reading mode still works when storage is unavailable.
        }
      }
      if (anchoredPage) {
        window.requestAnimationFrame(() => {
          const stickyOffset =
            (document.querySelector(".site-header")?.getBoundingClientRect().height || 0) +
            (document.querySelector(".reader-toolbar")?.getBoundingClientRect().height || 0);
          const targetTop =
            window.scrollY + anchoredPage.getBoundingClientRect().top - stickyOffset;
          if (document.scrollingElement) document.scrollingElement.scrollTop = targetTop;
          else window.scrollTo(0, targetTop);
          window.requestAnimationFrame(updateReaderState);
        });
      } else {
        requestReaderUpdate();
      }
    };

    const applyResponsiveReaderView = () => {
      setReaderView(compactReader.matches ? "width" : storedReaderView() || "fit");
    };

    for (const button of readerViewButtons) {
      button.addEventListener("click", () => {
        setReaderView(button.dataset.readerView, { remember: true, keepPage: true });
      });
    }

    readerJump?.addEventListener("click", (event) => {
      event.preventDefault();
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const stickyOffset =
        (document.querySelector(".site-header")?.getBoundingClientRect().height || 0) +
        (document.querySelector(".reader-toolbar")?.getBoundingClientRect().height || 0);
      const targetTop = window.scrollY + reader.getBoundingClientRect().top - stickyOffset;
      window.scrollTo({
        behavior: reducedMotion ? "auto" : "smooth",
        top: Math.max(0, targetTop),
      });
      reader.focus({ preventScroll: true });
      window.history.replaceState(null, "", "#comic-reader");
      window.setTimeout(() => {
        if (Math.abs(window.scrollY - targetTop) > 2 && document.scrollingElement) {
          document.scrollingElement.scrollTop = Math.max(0, targetTop);
        }
      }, reducedMotion ? 0 : 500);
    });

    window.addEventListener("scroll", requestReaderUpdate, { passive: true });
    window.addEventListener("resize", requestReaderUpdate, { passive: true });
    compactReader.addEventListener?.("change", applyResponsiveReaderView);
    applyResponsiveReaderView();
    updateReaderState();
  }
})();
