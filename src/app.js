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
