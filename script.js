// ==========================================
// PROJECT ASANDA ❤️
// By Nduh
// ==========================================

const openGift = document.getElementById("openGift");
const giftBox = document.getElementById("gift-box");
const website = document.getElementById("website");
const giftScreen = document.getElementById("gift-screen");
const typing = document.getElementById("typing");

website.style.display = "none";

const message = [
    "Hi Babey... ❤️",
    "Before you watch this...",
    "I want you to know something...",
    "This wasn't bought in a shop.",
    "It was made with love...",
    "Happy Birthday, Cthandwa sam. ❤️"
];

let line = 0;
let letter = 0;

function typeWriter(){

    if(line >= message.length){
        return;
    }

    if(letter < message[line].length){

        typing.innerHTML += message[line].charAt(letter);

        letter++;

        setTimeout(typeWriter,70);

    }else{

        typing.innerHTML += "<br>";

        line++;

        letter = 0;

        setTimeout(typeWriter,900);

    }

}

openGift.addEventListener("click",()=>{

    giftBox.classList.add("open");

    setTimeout(()=>{

        giftScreen.style.display="none";

        website.style.display="block";

        typeWriter();

    },1200);

});
