let calcDisplay = document.querySelector(".calc-display");
let calcButton = document.querySelector(".calc-button");
let buttonPercent = document.querySelector(".button-percent");
let buttonC = document.querySelector(".button-c");
let clearButton = document.querySelector(".clear-button");
let buttonXSquare = document.querySelector(".button-x-square");
let button7 = document.querySelector(".button-7");
let button8 = document.querySelector(".button-8");
let button9 = document.querySelector(".button-9");
let devideButton = document.querySelector(".button-devide");
let button4 = document.querySelector(".button-4");
let button5 = document.querySelector(".button-5");
let button6 = document.querySelector(".button-6");
let intoButton = document.querySelector(".button-into");
let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
let minusButton = document.querySelector(".button-minus");
let dotButton = document.querySelector(".button-dot");  
let button0 = document.querySelector(".button-0");
let plusButton = document.querySelector(".button-plus");

buttonPercent.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "%";
    } else {
        calcDisplay.value = calcDisplay.value + "%";
    };
});

buttonC.addEventListener("click", () => {
    calcDisplay.value = "";
});
clearButton.addEventListener("click", () => {
    console.log("king");
});
buttonXSquare.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "";
    } else {
        calcDisplay.value = calcDisplay.value * calcDisplay.value;
    };
});
button7.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "7";
    } else {
        calcDisplay.value = calcDisplay.value + "7";
    };
});
button8.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "8";
    } else {
        calcDisplay.value = calcDisplay.value + "8";
    };
});
button9.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "9";
    } else {
        calcDisplay.value = calcDisplay.value + "9";
    };
});
devideButton.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "/";
    } else {
        calcDisplay.value = calcDisplay.value + "/";
    };
});
button4.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "4";
    } else {
        calcDisplay.value = calcDisplay.value + "4";
    };
});
button5.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "5";
    } else {
        calcDisplay.value = calcDisplay.value + "5";
    };
});
button6.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "6";
    } else {
        calcDisplay.value = calcDisplay.value + "6";
    };
});
intoButton.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "*";
    } else {
        calcDisplay.value = calcDisplay.value + "*";
    };
});
button1.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "1";
    } else {
        calcDisplay.value = calcDisplay.value + "1";
    };
});
button2.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "2";
    } else {
        calcDisplay.value = calcDisplay.value + "2";
    };
});
button3.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "3";
    } else {
        calcDisplay.value = calcDisplay.value + "3";
    };
});
minusButton.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "-";
    } else {
        calcDisplay.value = calcDisplay.value + "-";
    };
});
dotButton.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = ".";
    } else {
        calcDisplay.value = calcDisplay.value + ".";
    };
});
button0.addEventListener("click", () => {
    if (calcDisplay.value === ""){
        calcDisplay.value = "0";
    } else {
        calcDisplay.value = calcDisplay.value + "0";
    };
});
plusButton.addEventListener("click", () => {
    if (calcDisplay.value === "") {
        calcDisplay.value = "+";
    } else {
        calcDisplay.value = calcDisplay.value + "+";
    };
});





