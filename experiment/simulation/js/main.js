let currentStep = "step1"; // Controls the experiment step

// Function to speak text
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    text_speak.lang = "en-US";
    window.speechSynthesis.speak(text_speak);
}

// Pour Na2CO3 into Measuring Cylinder
function pourbyNa2co3() {
    if (currentStep !== "step1") return;
    currentStep = "step2";

    let bottle = document.getElementById("img17");
    let msg = document.getElementById("text2");

    bottle.style.transform = "translateX(-170px) translateY(-25px) rotate(-50deg)";
    msg.innerText = "Pouring Na2CO3 into Measuring Cylinder...";

    setTimeout(() => {
        bottle.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now, Click on Measuring Cylinder to pour that 5ml Na2Co3 into conical Flask.";
    }, 3000);
}

// Pour Measuring Cylinder into Flask
function pourbymeasuringCylinder() {
    if (currentStep !== "step2") return;
    currentStep = "step3";

    let cylinder = document.getElementById("img14");
    let msg = document.getElementById("text2");

    cylinder.style.transform = "translateX(-80px) translateY(40px) rotate(-90deg)";
    msg.innerText = "Pouring from Measuring Cylinder into Flask...";

    setTimeout(() => {
        cylinder.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now, Click on Micropipette to gather 3 drops of Bromo Cresol Green Indicator";
    }, 3000);
}

// Pour Indicator with Micropipette
function pourbymicropippet() {
    if (currentStep !== "step3") return;
    currentStep = "step4";

    let pipette = document.getElementById("img19");
    let msg = document.getElementById("text2");

    pipette.style.transform = "translateX(-40px) translateY(-40px) rotate(-90deg)";
    msg.innerText = "Gathering indicator...";

    setTimeout(() => {
        pipette.style.transform = "translateX(-260px) translateY(-85px) rotate(-90deg)";
        msg.innerText = "Click Again on micropippet to release 3drops of Bromo Cresol Green into the Flask.";

        setTimeout(() => {
            pipette.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            msg.innerText = "Indicator added successfully! Now click on the flask for titration.";
        }, 3000);

    }, 3000);
}

// Perform Titration
function goingfortitration() {
    if (currentStep !== "step4") return;
    currentStep = "step5";

    let flask = document.getElementById("img13");
    let msg = document.getElementById("text2");

    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-138px) translateY(-7px)";
    msg.innerText = "Starting Titration... Shake the flask and mix with hcl drop by drop untill the blue color solution changes to yellow.";

    setTimeout(() => {
        flask.classList.add("shake");
        setTimeout(() => {
            flask.classList.remove("shake");
            flask.style.transition = "none";
            flask.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            msg.innerText = "Titration completes!.Now click on the Next button To perform the main Experiment.";
        }, 5000);
    }, 3000);
}

// Pour Borax into Flask
function pourborax() {
    if (currentStep !== "step1") return;
    currentStep = "step2";

    let borax = document.getElementById("img29");
    let msg = document.getElementById("text2");

    borax.style.transform = "translateX(-215px) translateY(-83px) rotate(-40deg)";
    msg.innerText = "Pouring Borax into Flask...";

    setTimeout(() => {
        borax.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Borax added successfully! Now click on the water beaker.";
    }, 3000);
}

// Pour Water into Flask
function pourwater() {
    if (currentStep !== "step2") return;
    currentStep = "step3";

    let beaker = document.getElementById("img30");
    let msg = document.getElementById("text2");

    beaker.style.transform = "translateX(-200px) translateY(-60px) rotate(-40deg)";
    msg.innerText = "Pouring Water into Flask...";

    setTimeout(() => {
        beaker.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Water added successfully! Now click on the flask to move it to the water bath.";
    }, 3000);
}
// Measuring Cylinder to Flask
function pourbycylinder() {
    if (currentStep !== "step3") return;
    currentStep = "step4";

    let cyl = document.getElementById("img26");
    let msg = document.getElementById("text2");

    cyl.style.transform = "translateX(-60px) translateY(40px) rotate(-90deg)";
    msg.innerText = "Pouring from Measuring Cylinder into Flask...";

    setTimeout(() => {
        cyl.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now, Click on Micropipette to gather 3 drops of Bromo Cresol Green Indicator";
    }, 3000);
}
// Move Flask to Water Bath
function goingtobath() {
    if (currentStep !== "step4") return;
    currentStep = "step5";

    let flask = document.getElementById("img22");

    flask.classList.add("shake2");

    setTimeout(() => {
        flask.classList.remove("shake2");

        setTimeout(() => {
            flask.style.transition = "transform 3s ease-in-out";
            flask.style.transform = "translateX(460px) translateY(-45px)";

            setTimeout(() => {
                flask.style.transform = "translateX(0) translateY(0)";
                currentStep = "step9";
                let msg = document.getElementById("text2");
                msg.innerText = "Flask moved successfully! Now click on the micropipette to add the indicator.";
            }, 5000);

        }, 100);

    }, 3000);
}

// Add Indicator to Flask
function addingindicator() {
    if (currentStep !== "step5") return;
    currentStep = "step6";

    let mp = document.getElementById("img27");
    let msg = document.getElementById("text2");

    mp.style.transform = "translateX(60px) translateY(-45px) rotate(-90deg)";
    msg.innerText = "Adding Indicator...";

    setTimeout(() => {
        mp.style.transform = "translateX(-105px) translateY(-80px) rotate(-90deg)";

        setTimeout(() => {
            mp.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            msg.innerText = "Indicator added successfully! Experiment completed.";
        }, 3000);

    }, 3000);
}
// function pourbymicropippet() {
//     if (currentStep !== "step3") return;
//     currentStep = "step4";

//     let pipette = document.getElementById("img19");
//     let msg = document.getElementById("text2");

//     pipette.style.transform = "translateX(-40px) translateY(-40px) rotate(-90deg)";
//     msg.innerText = "Gathering indicator...";

//     setTimeout(() => {
//         pipette.style.transform = "translateX(-260px) translateY(-85px) rotate(-90deg)";
//         msg.innerText = "Click Again on micropippet to release 3drops of Bromo Cresol Green into the Flask.";

//         setTimeout(() => {
//             pipette.style.transform = "translateX(0) translateY(0) rotate(0deg)";
//             msg.innerText = "Indicator added successfully! Now click on the flask for titration.";
//         }, 3000);

//     }, 3000);
// }