let menuToggle = document.querySelector('.menuToggle');
let lightDark = document.querySelector('.lightDark');
let body = document.querySelector('body');
let video = document.querySelector('video');
let navigation = document.querySelector('.navigation');

let dark = false;

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
});

lightDark.addEventListener('click', () => {
    dark = !dark;
    lightDark.classList.toggle('active');
    body.classList.toggle('dark');

    if (dark) {
        video.setAttribute('src', "./assets/videos/snow.mp4");
    } else {
        video.setAttribute('src', "./assets/videos/rain.mp4");
    }
});







