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
   ANIMATED EMOJI KISS
========================================== */

function startEmojiKissAnimation() {
    // Check if the emoji animation container exists
    const animationContainer = document.getElementById('emojiKissAnimation');
    if (!animationContainer) return;
    
    // Build the emoji scene HTML
    animationContainer.innerHTML = `
        <div class="emoji-scene">
            <!-- You (Nduh) -->
            <div class="emoji-character" id="characterYou">
                <div class="emoji-face">
                    <div class="eyes">
                        <div class="eye left-eye">
                            <div class="pupil"></div>
                            <div class="eyelid"></div>
                        </div>
                        <div class="eye right-eye">
                            <div class="pupil"></div>
                            <div class="eyelid"></div>
                        </div>
                    </div>
                    <div class="mouth" id="mouthYou">😊</div>
                    <div class="blush blush-left"></div>
                    <div class="blush blush-right"></div>
                </div>
                <div class="emoji-body">👤</div>
                <div class="emoji-label">Nduh</div>
            </div>
            
            <!-- Her (Asanda) -->
            <div class="emoji-character" id="characterHer">
                <div class="emoji-face">
                    <div class="eyes">
                        <div class="eye left-eye">
                            <div class="pupil"></div>
                            <div class="eyelid"></div>
                        </div>
                        <div class="eye right-eye">
                            <div class="pupil"></div>
                            <div class="eyelid"></div>
                        </div>
                    </div>
                    <div class="mouth" id="mouthHer">😊</div>
                    <div class="blush blush-left"></div>
                    <div class="blush blush-right"></div>
                    <div class="ribbon">🎀</div>
                </div>
                <div class="emoji-body">👤</div>
                <div class="emoji-label">Asanda ❤️</div>
            </div>
            
            <!-- Kiss effect -->
            <div class="kiss-effect" id="kissEffect">💋</div>
            
            <!-- Hearts -->
            <div class="hearts-container" id="heartsContainer"></div>
        </div>
    `;
    
    const scene = document.querySelector('.emoji-scene');
    const you = document.getElementById('characterYou');
    const her = document.getElementById('characterHer');
    const mouthYou = document.getElementById('mouthYou');
    const mouthHer = document.getElementById('mouthHer');
    const kissEffect = document.getElementById('kissEffect');
    const heartsContainer = document.getElementById('heartsContainer');
    
    let isAnimating = false;
    let blinkInterval;
    let animationInterval;
    
    // Blink function
    function blink(character) {
        character.querySelectorAll('.eye').forEach(eye => {
            eye.classList.add('blink');
            setTimeout(() => {
                eye.classList.remove('blink');
            }, 150);
        });
    }
    
    // Random blink
    function randomBlink() {
        if (!isAnimating) {
            const chars = [you, her];
            const char = chars[Math.floor(Math.random() * chars.length)];
            blink(char);
        }
    }
    
    // Look toward each other
    function lookAtEachOther() {
        you.classList.add('look-right');
        her.classList.add('look-left');
    }
    
    // Look forward
    function lookForward() {
        you.classList.remove('look-right');
        her.classList.remove('look-left');
    }
    
    // Change mouth expression
    function setMouth(element, expression) {
        element.textContent = expression;
    }
    
    // Create floating hearts
    function createHearts(count = 10) {
        const emojis = ['❤️', '💕', '💖', '💗', '✨', '💝'];
        for (let i = 0; i < count; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'floating-heart';
                heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                heart.style.left = (10 + Math.random() * 80) + '%';
                heart.style.top = (20 + Math.random() * 50) + '%';
                heart.style.animationDuration = (1.5 + Math.random() * 1.2) + 's';
                heart.style.fontSize = (18 + Math.random() * 25) + 'px';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 3000);
            }, i * 80);
        }
    }
    
    // Main animation sequence
    function playKissSequence() {
        if (isAnimating) return;
        isAnimating = true;
        
        // Clear any existing hearts
        heartsContainer.innerHTML = '';
        kissEffect.className = 'kiss-effect';
        
        // 1. Both smile and look at each other
        lookAtEachOther();
        setMouth(mouthYou, '😊');
        setMouth(mouthHer, '😊');
        you.classList.remove('blush-active');
        her.classList.remove('blush-active');
        
        // Add blush
        setTimeout(() => {
            you.classList.add('blush-active');
            her.classList.add('blush-active');
        }, 300);
        
        // 2. Move closer (after 1.2s)
        setTimeout(() => {
            scene.classList.add('kiss-approach');
        }, 1200);
        
        // 3. Blink while approaching
        setTimeout(() => {
            blink(you);
            setTimeout(() => blink(her), 200);
        }, 1600);
        
        // 4. Kiss! (after 2.2s)
        setTimeout(() => {
            // You change to kiss face
            setMouth(mouthYou, '😚');
            
            // Show kiss effect with "mwah"
            kissEffect.textContent = '💋';
            kissEffect.className = 'kiss-effect show';
            
            // Show "mwah" text
            setTimeout(() => {
                kissEffect.textContent = '💋 mwah!';
                kissEffect.style.fontSize = '40px';
            }, 200);
            
            // Her becomes emotional
            setTimeout(() => {
                setMouth(mouthHer, '🥹');
                her.classList.add('blush-active');
            }, 200);
            
            // Hearts appear
            setTimeout(() => {
                createHearts(12);
            }, 300);
            
            // Fade kiss effect
            setTimeout(() => {
                kissEffect.className = 'kiss-effect fade';
                setTimeout(() => {
                    kissEffect.style.fontSize = '50px';
                }, 300);
            }, 800);
            
        }, 2200);
        
        // 5. Hold the moment (after 3.2s)
        setTimeout(() => {
            setMouth(mouthHer, '🥹');
        }, 3200);
        
        // 6. Return to smiles (after 4.2s)
        setTimeout(() => {
            // You smile again
            setMouth(mouthYou, '😊');
            
            // Her returns to smile
            setMouth(mouthHer, '😊');
            
            // Move back
            scene.classList.remove('kiss-approach');
            
            // Look forward
            setTimeout(() => {
                lookForward();
            }, 400);
            
            // Fade blush
            setTimeout(() => {
                you.classList.remove('blush-active');
                her.classList.remove('blush-active');
            }, 600);
            
        }, 4200);
        
        // 7. Reset and prepare for next loop (after 5.5s)
        setTimeout(() => {
            isAnimating = false;
        }, 5500);
    }
    
    // Start blinking
    blinkInterval = setInterval(randomBlink, 2500);
    
    // Initial look
    setTimeout(() => {
        lookAtEachOther();
    }, 500);
    
    // Start the first sequence after a delay
    setTimeout(() => {
        playKissSequence();
    }, 1500);
    
    // Loop the sequence
    animationInterval = setInterval(() => {
        playKissSequence();
    }, 8000);
    
    // Clean up on page unload
    window.addEventListener('beforeunload', function() {
        clearInterval(blinkInterval);
        clearInterval(animationInterval);
    });
}

// Start the emoji animation when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // Wait a moment for everything to load
    setTimeout(startEmojiKissAnimation, 500);
});

console.log("Project Asanda ❤️ Loaded Successfully");
