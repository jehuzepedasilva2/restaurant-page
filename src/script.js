import HomePage from "./home.js";
import MenuPage from './menu.js';
import ContactPage from './contact.js';
import CachedDOM from './cachedDOM.js';

function onPage(className) {
  const btn = CachedDOM.getNav().querySelector(className);
  const svg = CachedDOM.getNav().querySelector(`${className} svg`)
  offPage();
  btn.style.cssText = "background-color: #ffffff; color: #000000";
  svg.setAttribute("fill", "#000000");
}

function offPage() {
  const navButtons = CachedDOM.getNav().querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    btn.style.cssText = "";
  })
  const svg = document.querySelectorAll(".nav-btn svg");
  svg.forEach(s => {
    s.setAttribute("fill", "#ffffff");
  })

}

function wipePage() {
  const content = CachedDOM.getContentContainer();
  content.innerHTML = '';
}

function handleHomeClick() {
  wipePage();
  onPage(".home")
  HomePage();
}

function handleMenuClick() {
  wipePage();
  onPage(".menu");
  MenuPage();
}

function handleContactClick() {
  wipePage();
  onPage(".contact");
  ContactPage();
}

function main() {
  const nav = CachedDOM.getNav();
  const navButtons = nav.querySelectorAll(".nav-btn");
  navButtons.forEach(btn => {
    const type = btn.classList[0];
    if (type === "home") {
      btn.addEventListener("click", handleHomeClick);
    } else if (type === "menu") {
      btn.addEventListener("click", handleMenuClick);
    } else {
      btn.addEventListener("click", handleContactClick);
    }
  })
  handleHomeClick();
}

main();