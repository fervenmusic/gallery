let img = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.png", "img/8.png", "img/9.png", "img/10.png", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.png", "img/20.jpg", "img/21.jpg", "img/22.jpg", "img/23.jpg", "img/24.jpg", "img/25.jpg"];
let currentIndex = 0;

function scrollForth() {
    currentIndex++;
    if (currentIndex >= img.length) {
        currentIndex = 0;
    }
    document.getElementById('popup-image').src = img[currentIndex];
}

function scrollBack() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = img.length - 1;
    }
    document.getElementById('popup-image').src = img[currentIndex];
}

function closePicture() {
    document.getElementById('popup').classList.add('hide');
}

function generatePopup(img, i) {
    return `<div class="popup"> 
    <div class="popup-content">
        <div class="popup-header">
            <img src="icons/exit.svg" class="exit" onclick="closePicture()">
        </div>
        <div class="popup-body" id="popup-body">
            <img src="icons/left.svg" class="icons icon-left" onclick="scrollBack()">
            <img src="${img[i]}"class="images-popup image-wrapper" id="popup-image">
            <img src="icons/right.svg" class="icons icon-right" onclick="scrollForth()">
        </div>
    </div>`
}

function openPicture(i) {
    currentIndex = i;
    document.getElementById('popup').classList.remove('hide');
    document.getElementById('images').classList.remove('hover');
    let content = document.getElementById('popup');
    content.innerHTML = generatePopup(img, i);
}

function render() {
    let content = document.getElementById('img-box');
    content.innerHTML = '';
    
    for (let i = 0; i < img.length; i++) {
        const image = img[i];
        content.innerHTML += `<a><img src="${image}" class="images hover" id="images" onclick="openPicture(${i})"></a>`;
    }
}