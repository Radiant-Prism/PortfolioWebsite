const nav = document.querySelector("nav");

window.addEventListener("scroll", (scrollEvent) => {
  let scrollAmount = window.scrollY;

  if(scrollAmount > 0) {
    nav.style.position = "fixed";
    return;
  }

  nav.style.position = "relative";
});
