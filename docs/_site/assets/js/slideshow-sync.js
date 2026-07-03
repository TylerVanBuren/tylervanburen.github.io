(() => {
  const key = "yourcore-slideshow-start";
  const cycleMs = 48000; // Keep in sync with the 48s CSS animation.
  const root = document.documentElement;

  try {
    let start = Number(sessionStorage.getItem(key));

    if (!Number.isFinite(start) || start <= 0) {
      start = Date.now();
      sessionStorage.setItem(key, String(start));
    }

    const phaseSeconds = ((Date.now() - start) % cycleMs) / 1000;
    root.style.setProperty("--slideshow-phase", `${phaseSeconds}s`);
  } catch (_) {
    // If storage is unavailable, the site still works; the slideshow just starts normally.
    root.style.setProperty("--slideshow-phase", "0s");
  }
})();
