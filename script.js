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
const journey = document.querySelector(".journey");
const promise = document.querySelector(".promise");

const videoButton = document.getElementById("videoButton");
const timelineButton = document.getElementById("timelineButton");
const promiseButton = document.getElementById("promiseButton");

// Hide website
if (mainContent) {
    mainContent.style.display = "none";
}

// Typewriter
const message = [
    "Hi Babey... ❤️",
    "I hope today makes you smile.",
    "I hope you enjoy every little gift I got for you.",
    "No gift could ever truly show how much you mean to me...",
    "Happy Birthday And Happy 5 Months Anniversary to Us. ❤️",
    "I love you, Cthandwa sam. 🥹❤️"
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

    // Reset the typewriter content when starting
    if (line === 0 && letterIndex === 0) {
        typewriter.innerHTML = "";
    }

    if (line >= message.length) {
        if (nextButtonContainer) {
            nextButtonContainer.style.display = "block";
        }
        return;
    }

    if (letterIndex < message[line].length) {

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

// Open Gift Button Click
if (openGift) {

    openGift.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Add bounce animation
        giftBox.classList.add("bounce");

        setTimeout(function(){
            giftBox.classList.add("open");
            burstHearts();
        }, 200);

        openGift.disabled = true;

        // Wait 1.5 seconds before showing main content
        setTimeout(function() {

            giftScreen.style.display = "none";
            mainContent.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // Reset typewriter state
            line = 0;
            letterIndex = 0;
            typewriter.innerHTML = "";
            
            // Start typing after a small delay
            setTimeout(function() {
                typeMessage();
            }, 300);

        }, 1500);

    });

}

// Also allow clicking on the gift box itself
if (giftBox) {
    giftBox.addEventListener("click", function() {
        if (!openGift.disabled) {
            openGift.click();
        }
    });
}

// Letter
if (letterButton && letter) {

    letterButton.addEventListener("click", function() {

        document.querySelectorAll('.showSection').forEach(function(el) {
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

    videoButton.addEventListener("click", function() {

        document.querySelectorAll('.showSection').forEach(function(el) {
            el.classList.remove('showSection');
        });

        video.classList.add("showSection");

        video.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Journey (merged Gallery + Timeline)
if (timelineButton && journey) {

    timelineButton.addEventListener("click", function() {

        document.querySelectorAll('.showSection').forEach(function(el) {
            el.classList.remove('showSection');
        });

        journey.classList.add("showSection");

        journey.scrollIntoView({
            behavior: "smooth"
        });

    });

}

// Promise
if (promiseButton && promise) {

    promiseButton.addEventListener("click", function() {

        document.querySelectorAll('.showSection').forEach(function(el) {
            el.classList.remove('showSection');
        });

        promise.classList.add("showSection");

        promise.scrollIntoView({
            behavior: "smooth"
        });

    });

}

/* ==========================================
   FLOATING HEARTS ANIMATION
========================================== */

function startFloatingHearts() {
    const container = document.getElementById('floatingHeartsContainer');
    if (!container) return;
    
    const heartEmojis = ['❤️', '💕', '💖', '💗', '💝', '✨', '💘', '💓'];
    
    // Clear any existing hearts
    container.innerHTML = '';
    
    // Function to create a floating heart
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'floating-heart-item';
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        // Random position
        heart.style.left = (5 + Math.random() * 90) + '%';
        heart.style.top = (10 + Math.random() * 80) + '%';
        
        // Random size
        const size = 20 + Math.random() * 30;
        heart.style.fontSize = size + 'px';
        
        // Random animation duration
        const duration = 2.5 + Math.random() * 2;
        heart.style.animationDuration = duration + 's';
        
        // Random rotation
        const rotation = -20 + Math.random() * 40;
        heart.style.setProperty('--rotation', rotation + 'deg');
        
        container.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, duration * 1000 + 500);
    }
    
    // Create hearts continuously
    let heartInterval = setInterval(() => {
        // Create 1-3 hearts at a time
        const count = 1 + Math.floor(Math.random() * 3);
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                createHeart();
            }, i * 150);
        }
    }, 400);
    
    // Also create some initial hearts
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createHeart();
        }, i * 200);
    }
    
    // Clean up on page unload
    window.addEventListener('beforeunload', function() {
        clearInterval(heartInterval);
    });
}

// Start the floating hearts when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait for everything to load
    setTimeout(startFloatingHearts, 800);
});

console.log("Project Asanda ❤️ Loaded Successfully");
