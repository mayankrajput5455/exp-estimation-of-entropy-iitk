let currentStep = "step1"; // Controls the experiment step
let tempSetter = document.querySelector(".tempSetter");
let flask = document.getElementById("img22"); 
let cylinder = document.getElementById("img14");

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

    bottle.style.transform = "translateX(-13.8vw) translateY(-4vh) rotate(-60deg)";
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

    cylinder.style.transform = "translateX(-6vw) translateY(8vh) rotate(-90deg)";
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

    pipette.style.transform = "translateX(-4.1vw) translateY(-6vh) rotate(-90deg)";
    msg.innerText = "Gathering indicator...";
    setTimeout(()=>{
        msg.innerText = "Click Again on micropippet to release 3 drops of Bromo Cresol Green into the Flask.";
    },1700)
    pipette.addEventListener("click",()=>{
        setTimeout(() => {
            pipette.style.transform = "translateX(-21.2vw) translateY(-15vh) rotate(-90deg)";
            msg.innerText = "Click Again on micropippet to release 3 drops of Bromo Cresol Green into the Flask.";
            
            setTimeout(() => {
                pipette.style.transform = "translateX(0) translateY(0) rotate(0deg)";
                msg.innerText = "Indicator added successfully! Now click on the flask for titration.";
            }, 3000);
        }, 50);
    },50)
}

// Performing Titration
function goingfortitration() {
    if (currentStep !== "step4") return;
    currentStep = "step5";

    let flask = document.getElementById("img13");
    let msg = document.getElementById("text2");

    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-10.8vw) translateY(-1.1vh)";
    msg.innerText = "Starting Titration... Shake the flask and mix with hcl drop by drop untill the blue color solution changes to yellow.";

    setTimeout(() => {
        flask.classList.add("shake");
        flask.style.transition = "transform 0.5s ease-in-out";
        setTimeout(() => {
            flask.classList.remove("shake");
            
            // Move flask back smoothly
            flask.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            // flask.style.transition = "transform 3s ease-in-out";
            msg.innerText = "Titration complete! Now click on the Next button to perform the main experiment.";
        }, 5000); 
        flask.style.transition = "transform 0.5s ease-in-out";
    }, 3000);
}


// Pour Borax into Flask
function pourborax() {
    if (currentStep !== "step1") return;
    currentStep = "step2";

    let borax = document.getElementById("img29");
    let msg = document.getElementById("text3");

    borax.style.transform = "translateX(-15.4vw) translateY(-15vh) rotate(-40deg)";
    msg.innerText = "Pouring 25g Borax into Flask...";

    setTimeout(() => {
        borax.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Borax added successfully! Now click on the water beaker to pour 75ml Distilled Water.";
    }, 3000);
}

// Pour Water into Cylinder
function pourwater() {
    if (currentStep !== "step2") return;
    currentStep = "step3";

    let beaker = document.getElementById("img30");
    let msg = document.getElementById("text3");

    beaker.style.transform = "translateX(-13vw) translateY(-9vh) rotate(-40deg)";
    msg.innerText = "Pouring Distilled water into Measuring Cylinder to measure 75ml...";

    setTimeout(() => {
        beaker.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now click on the measuring cylinder to pour that 75ml distilled water into the flask.";
    }, 3000);
}


// Measuring Cylinder to Flask
function pourbycylinder() {
    if (currentStep !== "step3") return;
    currentStep = "step4";

    let cyl = document.getElementById("img26");
    let msg = document.getElementById("text3");

    cyl.style.transform = "translateX(-4.5vw) translateY(10vh) rotate(-90deg)";
    msg.innerText = "Pouring from Measuring Cylinder into Flask...";

    setTimeout(() => {
        cyl.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        msg.innerText = "Now Click On the flask to mix the mixture for 10-15 minutes and take it in Temperature Bath and Set Temperature from Following and Wait for 10 minutes...";
    }, 3000);

}
// Going for bath

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
                if (tempSetter) {
                    tempSetter.style.visibility = "visible";
                }
            }, 3000);
            
        }, 100);

    }, 3000);
}

// Gathering Borax solution from flask

