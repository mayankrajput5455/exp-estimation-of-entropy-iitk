let currentStep = "step1";
let tempSetter = document.querySelector(".tempSetter");
let head = document.querySelector(".head");
let flask = document.getElementById("img22"); 
let conicalflask = document.getElementById("img13"); 
let cylinder = document.getElementById("img14");
let cyl = document.getElementById("img26");

// Speak Function
function speak(text) {
    window.speechSynthesis.cancel();
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-US";
    window.speechSynthesis.speak(text_speak);
}
window.onload = function () {
    let firstSpeak = document.getElementById("text");
    if (firstSpeak) {
        speak(firstSpeak.innerText);
    }
};


function setMsg(msgElement, text) {
    msgElement.innerText = text;
    speak(text);
}

// 2.1: Pouring Na2Co3 to Measuring Cylinder

function pourbyNa2co3() {
    if (currentStep !== "step1") return;
    currentStep = "step2";
    let bottle = document.getElementById("img17");
    let msg = document.getElementById("text3");
    bottle.style.transform = "translateX(-13.8vw) translateY(-4vh) rotate(-60deg)";
    setMsg(msg, "Pouring Na2CO3 into Measuring Cylinder...");
    setTimeout(() => {
        bottle.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        setMsg(msg, "Now, Click on Measuring Cylinder to pour that 5ml Na2CO3 into conical Flask.");
    }, 3000);
}

// 2.2: Pouring Na2co3 from Measuring Cylinder

function pourbymeasuringCylinder() {
    if (currentStep !== "step2") return;
    currentStep = "step3";
    let cylinder = document.getElementById("img14");
    let msg = document.getElementById("text3");
    cylinder.style.transform = "translateX(-6vw) translateY(8vh) rotate(-90deg)";
    setMsg(msg, "Pouring from Measuring Cylinder into Flask...");
    setTimeout(() => {
        cylinder.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        conicalflask.src = "./images/conicalflask2.png";
        setMsg(msg, "Now, Click on Micropipette to gather 3 drops of Bromo Cresol Green Indicator");
    }, 3000);
}

// 2.3: Gathering Indicator

function pourbymicropippet() {
    if (currentStep !== "step3") return;
    currentStep = "step4";
    let pipette = document.getElementById("img19");
    let msg = document.getElementById("text3");
    pipette.style.transform = "translateX(-4.1vw) translateY(-6vh) rotate(-90deg)";
    setMsg(msg, "Gathering indicator...");
    setTimeout(() => {
        setMsg(msg, "Click Again on micropippet to release 3 drops of Bromo Cresol Green into the Flask.");
    }, 1700);
    pipette.addEventListener("click", () => {
        setTimeout(() => {
            pipette.style.transform = "translateX(-21.2vw) translateY(-15vh) rotate(-90deg)";
            setTimeout(() => {
                pipette.style.transform = "translateX(0) translateY(0) rotate(0deg)";
                setMsg(msg, "Indicator added successfully! Now click on the flask for titration.");
            }, 3000);
        }, 50);
    }, { once: true });
}

// 2.4: Going For Titration

function goingfortitration() {
    if (currentStep !== "step4") return;
    currentStep = "step5";
    let flask = document.getElementById("img13");
    let msg = document.getElementById("text3");
    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-10.8vw) translateY(-1.1vh)";
    setMsg(msg, "Starting Titration... Shake the flask and mix with hcl drop by drop untill the blue color solution changes to yellow.");
    setTimeout(() => {
        flask.classList.add("shake");
        setTimeout(() => {
            flask.classList.remove("shake");
            flask.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            setMsg(msg, "Titration complete! Now click on the Next button to perform the main experiment.");
            flask.src = "/images/conicalflask3.png"
        }, 5000);
    }, 3000);
}

// let thirdSpeak = document.getElementById("text3");
// speak(thirdSpeak.innerText);
window.onload = function () {
    let thirdSpeak = document.getElementById("text3");
    if (thirdSpeak) {
        speak(thirdSpeak.innerText);
    }
};


// 3.1: Pouring Borax to Flask

function pourborax() {
    if (currentStep !== "step1") return;
    currentStep = "step2";
    let borax = document.getElementById("img29");
    let msg = document.getElementById("text3");
    borax.style.transform = "translateX(-15.4vw) translateY(-15vh) rotate(-40deg)";
    setMsg(msg, "Pouring 25g Borax into Flask...");
    setTimeout(() => {
        borax.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        setMsg(msg, "Borax added successfully! Now click on the water beaker to pour 75ml Distilled Water.");
    }, 3000);
}

// 3.2: Pouring Distilled Water
function pourwater() {
    if (currentStep !== "step2") return;
    currentStep = "step3";
    let beaker = document.getElementById("img30");
    let msg = document.getElementById("text3");
    beaker.style.transform = "translateX(-13vw) translateY(-9vh) rotate(-40deg)";
    setMsg(msg, "Pouring Distilled water into Measuring Cylinder to measure 75ml...");
    setTimeout(() => {
        beaker.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        // cyl.src = "./images/measuring-cylinder2.png";
        setMsg(msg, "Now click on the measuring cylinder to pour that 75ml distilled water into the flask.");
    }, 3000);
}

