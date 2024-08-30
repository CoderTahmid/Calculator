let calcDisplay = document.querySelector(".calc-display");
let calcButton = document.querySelector(".calc-button");
let clearButton = document.querySelector(".clear-button");
let x = true;

document.querySelector(".button-percent").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "%";
    } else {
        calcDisplay.value+="%";
    };

    // if (x = true) {
    //     clearButton.addEventListener("click", () => {
    //         console.log("king");
    //     })
    // }
});

document.querySelector(".button-c").addEventListener("click", () => {
    calcDisplay.value = "";
});
document.querySelector(".button-x-square").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "";
    } else {
        calcDisplay.value*=calcDisplay.value;
    };
});
document.querySelector(".button-7").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 7;
    } else {
        calcDisplay.value+=7; // calcDisplay.value = calcDisplay.value + 7;
    };
});
document.querySelector(".button-8").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 8;
    } else {
        calcDisplay.value+=8;
    };
});
document.querySelector(".button-9").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 9;
    } else {
        calcDisplay.value+=9;
    };
});
document.querySelector(".button-devide").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "/";
    } else {
        calcDisplay.value+="/";
    };
});
document.querySelector(".button-4").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 4;
    } else {
        calcDisplay.value+=4;
    };
});
document.querySelector(".button-5").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 5;
    } else {
        calcDisplay.value+=5; 
    };
});
document.querySelector(".button-6").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 6;
    } else {
        calcDisplay.value+=6;
    };
});
document.querySelector(".button-into").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "*";
    } else {
        calcDisplay.value+="*";
    };
});
document.querySelector(".button-1").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 1;
    } else {
        calcDisplay.value+=1;
    };
});
document.querySelector(".button-2").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "2";
    } else {
        calcDisplay.value+=2;
    };
});
document.querySelector(".button-3").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 3;
    } else {
        calcDisplay.value+=3;
    };
});
document.querySelector(".button-minus").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "-";
    } else {
        calcDisplay.value+="-";
    };
});
document.querySelector(".button-dot").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = ".";
    } else {
        calcDisplay.value+=".";
    };
});
document.querySelector(".button-0").addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = 0;
    } else {
        calcDisplay.value+=0;
    };
});
document.querySelector(".button-plus").addEventListener("click", () => {
    if (calcDisplay.value === "") {
        calcDisplay.value = "+";
    } else {
        calcDisplay.value+="+";
    };
});

