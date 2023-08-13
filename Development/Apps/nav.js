const nav = document.querySelector("nav");
const nav_ul = nav.querySelector("ul");
let nav_ani;

let scrolled = false;

window.addEventListener("scroll", (scrollEvent) => {
  let scrollAmount = window.scrollY;

  if(scrollAmount > 0) {
    if(scrolled) return;
    scrolled = true;

    nav_ani = nav_ul.animate([
      { top: "0", justifyContent: "center", display: "flex", transform: "translateY(0)" },
      { top: "50%", justifyContent: "flex-end", display: "block", transform: "translateY(-50%)"}
    ],{
      duration: 400,
    });

    return;
  }

  if(!scrolled) return;
  scrolled = false;

  nav_ani.reverse();
});
