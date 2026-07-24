/* ==========================================
   PROJECT ASANDA ❤️
========================================== */

// Elements
const heartContainer = document.getElementById("heartContainer");
const giftScreen = document.getElementById("giftScreen");
const mainContent = document.getElementById("mainContent");

const giftBox = document.getElementById("giftBox");
const openGift = document.getElementById("openGift");

const typewriter = document.getElementById("typewriter");

const nextButtonContainer = document.getElementById("nextButtonContainer");
const letterButton = document.getElementById("letterButton");

const letter = document.querySelector(".letter");
const video = document.querySelector(".videoSection");
const gallery = document.querySelector(".gallery");
const timeline = document.querySelector(".timeline");
const promise = document.querySelector(".promise");
const ending = document.querySelector(".ending");

const videoButton = document.getElementById("videoButton");
const timelineButton = document.getElementById("timelineButton");
const promiseButton = document.getElementById("promiseButton");
const endingButton = document.getElementById("endingButton");

// Hide website
if (mainContent) {
    mainContent.style.display = "none";
}

// Typewriter
const lines = [
    "Hi Babey... ❤️",
    "Before you watch this...",
    "I made something special...",
    "Not because I had to...",
    "But because I love you.",
    "Happy Birthday, Cthandwa sam. ❤️"
];

let line = 0;
let letterIndex = 0;
function burstHearts(){

    const colors = ["❤️","🩷","💙","🤍"];

    for(let i=0;i<18;i++){

        const heart = document.createElement("span");

        heart.className="heart";

        heart.innerHTML =
            colors[Math.floor(Math.random()*colors.length)];

        heart.style.setProperty(
            "--x",
            (Math.random()*220-110)+"px"
        );

        heart.style.animationDelay =
            (Math.random()*0.2)+"s";

        heartContainer.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },2200);

    }

}
function typeMessage() {

    if (line >= lines.length) {
        if (nextButtonContainer) {
            nextButtonContainer.style.display = "block";
        }
        return;
    }

    if (letterIndex < lines[line].length) {

        typewriter.innerHTML += lines[line].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeMessage, 70);

    } else {

        typewriter.innerHTML += "<br>";

        line++;

        letterIndex = 0;

        setTimeout(typeMessage, 900);
    }
}

// Open Gift
if (openGift) {

    openGift.addEventListener("click", () => {

        giftBox.classList.add("bounce");

setTimeout(()=>{
    giftBox.classList.add("open");
},200);

        openGift.disabled = true;

        setTimeout(() => {

            giftScreen.style.display = "none";

            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            typeMessage();

        }, 1200);

    });

}

// Letter
if (letterButton && letter) {

    letterButton.addEventListener("click", () => {

        letter.classList.add("showSection");

        letter.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Video
if (videoButton && video) {

    videoButton.addEventListener("click", () => {

        video.classList.add("showSection");

        video.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Gallery + Timeline
if (timelineButton && gallery && timeline) {

    timelineButton.addEventListener("click", () => {

        gallery.classList.add("showSection");

        timeline.classList.add("showSection");

        gallery.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Promise
if (promiseButton && promise) {

    promiseButton.addEventListener("click", () => {

        promise.classList.add("showSection");

        promise.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Ending
if (endingButton && ending) {

    endingButton.addEventListener("click", () => {

        ending.classList.add("showSection");

        ending.scrollIntoView({
            behavior: "smooth"
        });

    });

}

console.log("Project Asanda ❤️ Loaded Successfully");