// 3.3: Pouring By Measuring Cylinder
function pourbycylinder() {
    if (currentStep !== "step3") return;
    currentStep = "step4";
    let cyl = document.getElementById("img26");
    let msg = document.getElementById("text3");
    cyl.style.transform = "translateX(-4.5vw) translateY(10vh) rotate(-90deg)";
    setMsg(msg, "Pouring from Measuring Cylinder into Flask...");
    setTimeout(() => {
        cyl.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        flask.src = "./images/conicalflask2.png";
        // cyl.src = "/images/measuring-cylinder.png";
        setMsg(msg, "Now Click On the flask to mix the mixture for 10-15 minutes and take it in Temperature Bath and Set Temperature from Following and Wait for 10 minutes...");
    }, 3000);
}

// 3.4: Temperature Bathing
function goingtobath() {
    if (currentStep !== "step4") return;
    currentStep = "step5";
    let flask = document.getElementById("img22");
    flask.classList.add("shake2");
    setTimeout(() => {
        flask.classList.remove("shake2");
        setTimeout(() => {
            flask.style.transition = "transform 3s ease-in-out";
            flask.style.transform = "translateX(34vw) translateY(-12vh)";
            setTimeout(() => {
                if (tempSetter) tempSetter.style.visibility = "visible";
                if (head) head.style.visibility = "visible";
            }, 3000);
        }, 100);
    }, 3000);
}

// 3.5 Gathering Solution

function gathersolution() {
    if (currentStep !== "step5") return;
    currentStep = "step6";
    let pipette2 = document.getElementById("img27");
    let titrationflask = document.getElementById("img31");
    let msg = document.getElementById("text3");
    pipette2.style.transform = "translateX(-6.5vw) translateY(-14vh) rotate(-90deg)";
    setMsg(msg, "Gathering Borax Solution...");
    setTimeout(() => {
        setMsg(msg, "Click Again on micropippet to release the Borax Solution on Titration Flask.");
        flask.src = "./images/conical flask.png";
    }, 2500);
    pipette2.addEventListener("click", () => {
        setTimeout(() => {
            pipette2.style.transform = "translateX(-12.5vw) translateY(-14vh) rotate(-90deg)";
            setTimeout(() => {
                titrationflask.src = "./images/conicalflask2.png";
                pipette2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
                setMsg(msg, "Borax Solution added to titration flask. Now Add Bromo Cresol Green Indicator by clicking on another Pippet on right next.");
            }, 3000);
        }, 50);
    }, { once: true });
}

// 3.6: Gathering Indicator
function gatherBcg() {
    if (currentStep !== "step6") return;
    currentStep = "step7";
    let pipette2 = document.getElementById("img32");
    let msg = document.getElementById("text3");
    pipette2.style.transform = "translateX(-0.4vw) translateY(-12vh) rotate(-90deg)";
    setMsg(msg, "Gathering Bromo cresol Green Indicator...");
    setTimeout(() => {
        setMsg(msg, "Click Again on micropippet to release the indicator on Titration Flask.");
    }, 1700);
    pipette2.addEventListener("click", () => {
        setTimeout(() => {
            pipette2.style.transform = "translateX(-18.3vw) translateY(-17vh) rotate(-90deg)";
            setTimeout(() => {
                pipette2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
                setMsg(msg, "Indicator added successfully! Now click on the flask for titration.");
            }, 3000);
        }, 50);
    });
}

// 3.7: Titration 2
function goingfortitration2() {
    if (currentStep !== "step7") return;
    currentStep = "step8";
    let flask = document.getElementById("img31");
    let msg = document.getElementById("text3");
    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-5.8vw) translateY(-2.85vh) rotate(0deg)";
    setMsg(msg, "Starting Titration... Shake the flask and mix with standard hcl drop by drop untill the blue color solution changes to yellow.");
    setTimeout(() => {
        flask.classList.add("shake3");
        setTimeout(() => {
            flask.classList.remove("shake3");
            flask.src = "/images/conicalflask3.png";
            flask.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            setMsg(msg, "Titration completed. Take the Reading and complete the calculation.");
        }, 5000);
    }, 3000);
}

// Tempsetter

function temp1() {
    document.querySelector(".temp").innerHTML = "<h6>20<sup>o</sup>C</h6>";
    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp2() {
    document.querySelector(".temp").innerHTML = "<h6>30<sup>o</sup>C</h6>";
    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp3() {
    document.querySelector(".temp").innerHTML = "<h6>40<sup>o</sup>C</h6>";
    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp4() {
    document.querySelector(".temp").innerHTML = "<h6>50<sup>o</sup>C</h6>";
    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp5() {
    document.querySelector(".temp").innerHTML = "<h6>60<sup>o</sup>C</h6>";
    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}