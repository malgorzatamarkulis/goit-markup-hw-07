(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");

  // Check if all required elements are found
  if (!mobileMenu || !openMenuBtn || !closeMenuBtn) {
    if (!mobileMenu) {
      console.error("Mobile menu element not found. Check your HTML structure.");
    }
    if (!openMenuBtn) {
      console.error("Open menu button element not found. Check your HTML structure.");
    }
    if (!closeMenuBtn) {
      console.error("Close menu button element not found. Check your HTML structure.");
    }
  } else {
    console.log("Elements found", mobileMenu, openMenuBtn, closeMenuBtn);
  }

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen ? "disableBodyScroll" : "enableBodyScroll";
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
