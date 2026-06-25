const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const year = document.querySelector("#year");
let parallaxTicking = false;

year.textContent = new Date().getFullYear();

const updateBackgroundScroll = () => {
  document.documentElement.style.setProperty("--bg-y", `${window.scrollY * 0.18}px`);
  parallaxTicking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (!parallaxTicking) {
      window.requestAnimationFrame(updateBackgroundScroll);
      parallaxTicking = true;
    }
  },
  { passive: true }
);

updateBackgroundScroll();

navToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mainNav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
});
