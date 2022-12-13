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
