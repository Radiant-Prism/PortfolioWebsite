const nav = document.querySelector("nav");
const nav_ul = nav.querySelector("ul");
const nav_li = nav_ul.querySelector("li");

let nav_ul_ani = nav_ul.animate([
  { top: "0", right: "50%", transform: "translate(50%, 0)" },
  { top: "50%", right: "0", transform: "translate(0, -50%)"},
],{
  duration: 300,
  fill: "both",
  easing: "ease-in-out"
});
nav_ul_ani.reverse();

// let nav_li_ani = nav_li.animate([
//   { float: "left" },
//   { float: "none" },
// ],{
//   duration: 300,
//   fill: "auto",
//   easing: "ease-in-out"
// });
// nav_li_ani.reverse();

let scrolled = false;

window.addEventListener("scroll", (scrollEvent) => {
  let scrollAmount = window.scrollY;

  if(scrollAmount > 0) {
    if(scrolled) return;
    scrolled = true;

    nav_ul_ani.reverse();
    nav_li.style.float = "none";
    return;
  }

  scrolled = false;

  nav_li.style.float = "left";
  nav_ul_ani.reverse();
});
