let txt = document.querySelector("#text");
let txt2 = document.querySelector("#text2");
let srt = document.querySelector("#start");

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate =1
    text_speak.pitch=1
    text_speak.volume = 1
    text_speak.lang = "en-US"
    window.speechSynthesis.speak(text_speak)
}

window.addEventListener("load",()=>{
    speak(txt.innerText);
});
srt.addEventListener("load",()=>{
    speak(txt2.innerText);
});

// Na2co3 to measuring Cylinder

function pourbyNa2co3() {
    let bottle = document.getElementById("img17");
    let msg = document.getElementById("text2");

    bottle.style.transform = "translateX(-167px) translateY(-30px) rotate(-40deg)";

    setTimeout(() =>{
        bottle.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);
    setTimeout(() =>{
        msg.innerText="";
    },3000);
    msg.innerText="";
}
// Measuring Cylinder to flask

function pourbymeasuringCylinder(){
    let cylinder = document.getElementById("img14");

    cylinder.style.transform = "translateX(-120px) translateY(10px) rotate(-40deg)";

    setTimeout(() =>{
        cylinder.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);
}
// Pippet to indicator

function pourbymicropippet(){
    let pippet = document.getElementById("img19");
    
    pippet.style.transform = "translateX(-40px) translateY(-40px) rotate(-90deg)";
}
//Indicator to flask by micropippet

function pouronflask(){
    let pippet2 = document.getElementById("img19");

    pippet2.style.transform = "translateX(-260px) translateY(-90px) rotate(-90deg)";

    setTimeout(() =>{
        pippet2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);

}
// Flask going to burrete
function burreteStart(){
    let flask = document.getElementById("img13");

    flask.style.transform = "translateX(-138px) translateY(-7px)";

}
