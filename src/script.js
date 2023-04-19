// Dark Mode Toggler
function dark() {
  //icon changer
  let xcon = document.getElementById("dark").innerHTML;
  if (xcon == '<i class="fa-solid fa-moon"></i>') {
    document.getElementById("dark").innerHTML =
      '<i class="fa-solid fa-sun"></i>';
  } else if (xcon == '<i class="fa-solid fa-sun"></i>') {
    document.getElementById("dark").innerHTML =
      '<i class="fa-solid fa-moon"></i>';
  }
  //actual dark mode toggler
  var element = document.body;
  element.classList.toggle("light-mode");

  //SET DATA TO LOCAL STORAGE
  let key = "theme";
  let data;
  if (element.classList.contains("light-mode")) {
    data = "dark";
    console.log("dark");
  } else {
    console.log("light");
    data = "light";
  }

  localStorage.setItem(key, data);
}
//GETTING DATA FROM LOCAL STORAGE
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.toggle("light-mode");
}

// Orbiting Animated Text Splitter
const text = document.querySelector(".text p");
text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform: rotate(${i * 14}deg)">${char}</span>`
  )
  .join("");

// Menu Button
document.getElementById("open-menu-btn").addEventListener("click", () => {
  document.getElementById("nav-btn").style.display = "flex";
  document.getElementById("close-menu-btn").style.display = "inline-block";
  document.getElementById("open-menu-btn").style.display = "none";
});
document.getElementById("close-menu-btn").addEventListener("click", () => {
  document.getElementById("nav-btn").style.display = "none";
  document.getElementById("close-menu-btn").style.display = "none";
  document.getElementById("open-menu-btn").style.display = "inline-block";
});

// Scroll Top
function scrollToTop() {
  window.scrollTo(0, 0);
}

// Scroll Meter
window.onscroll = () => {
  let pos = document.documentElement.scrollTop;
  let calc_height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scroll = (pos * 100) / calc_height;

  document.getElementById("scroll-in").style.height = scroll + "%";
};

// PRE-LOADER
let loader = document.getElementById("pre-loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
  document.getElementById("post-loader").style.display = "inline-block";
});

// visitor counter
const countEl = document.getElementById("views");

visit();
function visit() {
  fetch("https://api.countapi.xyz/update/itsamuhaimin/visits/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}

// https://github.com/irfanshadikrishad
