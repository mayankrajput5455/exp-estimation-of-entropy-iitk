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


function pourbyNa2co3() {
    let bottle = document.getElementById("img17");

    bottle.style.transform = "translateX(-170px) translateY(-70px) rotate(-40deg)";

    setTimeout(() =>{
        bottle.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);
}
function pourbymeasuringCylinder(){
    let cylinder = document.getElementById("img14");

    cylinder.style.transform = "translateX(-120px) translateY(10px) rotate(-40deg)";

    setTimeout(() =>{
        cylinder.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);
}
function pourbymicropippet(){
    let pippet = document.getElementById("img19");
    
    pippet.style.transform = "translateX(-70px) translateY(-30px) rotate(-70deg)";
}
function pouronflask(){
    let pippet2 = document.getElementById("img19");

    pippet2.style.transform = "translateX(-290px) translateY(-70px) rotate(-90deg)";

    setTimeout(() =>{
        pippet2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);
}
function burreteStart(){
    let flask = document.getElementById("img13");

    flask.style.transform = "translateX(-138px) translateY(-7px)";

}
