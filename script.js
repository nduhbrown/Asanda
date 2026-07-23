/* ==========================================
   PROJECT ASANDA ❤️
   By Nduh
========================================== */

const giftScreen = document.getElementById("giftScreen");
const mainContent = document.getElementById("mainContent");

const giftBox = document.getElementById("giftBox");
const openGift = document.getElementById("openGift");

const typewriter = document.getElementById("typewriter");

const continueBtn = document.getElementById("continueBtn");

const lines = [

"Hi Babey... ❤️",

"Before you watch this...",

"I made something special...",

"Not because I had to...",

"But because I love you.",

"Happy Birthday, Cthandwa sam. ❤️"

];

let line = 0;
let letter = 0;

mainContent.style.display = "none";

function typeMessage(){

    if(line >= lines.length){
        return;
    }

    if(letter < lines[line].length){

        typewriter.innerHTML += lines[line].charAt(letter);

        letter++;

        setTimeout(typeMessage,70);

    }else{

        typewriter.innerHTML += "<br>";

        line++;

        letter = 0;

        setTimeout(typeMessage,900);

    }

}

openGift.addEventListener("click",()=>{

    giftBox.classList.add("open");

    openGift.disabled = true;

    setTimeout(()=>{

        giftScreen.style.display = "none";

        mainContent.style.display = "block";

        window.scrollTo(0,0);

        typeMessage();

    },1200);

});/* ==========================================
   CONTINUE BUTTON
========================================== */

continueBtn.addEventListener("click",()=>{

    document.querySelector(".videoSection").scrollIntoView({

        behavior:"smooth"

    });

});

/* ==========================================
   FADE IN ANIMATION
========================================== */

const fadeItems = document.querySelectorAll(

".letter, .videoSection, .timeline, .promise, .ending"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:0.15

});

fadeItems.forEach(section=>{

    section.classList.add("fadeUp");

    observer.observe(section);

});

/* ==========================================
   FINISH
========================================== */

console.log("Project Asanda ❤️ loaded successfully.");
