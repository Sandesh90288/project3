const image1 = [
    "./icons/laptop1.jpeg",
    "./icons/speaker1.jpeg",
    "./icons/mobiles.jpeg",
    "./icons/tablet1.jpeg",
    "./icons/headphone1.jpg" 
];

const description = [
    "GET THE LATEST LAPTOP",
    "GET THE LATEST SPEAKER",
    "GET THE LATEST MOBILE",
    "GET THE LATEST TABLET",
    "GET THE LATEST HEADPHONE"
];

const discount = [
    "get discount 23%",
    "get discount 24%",
    "get discount 25%",
    "get discount 26%",
    "get discount 27%"
];

const imageElements = document.getElementsByClassName('h_img');
const descElements = document.getElementsByClassName('inner_desc');
const leftArrow = document.getElementsByClassName("left_arr")[0];
const rightArrow = document.getElementsByClassName("right_arr")[0];

let i = 0;

function updateCarousel() {
    // Update the image and text descriptions
    for (let imgElement of imageElements) {
        imgElement.src = image1[i];
    }
    for (let descElement of descElements) {
        descElement.querySelector('h1').innerText = description[i];
        descElement.querySelector('p').innerText = discount[i];
    }
}

function leftarr() {
    i = (i <= 0) ? image1.length - 1 : i - 1;
    updateCarousel();
}

function rightarr() {
    i = (i >= image1.length - 1) ? 0 : i + 1;
    updateCarousel();
}

// Initial setup
updateCarousel();

leftArrow.addEventListener('click', leftarr);
rightArrow.addEventListener('click', rightarr);


function updateCarousel() {
    for (let imgElement of imageElements) {
        imgElement.src = image1[i];
    }
    for (let descElement of descElements) {
        descElement.querySelector('h1').innerText = description[i];
        descElement.querySelector('p').innerText = discount[i];
    }
}

function autoChange() {
    i = (i + 1) % image1.length; // Loop back to the start
    updateCarousel();
}

// Set the interval to change the image and description every 3 seconds (3000 milliseconds)
setInterval(autoChange, 3000);

// Initial setup
updateCarousel();
