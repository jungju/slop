(() => {
  document.documentElement.classList.add("js");
  const menuButton = document.querySelector(".menu-button");
  const navigation = document.querySelector(".site-nav");
  if (menuButton && navigation) {
    const setMenuOpen = (open) => {
      menuButton.setAttribute("aria-expanded", String(open));
      navigation.dataset.open = String(open);
    };
    menuButton.addEventListener("click", () => {
      setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
    });
    document.addEventListener("click", (event) => {
      if (!menuButton.contains(event.target)) setMenuOpen(false);
    });
    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        menuButton.getAttribute("aria-expanded") === "true"
      ) {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
    navigation.addEventListener("focusout", (event) => {
      if (
        !navigation.contains(event.relatedTarget) &&
        event.relatedTarget !== menuButton
      )
        setMenuOpen(false);
    });
    window
      .matchMedia("(max-width: 860px)")
      .addEventListener("change", () => setMenuOpen(false));
  }

  const filterButtons = [...document.querySelectorAll("[data-filter]")];
  const workCards = [...document.querySelectorAll("[data-work-card]")];
  const filterEmpty = document.querySelector("[data-filter-empty]");
  for (const button of filterButtons) {
    button.addEventListener("click", () => {
      for (const candidate of filterButtons)
        candidate.setAttribute("aria-pressed", String(candidate === button));
      for (const card of workCards)
        card.hidden =
          button.dataset.filter !== "all" &&
          card.dataset.type !== button.dataset.filter;
      if (filterEmpty)
        filterEmpty.hidden = workCards.some((card) => !card.hidden);
    });
  }

  const rotatingWord = document.querySelector("[data-hero-word]");
  if (!rotatingWord || typeof rotatingWord.animate !== "function") return;
  const phrases = ["만듭니다.", "생각합니다.", "운영합니다."];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let phraseIndex = 0;
  let timer;
  let animation;
  const rotate = async () => {
    try {
      animation = rotatingWord.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: "translateY(-.25em)" },
        ],
        { duration: 240, fill: "forwards" },
      );
      await animation.finished;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      rotatingWord.textContent = phrases[phraseIndex];
      animation.cancel();
      animation = rotatingWord.animate(
        [
          { opacity: 0, transform: "translateY(.25em)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 360 },
      );
      await animation.finished;
    } catch {
      // Cancelling an animation rejects its finished promise.
    } finally {
      animation?.cancel();
    }
  };
  const updateRotation = () => {
    window.clearInterval(timer);
    animation?.cancel();
    if (!reducedMotion.matches && !document.hidden)
      timer = window.setInterval(rotate, 3000);
  };
  reducedMotion.addEventListener("change", updateRotation);
  document.addEventListener("visibilitychange", updateRotation);
  updateRotation();
})();
