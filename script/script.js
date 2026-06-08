/* ---- Mobile Menu ---- */
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open");
    document.body.style.overflow = "hidden";
  });
}
if (closeBtn && mobileMenu) {
  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
  mobileMenu.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      document.body.style.overflow = "";
    });
  });
}

/* ---- Theme Toggle ---- */
const themeBtn = document.getElementById("theme-btn");
if (themeBtn) {
  // Set initial icon based on current theme
  if (document.documentElement.getAttribute("data-theme") === "light") {
    themeBtn.innerHTML = "&#127769;"; // Moon icon
  } else {
    themeBtn.innerHTML = "&#9728;&#65039;"; // Sun icon
  }

  themeBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light") {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      themeBtn.innerHTML = "&#9728;&#65039;";
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeBtn.innerHTML = "&#127769;";
    }
  });
}
