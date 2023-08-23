// this is for hamburger menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// this is for theme dark and light
let theme = document.getElementById("theme");
theme.onclick = function () {
  document.body.classList.add("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
};
theme.addEventListener('click',()=>{
  console.log('the button is clicked');
})

// for coder for skills slider  library is used
// var typeData = new Typed(".role", {
//   strings: ["Frontend Developer", "Web developer", "coder"],
//   loop: true,
//   typeSpeed: 100,
//   backSpeed: 80,
//   backDelay: 1000,
// });
