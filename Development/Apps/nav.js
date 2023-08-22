const nav = document.querySelector("nav");
const nav_ul = nav.querySelector("ul");
const nav_li = nav_ul.querySelector("li");

let nav_ani = nav_ul.animate([
  { bottom: "0", right: "50%", transform: "translate(50%, 0)" },
  { bottom: "50%", right: "0", transform: "translate(0, 50%)"},
],{
  duration: 300,
  fill: "both",
  easing: "ease-in-out"
});
nav_ani.reverse();
nav_ul.style.display = "flex";

let scrolled = false;

window.addEventListener("scroll", (scrollEvent) => {
  let scrollAmount = window.scrollY;

  if(scrollAmount > 100) {
    if(scrolled) return;
    scrolled = true;

    nav_ani.reverse();
    nav_ul.style.display = "block";
    return;
  }

  if(!scrolled) return;
  scrolled = false;

  nav_ul.style.display = "flex";
  nav_ani.reverse();
});
