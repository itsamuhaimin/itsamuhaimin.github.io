// Dark Mode Toggler
function dark() {
    var element = document.body;
    element.classList.toggle("light-mode");
}
// Orbiting Animated Text Splitter
const text = document.querySelector('.text p');
text.innerHTML = text.innerHTML.split("").map((char, i) => 
    `<span style="transform: rotate(${i * 14}deg)">${char}</span>`).join("");

// Dark Mode
document.getElementById('open-menu-btn').addEventListener('click', ()=> {
    document.getElementById('nav-btn').style.display = 'flex';
    document.getElementById('close-menu-btn').style.display = 'inline-block';
    document.getElementById('open-menu-btn').style.display = 'none';
})
document.getElementById('close-menu-btn').addEventListener('click', ()=> {
    document.getElementById('nav-btn').style.display = 'none';
    document.getElementById('close-menu-btn').style.display = 'none';
    document.getElementById('open-menu-btn').style.display = 'inline-block';
})

// Scroll Top
function home(){
    window.scrollTo(0, 0);
}
function scrollToTop(){
    window.scrollTo(0, 0);
}
// Scroll Meter
window.onscroll = ()=> {
    let pos = document.documentElement.scrollTop;
    let calc_height = document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    let scroll = pos * 100 / calc_height;

    document.getElementById("scroll-in").style.height = scroll + "%";
}

// PRE-LOADER
//preloader
let loader = document.getElementById('pre-loader');
window.addEventListener('load', ()=> {
    loader.style.display = 'none';
    document.getElementById('post-loader').style.display = 'inline-block'
})
