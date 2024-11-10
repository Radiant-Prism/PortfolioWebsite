//const nav = document.querySelector("nav")
const nav_ul = document.querySelector("ul");
const home_link = document.getElementById("home_link")


let atBottom = true;
if (window.scrollY > 10) atBottom = false;

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


home_link.addEventListener("click", () => {
  navToBottom()
  atBottom = false
})


window.addEventListener("wheel", () => {
  if (window.scrollY > 10) atBottom = true
})

window.addEventListener("scroll", (event) => {
  console.log(event.target);
  

  if (window.scrollY > 10) {
    navToSide();
  } else {
    navToBottom();
  }
});