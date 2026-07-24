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
const message = [
    "Hi Babey... ❤️",
    "Before you watch this...",
    "I hope today makes you smile.",
    "I hope you enjoy every little gift I got for you.",
    "No gift could ever truly show how much you mean to me...",
    "But I hope these remind you just how loved you are.",
    "Happy Birthday, My Love. 🎂❤️",
    "And Happy 5 Months Anniversary to Us. ❤️",
    "I love you, Cthandwa sam. ❤️"
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

    if (line >= message.length) {
        if (nextButtonContainer) {
            nextButtonContainer.style.display = "block";
        }
        return;
    }

    if (letterIndex < message[line].length) {

        // FIXED: Changed "lines" to "message"
        typewriter.innerHTML += message[line].charAt(letterIndex);

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
            burstHearts();
        },200);

        openGift.disabled = true;

        // FIXED: Added 1.5 second delay before showing main content
        setTimeout(() => {

            giftScreen.style.display = "none";

            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Start typing after the delay
            typeMessage();

        }, 1500); // Changed from 1200 to 1500 (1.5 seconds)

    });

}

// Letter
if (letterButton && letter) {

    letterButton.addEventListener("click", () => {

        // Hide any other visible sections first
        document.querySelectorAll('.showSection').forEach(el => {
            el.classList.remove('showSection');
        });

        letter.classList.add("showSection");

        letter.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Video
if (videoButton && video) {

    videoButton.addEventListener("click", () => {

        // Hide any other visible sections first
        document.querySelectorAll('.showSection').forEach(el => {
            el.classList.remove('showSection');
        });

        video.classList.add("showSection");

        video.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Gallery + Timeline
if (timelineButton && gallery && timeline) {

    timelineButton.addEventListener("click", () => {

        // Hide any other visible sections first
        document.querySelectorAll('.showSection').forEach(el => {
            el.classList.remove('showSection');
        });

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

        // Hide any other visible sections first
        document.querySelectorAll('.showSection').forEach(el => {
            el.classList.remove('showSection');
        });

        promise.classList.add("showSection");

        promise.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Ending
if (endingButton && ending) {

    endingButton.addEventListener("click", () => {

        // Hide any other visible sections first
        document.querySelectorAll('.showSection').forEach(el => {
            el.classList.remove('showSection');
        });

        ending.classList.add("showSection");

        ending.scrollIntoView({
            behavior: "smooth"
        });

    });

}

console.log("Project Asanda ❤️ Loaded Successfully");
