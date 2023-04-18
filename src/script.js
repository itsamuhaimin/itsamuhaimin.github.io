// ----------------------
// DARK-MODE
// ----------------------
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

// ----------------------
// SCROLL-TO-TOP
// ----------------------
function scrollToTop() {
  window.scrollTo(0, 0);
}

// ----------------------
// SCROLL-METER
// ----------------------
window.onscroll = () => {
  let pos = document.documentElement.scrollTop;
  let calc_height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scroll = (pos * 100) / calc_height;

  document.getElementById("scroll-in").style.height = scroll + "%";
};

// ----------------------
// PRE-LOADER
// ----------------------
let loader = document.getElementById("pre-loader");
window.addEventListener("load", () => {
  loader.style.display = "none";
  document.getElementById("post-loader").style.display = "inline-block";
});

// ----------------------
// Visitor Counter
// ----------------------
const countEl = document.getElementById("views");

visit();
function visit() {
  fetch("https://api.countapi.xyz/update/itsamuhaimin/visits/?amount=1")
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}

// ----------------------
// TINY-SLIDER
// ----------------------
var slider = tns({
  container: ".tiny_slider",
  items: 2,
  gutter: 10,
  mouseDrag: true,
  touch: true,
  rewind: true,
  nav: false,
  controlsText: [
    '<i class="fa-solid fa-circle-chevron-left"></i>',
    '<i class="fa-solid fa-circle-chevron-right"></i>',
  ],
  responsive: {
    770: {
      items: 3,
    },
  },
});
// client-tiny-slider
var client = tns({
  container: ".tiny_client",
  items: 1,
  mouseDrag: true,
  touch: true,
  nav: false,
  controls: false,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayHoverPause: true,
});

// https://irfanshadikrishad.github.io
