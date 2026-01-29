let currentStep = "step1";
let tempSetter = document.querySelector(".tempSetter");
let head = document.querySelector(".head");
let flask = document.getElementById("img22"); 
let conicalflask = document.getElementById("img13"); 
let cylinder = document.getElementById("img14");
let cyl = document.getElementById("img26");
let selectedTemp = null;
let observationCount = 0;
let currentSet = 1; 
let observations = [];



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
    bottle.style.transform = "translateX(-13.8vw) translateY(-8vh) rotate(-60deg)";
    setMsg(msg, "Pouring Na2CO3 into Measuring Cylinder...");
    setTimeout(() => {
        bottle.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        cylinder.src = "./images/measuring-cylinder4.png";
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
        cylinder.src = "./images/measuring-cylinder3.png";
        setMsg(msg, "Now, Click on Micropipette to gather 3 drops of Bromo Cresol Green Indicator");
    }, 3000);
}

// 2.3: Gathering Indicator

function pourbymicropippet() {
    if (currentStep !== "step3") return;
    currentStep = "step4";

    let pipette = document.getElementById("img19");
    let cap = document.getElementById("cap");
    let bottle = document.getElementById("img18");
    let msg = document.getElementById("text3");

    cap.classList.add("cap-open");
    bottle.classList.add("bottle-open");

    pipette.style.transform =
        "translateX(-4.1vw) translateY(-6vh) rotate(-90deg)";
    setMsg(msg, "Opening indicator bottle and gathering indicator...");

    setTimeout(() => {
        setMsg(
            msg,
            "Click again on Micropipette to release 3 drops of indicator into the flask."
        );
    }, 1700);

    pipette.addEventListener(
        "click",
        () => {
            setTimeout(() => {
                pipette.style.transform =
                    "translateX(-21.2vw) translateY(-15vh) rotate(-90deg)";

                setTimeout(() => {
                    pipette.style.transform =
                        "translateX(0) translateY(0) rotate(0deg)";

                    cap.classList.remove("cap-open");
                    bottle.classList.remove("bottle-open");

                    setMsg(
                        msg,
                        "Indicator added successfully! Now click on the flask for titration."
                    );
                }, 3000);
            }, 50);
        },
        { once: true }
    );
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
            flask.src = "./images/conicalflask3.png"
            flask.style.transform = "translateX(0) translateY(0) rotate(0deg)";
            setMsg(msg, "Titration complete! Now click on the Next button to perform the main experiment.");
        }, 5000);
    }, 3000);
}
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
    let flsk = document.getElementById("img22");
    let msg = document.getElementById("text3");
    borax.style.transform = "translateX(-15.4vw) translateY(-15vh) rotate(-40deg)";
    setMsg(msg, "Pouring 25g Borax into Flask...");
    setTimeout(() => {
        borax.style.transform = "translateX(0) translateY(0) rotate(0deg)";
        flsk.src = "./images/conical flask4.png";
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
        cyl.src = "./images/measuring-cylinder2.png";
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
        cyl.src = "./images/measuring-cylinder.png";
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

    let pipette2 = document.getElementById("img27");     
    let titrationflask = document.getElementById("img31");
    let mainFlask = document.getElementById("img22");
    let msg = document.getElementById("text3");

    let stage = 0;

    pipette2.onclick = null;
    pipette2.style.transform = "translateX(0) translateY(0) rotate(0deg)";

    pipette2.onclick = function () {

        if (stage === 0) {

            pipette2.style.transform =
                "translateX(-6.5vw) translateY(-14vh) rotate(-90deg)";

            setMsg(msg, "Gathering 5 ml Borax solution...");

            stage = 1;
            return;
        }

        if (stage === 1) {

            pipette2.style.transform =
                "translateX(-12.5vw) translateY(-14vh) rotate(-90deg)";

            setMsg(msg, "Transferring Borax solution to titration flask...");

            setTimeout(() => {

                titrationflask.src = "./images/conicalflask2.png";

                mainFlask.src = "./images/conical flask.png";

                pipette2.style.transform =
                    "translateX(0) translateY(0) rotate(0deg)";

                currentStep = "step6";

                setMsg(
                    msg,
                    "Borax solution transferred. Now click on Micropipette to add Bromo Cresol Green indicator."
                );

                pipette2.onclick = null;

                gatherBcg();

            }, 2500);
        }
    };
}




// 3.6: Gathering Indicator

function gatherBcg() {
    if (currentStep !== "step6") return;

    let pipette = document.getElementById("img32");
    let cap = document.getElementById("cap2");
    let bottle = document.getElementById("img28");
    let msg = document.getElementById("text3");

    let stage = 0;

    pipette.style.transform = "translateX(0) translateY(0) rotate(0deg)";
    pipette.onclick = null;

    pipette.onclick = function () {

        if (stage === 0) {
            cap.classList.add("cap-open");
            bottle.classList.add("bottle-open");

            pipette.style.transform =
                "translateX(-0.4vw) translateY(-12vh) rotate(-90deg)";

            setMsg(
                msg,
                "Opening indicator bottle and collecting Bromo Cresol Green..."
            );

            stage = 1;
            return;
        }

        if (stage === 1) {

            pipette.style.transform =
                "translateX(-18.3vw) translateY(-17vh) rotate(-90deg)";

            setMsg(msg, "Adding indicator to titration flask...");

            setTimeout(() => {

                pipette.style.transform =
                    "translateX(0) translateY(0) rotate(0deg)";

                cap.classList.remove("cap-open");
                bottle.classList.remove("bottle-open");

                currentStep = "step7";

                setMsg(
                    msg,
                    "Indicator added successfully! Now click on the flask for titration."
                );

                pipette.onclick = null;

            }, 2500);
        }
    };
}






// 3.7: Titration 2

function goingfortitration2() {
    if (currentStep !== "step7") return;
    currentStep = "step8";

    let flask = document.getElementById("img31");
    let msg = document.getElementById("text3");

    flask.style.transition = "transform 3s ease-in-out";
    flask.style.transform = "translateX(-5.8vw) translateY(-2.85vh)";

    setMsg(
        msg,
        "Starting Titration... Shake the flask and mix with standard HCl until color changes to yellow."
    );

    setTimeout(() => {
        flask.classList.add("shake3");
    }, 3000);

    setTimeout(() => {
        flask.classList.remove("shake3");
        flask.src = "./images/conicalflask3.png";

        flask.style.transition = "transform 2s ease-in-out";
        flask.style.transform = "translateX(0) translateY(0)";

        setMsg(
            msg,
            `Titration completed for SET-${String.fromCharCode(64 + currentSet)}. Observation recorded below.`
        );

        showKspResult(selectedTemp);
        currentSet++;

    }, 8000); 
}



// Tempsetter

function temp1() {
    selectedTemp = 20; 
    document.querySelector(".temp").innerHTML = "<h6>20<sup>o</sup>C</h6>";
    afterTempSet();  

    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);

    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(
            document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet."
        );
    }, 5000);
    
}

