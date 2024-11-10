//const nav = document.querySelector("nav")
const nav_ul = document.querySelector("ul");
const home_link = document.getElementById("home_link")


// Variable to keep track of the navigations position
let atBottom = true;
if (window.scrollY > 10) atBottom = false;


// functions to move the navigation
function navToBottom() {
  if (atBottom) return;

  nav_ul.classList.remove("toSide")
  nav_ul.classList.add("toBottom")

  atBottom = true;
}

function navToSide() {
  if (atBottom == false) return;

  nav_ul.classList.add("toSide")
  nav_ul.classList.remove("toBottom")

  atBottom = false;
}


// If home link is pressed, send navigation to bottom before reaching top of page
home_link.addEventListener("click", () => {
  navToBottom()
  atBottom = false
})

// If scroll stops before reaching the top, return navigation to side of the page
window.onscrollend = function () {
  if (window.scrollY > 10) {
    atBottom = true
    navToSide()
  }
}

// Move navigation between bottom and side of the page
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navToSide();
  } else {
    navToBottom();
  }
});