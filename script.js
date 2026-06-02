const images = [
    "assets/screenshots/1.png",
    "assets/screenshots/2.png",
    "assets/screenshots/3.png",
    "assets/screenshots/4.png",
    "assets/screenshots/5.png",
    "assets/screenshots/6.png"
];

let index = 0;

const img = document.getElementById("slide");
const counter = document.getElementById("counter");

function update() {
    img.src = images[index];
    counter.innerText = `${index + 1} / ${images.length}`;
}

function nextSlide() {
    index = (index + 1) % images.length;
    update();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    update();
}

/* optional: swipe support (mobile feel like Mister Mods style) */
let startX = 0;

document.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
});
