const nav = document.querySelector("nav");
const nav_ul = nav.querySelector("ul");

window.addEventListener("scroll", (scrollEvent) => {
  let scrollAmount = window.scrollY;

  if(scrollAmount > 0) {
    nav_ul.style.justifyContent = "flex-end";
    nav_ul.style.display = "block";
    nav_ul.style.top = "50%";
    nav_ul.style.transform = "translateY(-50%)";
    return;
  }

  nav_ul.style.justifyContent = "center";
  nav_ul.style.display = "flex";
  nav_ul.style.top = "0";
  nav_ul.style.transform = "translateY(0)";
});
