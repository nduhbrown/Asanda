/* ==========================================
   PROJECT ASANDA ❤️
   Final Script
========================================== */

// Elements
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
mainContent.style.display = "none";

// Typewriter text
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

function typeMessage(){

    if(line >= lines.length){

        nextButtonContainer.style.display = "block";

        return;

    }

    if(letterIndex < lines[line].length){

        typewriter.innerHTML += lines[line].charAt(letterIndex);

        letterIndex++;

        setTimeout(typeMessage,70);

    }else{

        typewriter.innerHTML += "<br>";

        line++;

        letterIndex = 0;

        setTimeout(typeMessage,900);

    }

}

// Open gift
openGift.addEventListener("click",()=>{

    giftBox.classList.add("open");

    openGift.disabled = true;

    setTimeout(()=>{

        giftScreen.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        typeMessage();

    },1200);

});
/* ==========================================
   STORY FLOW
========================================== */

// Letter

letterButton.addEventListener("click",()=>{

    letter.classList.add("showSection");

    letter.scrollIntoView({

        behavior:"smooth"

    });

});

// Video

videoButton.addEventListener("click",()=>{

    video.classList.add("showSection");

    video.scrollIntoView({

        behavior:"smooth"

    });

});

// Gallery + Timeline

timelineButton.addEventListener("click",()=>{

    gallery.classList.add("showSection");

    timeline.classList.add("showSection");

    timeline.scrollIntoView({

        behavior:"smooth"

    });

});

// Promise

promiseButton.addEventListener("click",()=>{

    promise.classList.add("showSection");

    promise.scrollIntoView({

        behavior:"smooth"

    });

});

// Ending

endingButton.addEventListener("click",()=>{

    ending.classList.add("showSection");

    ending.scrollIntoView({

        behavior:"smooth"

    });

});

console.log("Project Asanda ❤️ Loaded Successfully");