function temp2() {
    selectedTemp = 30; 
    document.querySelector(".temp").innerHTML = "<h6>30<sup>o</sup>C</h6>";
    afterTempSet();

    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp3() {
    selectedTemp = 40; 
    document.querySelector(".temp").innerHTML = "<h6>40<sup>o</sup>C</h6>";
    afterTempSet();

    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp4() {
    selectedTemp = 50; 
    document.querySelector(".temp").innerHTML = "<h6>50<sup>o</sup>C</h6>";
    afterTempSet();

    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

function temp5() {
    selectedTemp = 60; 
    document.querySelector(".temp").innerHTML = "<h6>60<sup>o</sup>C</h6>";
    afterTempSet();

    if (tempSetter) setTimeout(() => tempSetter.style.visibility = "hidden", 1000);
    if (head) setTimeout(() => head.style.visibility = "hidden", 1000);
    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(document.getElementById("text3"), "Borax Solution is Heated, Now gather 5ml Borax Solution through Micropippet.");
    }, 5000);
}

const kspData = {
    20: { T: 293, invT: 0.0034, lnKsp: -3.888 },
    30: { T: 303, invT: 0.0033, lnKsp: -2.672 },
    40: { T: 313, invT: 0.0032, lnKsp: -1.373 },
    50: { T: 323, invT: 0.0031, lnKsp: -0.066 },
    60: { T: 333, invT: 0.0030, lnKsp: 1.437 }
};

function showKspResult(temp) {
    const resultBox = document.getElementById("resultBox");
    const resultText = document.getElementById("resultText");

    const data = kspData[temp];
    if (!data) return;

    observations.push({
        set: `SET-${String.fromCharCode(64 + currentSet)}`,
        temperature: temp,
        T: data.T,
        invT: data.invT,
        lnKsp: data.lnKsp
    });

    resultText.innerHTML = "";

    const obs = observations[observations.length - 1];

    const obsDiv = document.createElement("div");
    obsDiv.className = "obsBlock";
    obsDiv.innerHTML = `
        <b>${obs.set}</b><br>
        Temperature: ${obs.temperature}°C<br>
        T (K): ${obs.T}<br>
        1/T (K⁻¹): ${obs.invT}<br>
        ln Ksp: ${obs.lnKsp}
    `;

    resultText.appendChild(obsDiv);
    resultBox.style.display = "block";

    const oldBtn = document.getElementById("nextSetBtn");
    if (oldBtn) oldBtn.remove();

    const nextBtn = document.createElement("button");
    nextBtn.id = "nextSetBtn";

    if (currentSet < 3) {
        nextBtn.innerText =
            `SET-${String.fromCharCode(64 + currentSet + 1)} (Next Temperature)`;
        nextBtn.onclick = resetForNextSet;
    } else {
        nextBtn.innerText = "Get the Result";
        nextBtn.onclick = showFinalResult;
    }

    resultText.appendChild(nextBtn);
}





function startSetB() {
    currentStep = "step4";
    selectedTemp = null;

    setMsg(
        document.getElementById("text3"),
        "SET-B started. Place flask in temperature bath and select another temperature."
    );

    if (tempSetter) tempSetter.style.visibility = "visible";
    if (head) head.style.visibility = "visible";
}

function resetForNextSet() {

    // FULL restart like SET-A
    currentStep = "step1";
    selectedTemp = null;

    document.getElementById("resultBox").style.display = "none";

    // Reset visuals
    document.getElementById("img22").src = "./images/conical flask.png";
    document.getElementById("img31").src = "./images/conical flask.png";

    // 🔥 IMPORTANT: re-arm pipettes
    document.getElementById("img27").onclick = null;
    document.getElementById("img32").onclick = null;

    setMsg(
        document.getElementById("text3"),
        `SET-${String.fromCharCode(64 + currentSet)} started. Pour 25g Borax into the flask.`
    );

    // Hide temperature UI
    if (tempSetter) tempSetter.style.visibility = "hidden";
    if (head) head.style.visibility = "hidden";
}



function afterTempSet() {
    currentStep = "step5";

    if (tempSetter) tempSetter.style.visibility = "hidden";
    if (head) head.style.visibility = "hidden";

    setTimeout(() => {
        flask.style.transform = "translateX(0) translateY(0)";
        setMsg(
            document.getElementById("text3"),
            "Borax solution heated. Now gather 5ml borax solution using micropipette."
        );

        gathersolution(); // 🔥 re-arm micropipette for every SET
    
    }, 4000);


}



function showFinalResult() {

    // 🔥 CHANGE HEADING TEXT
    document.getElementById("panelTitle").innerText = "RESULT";

    // 🔥 HIDE INSTRUCTION TEXT
    document.getElementById("text3").style.display = "none";

    // 🔥 HIDE OBSERVATION BOX
    document.getElementById("resultBox").style.display = "none";

    // 🔥 SHOW RESULT SECTION
    document.getElementById("resultSection").style.display = "block";

    // ---------- DATA ----------
    const R = 8.314;

    const invT = observations.map(o => o.invT);
    const lnKsp = observations.map(o => o.lnKsp);
    const T = observations.map(o => o.T);
    const Ksp = lnKsp.map(v => Math.exp(v));

    // ---------- LINEAR REGRESSION ----------
    const n = invT.length;
    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;

    for (let i = 0; i < n; i++) {
        sumX += invT[i];
        sumY += lnKsp[i];
        sumXY += invT[i] * lnKsp[i];
        sumX2 += invT[i] * invT[i];
    }

    const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
    const intercept = (sumY - slope * sumX) / n;

    const deltaH = -slope * R / 1000; // kJ/mol
    const deltaS = intercept * R;     // J/mol·K

    // ---------- DISPLAY ΔH & ΔS ----------
    document.getElementById("thermoResult").innerHTML = `
    Thermodynamic Parameters<br><br>
    ΔH = ${deltaH.toFixed(2)} kJ mol⁻¹<br>
    ΔS = ${deltaS.toFixed(2)} J mol⁻¹ K⁻¹
`;


    // ---------- PLOT 1: lnKsp vs 1/T ----------
    plotGraph(
        "lnkspPlot",
        invT,
        lnKsp,
        "1/T (K⁻¹)",
        "ln Ksp",
        "ln Ksp vs 1/T"
    );

    // ---------- PLOT 2: Ksp vs T ----------
    plotGraph(
        "kspPlot",
        T,
        Ksp,
        "Temperature (K)",
        "Ksp",
        "Ksp vs Temperature"
    );
}

function plotGraph(canvasId, xData, yData, xLabel, yLabel, title) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const padding = 50;
    const w = canvas.width;
    const h = canvas.height;

    const xMin = Math.min(...xData);
    const xMax = Math.max(...xData);
    const yMin = Math.min(...yData);
    const yMax = Math.max(...yData);

    const scaleX = x =>
        padding + (x - xMin) * (w - 2 * padding) / (xMax - xMin);

    const scaleY = y =>
        h - padding - (y - yMin) * (h - 2 * padding) / (yMax - yMin);

    // Axes
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, h - padding);
    ctx.lineTo(w - padding, h - padding);
    ctx.strokeStyle = "#000";
    ctx.stroke();

    // Labels
    ctx.font = "12px Arial";
    ctx.fillText(title, w / 2 - 60, 20);
    ctx.fillText(xLabel, w / 2 - 30, h - 10);
    ctx.save();
    ctx.translate(15, h / 2 + 30);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();

    // Plot points + values
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "red";

    ctx.beginPath();
    xData.forEach((x, i) => {
        const px = scaleX(x);
        const py = scaleY(yData[i]);

        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);

        // Point
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, 2 * Math.PI);
        ctx.fill();

        // Value label
        ctx.font = "11px Arial";
        ctx.fillText(
            `(${x.toFixed(4)}, ${yData[i].toFixed(2)})`,
            px + 5,
            py - 5
        );
    });

    ctx.stroke();
}
