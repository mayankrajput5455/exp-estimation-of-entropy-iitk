// let txt = document.querySelector("#text");
// let txt2 = document.querySelector("#text2");
// let srt = document.querySelector("#start");

// function speak(text){
//     let text_speak = new SpeechSynthesisUtterance(text)
//     text_speak.rate =1
//     text_speak.pitch=1
//     text_speak.volume = 1
//     text_speak.lang = "en-US"
//     window.speechSynthesis.speak(text_speak)
// }

// window.addEventListener("load",()=>{
//     speak(txt.innerText);
// });
// srt.addEventListener("load",()=>{
//     speak(txt2.innerText);
// });

// Simulate Page 1

// Na2co3 to measuring Cylinder

function pourbyNa2co3() {
    if (pourbyNa2co3.executed) {
        console.log("Function already executed. Stopping.");
        return;
    }
    let bottle = document.getElementById("img17");
    let msg = document.getElementById("text2");
    let waterbowl = document.getElementById("waterBowl");

    bottle.style.transform = "translateX(-167px) translateY(-30px) rotate(-40deg)";

    setTimeout(() =>{
        bottle.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    },3000);
    setTimeout(() => {
        waterFlow.style.display = "block";
    }, 1000);
    msg.innerText = "Now, Click on Measuring Cylinder to pour Na2Co3 into conical Flask.";
    pourbyNa2co3.executed = true;
}

function pourbymeasuringCylinder() {
    if (pourbymeasuringCylinder.executed) {
        console.log("Function already executed. Stopping.");
        return;
    }

    let cylinder = document.getElementById("img14");
    let msg = document.getElementById("text2");

    cylinder.style.transform = "translateX(-9px) translateY(20px) rotate(-40deg)";

    setTimeout(() => {
        cylinder.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now, Click on Micropipette to gather 3 drops of Bromo Cresol Green Indicator.";
    }, 3000);

    pourbymeasuringCylinder.executed = true; // Mark as executed
}

// Pippet to indicator

function pourbymicropippet(){
    if (pourbymicropippet.executed) {
        console.log("Function already executed. Stopping.");
        return;
    }
    let pippet = document.getElementById("img19");
    let msg = document.getElementById("text2");
    
    msg.innerText = "Click Again on micropippet to release 3drops of Bromo Cresol Green into the Flask.";
    pippet.style.transform = "translateX(-40px) translateY(-40px) rotate(-90deg)";
    pippet.addEventListener("click",()=>{
        pippet.style.transform = "translateX(-260px) translateY(-85px) rotate(-90deg)";
        setTimeout(() =>{
            pippet.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            msg.innerText = "Now, Click on Conical flask to Start Titration via shaking and droping drops of hcl solution untill the blue color solution changes to yellow.";
        },3000);
        pourbymicropippet.executed = true;
    });   
}
function goingfortitration() {
    if (pourbymeasuringCylinder.executed) {
        console.log("Function already executed. Stopping.");
        return;
    }
    let flask = document.getElementById("img13");

    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-138px) translateY(-7px)";

    setTimeout(() => {
        flask.classList.add("shake");

        setTimeout(() => {
            flask.classList.remove("shake");
            flask.style.transition = "none";
            flask.style.transform = "translateX(-138px) translateY(-7px)"; 

            setTimeout(() => {
                flask.style.transition = "transform 3s ease-in-out";
                flask.style.transform = "translateX(0) translateY(0)";
            }, 50);

        }, 5000);

    }, 3000);
    pourbymeasuringCylinder.executed = true;
}

// Simulate Page 2

// Borax to flask

function pourborax() {
    let borax = document.getElementById("img29");
    let msg = document.getElementById("text2");

    borax.style.transform = "translateX(-230px) translateY(-77px) rotate(-40deg)";

    setTimeout(() =>{
        borax.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now Click on Beaker of Distilled Water to pour 75ml of Distilled Water into Measuring Cylinder";
    },3000);
}

// Distilled water to flask

function pourwater() {
    let beaker = document.getElementById("img30");
    let msg = document.getElementById("text2");

    beaker.style.transform = "translateX(-200px) translateY(-60px) rotate(-40deg)";

    setTimeout(() =>{
        beaker.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Transfer that 75ml Distilled water from Measuring Cylinder to Conical Flask";
    },3000);
}

// Measuring Cylinder to flask

function pourbycylinder() {
    let cyl = document.getElementById("img26");
    let msg = document.getElementById("text2");

    cyl.style.transform = "translateX(-70px) translateY(40px) rotate(-90deg)";

    setTimeout(() =>{
        cyl.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText ="Shake it For 10-15 minute and then transfer it to the Water Bath at different Temperature";
    },3000);
}

// flask to water bath

function goingtobath() {
    let cyl = document.getElementById("img22");

    cyl.style.transform = "translateX(460px) translateY(-45px)";

    setTimeout(() =>{
        cyl.style.transform = "translateX(0px) translateY(px)";
    },5000);

}

// Adding Indicator

function addingindicator() {
    let mp = document.getElementById("img27");

    mp.style.transform = "translateX(60px) translateY(-45px) rotate(-90deg)";
    mp.addEventListener("click",()=>{
        mp.style.transform = "translateX(-105px) translateY(-80px) rotate(-90deg)";
        setTimeout(() =>{
            mp.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        },3000);
    });

}