function gathersolution(){
    if (currentStep !== "step5") return;
    currentStep = "step6";
    let pipette2 = document.getElementById("img27");
    let msg = document.getElementById("text3");
    
    pipette2.style.transform = "translateX(-6.5vw) translateY(-14vh) rotate(-90deg)";
    msg.innerText = "Gathering Borax Solution...";
    setTimeout(()=>{
        msg.innerText = "Click Again on micropippet to release the Borax Solution on Titration Flask.";
    },1700)
    pipette2.addEventListener("click",()=>{
        setTimeout(() => {
            pipette2.style.transform = "translateX(-12.5vw) translateY(-14vh) rotate(-90deg)";
            setTimeout(() => {
                pipette2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
                msg.innerText = "Borax Solution added to titration flask. Now Add Bromo Cresol Green Indicator by clicking on another Pippet on right next.";
            }, 3000);
        }, 50);
    },{ once: true }) 
}

//Gathering Indicator
function gatherBcg(){
    if (currentStep !== "step6") return;
    currentStep = "step7";
    let pipette2 = document.getElementById("img32")
    let msg = document.getElementById("text3");
    
    pipette2.style.transform = "translateX(-0.4vw) translateY(-12vh) rotate(-90deg)";
    msg.innerText = "Gathering Bromo cresol Green Indicator...";
    setTimeout(()=>{
        msg.innerText = "Click Again on micropippet to release the indicator on Titration Flask.";
    },1700)
    pipette2.addEventListener("click",()=>{
        setTimeout(() => {
            pipette2.style.transform = "translateX(-18.3vw) translateY(-17vh) rotate(-90deg)";
            setTimeout(() => {
                pipette2.style.transform = "translateX(0) translateY(0) rotate(0deg)";
                msg.innerText = "Indicator added successfully! Now click on the flask for titration.";
            }, 3000);
        }, 50);
    }) 
}

// Going for Titration
function goingfortitration2() {
    if (currentStep !== "step7") return;
    currentStep = "step8";

    let flask = document.getElementById("img31");
    let msg = document.getElementById("text3");

    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-5.8vw) translateY(-2.85vh) rotate(0deg)";
    msg.innerText = "Starting Titration... Shake the flask and mix with standard hcl drop by drop untill the blue color solution changes to yellow.";

    setTimeout(() => {
        flask.classList.add("shake3");
        setTimeout(() => {
            flask.classList.remove("shake3");
            flask.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            msg.innerHTML = "Titration completed. <br>Take the Reading and complete the calculation as well as experiment.";
        }, 5000); 
    }, 3000);
}

// Temp Setter

function temp1() {
        document.querySelector(".temp").innerHTML = "<h6>20<sup>o</sup>C</h6>";
        if (tempSetter) {
            setTimeout(()=>{
                tempSetter.style.visibility = "hidden";
            },1000)
        }
        setTimeout(() => {
            flask.style.transform = "translateX(0) translateY(0)";
            let msg = document.getElementById("text3");
            msg.innerText = "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.";
        }, 5000);   
}

function temp2() {
        document.querySelector(".temp").innerHTML = "<h6>30<sup>o</sup>C</h6>";
        if (tempSetter) {
            setTimeout(()=>{
                tempSetter.style.visibility = "hidden";
            },1000)
        }
        setTimeout(() => {
            flask.style.transform = "translateX(0) translateY(0)";
            let msg = document.getElementById("text3");
            msg.innerText = "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.";
        }, 5000);
    }

    function temp3() {
        document.querySelector(".temp").innerHTML = "<h6>40<sup>o</sup>C</h6>";
        if (tempSetter) {
            setTimeout(()=>{
                tempSetter.style.visibility = "hidden";
            },1000)
        }
        setTimeout(() => {
            flask.style.transform = "translateX(0) translateY(0)";
            let msg = document.getElementById("text3");
            msg.innerText = "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.";
        }, 5000);
}

function temp4() {
        document.querySelector(".temp").innerHTML = "<h6>50<sup>o</sup>C</h6>";
        if (tempSetter) {
            setTimeout(()=>{
                tempSetter.style.visibility = "hidden";
            },1000)
        }
        setTimeout(() => {
            flask.style.transform = "translateX(0) translateY(0)";
            let msg = document.getElementById("text3");
            msg.innerText = "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.";
        }, 5000);
}

function temp5() {
    document.querySelector(".temp").innerHTML = "<h6>60<sup>o</sup>C</h6>";
        if (tempSetter) {
            setTimeout(()=>{
                tempSetter.style.visibility = "hidden";
            },1000)
        }
        setTimeout(() => {
            flask.style.transform = "translateX(0) translateY(0)";
            let msg = document.getElementById("text3");
            msg.innerText = "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.";
        }, 5000);
}