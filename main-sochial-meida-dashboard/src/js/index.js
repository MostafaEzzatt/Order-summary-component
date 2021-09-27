import "../scss/main.scss";

// Consts
const body = document.querySelector("body");
const headingModeSwitch = document.querySelector(".heading__mode__switch");

window.addEventListener("DOMContentLoaded", () => {
  if (!window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("light");
  }
});

headingModeSwitch.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
  } else {
    body.classList.add("light");
  }
});
