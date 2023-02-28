"use strict";

let num1 = null;
let num2 = null;
let operator = null;

//Button Selectors

const oneBtn = document.querySelector("#btn-one");
const twoBtn = document.querySelector("#btn-two");
const threeBtn = document.querySelector("#btn-three");
const fourBtn = document.querySelector("#btn-four");
const fiveBtn = document.querySelector("#btn-five");
const sixBtn = document.querySelector("#btn-six");
const sevenBtn = document.querySelector("#btn-seven");
const eightBtn = document.querySelector("#btn-eight");
const nineBtn = document.querySelector("#btn-nine");
const zeroBtn = document.querySelector("#btn-zero");

const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#delete-btn");

const addBtn = document.querySelector("#btn-add");
const subtractBtn = document.querySelector("#btn-subtract");
const divideBtn = document.querySelector("#btn-divide");
const multiplyBtn = document.querySelector("#btn-multiply");
const equalsBtn = document.querySelector("#btn-equals");

//Display Selector

const calcDisplay = document.querySelector(".calc-display");

//Math Operator Functions

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

// Number Button Event Listeners

let numberButtons = () => {
  oneBtn.addEventListener("click", function () {
    calcDisplay.textContent += 1;
  });

  twoBtn.addEventListener("click", function () {
    calcDisplay.textContent += 2;
  });

  threeBtn.addEventListener("click", function () {
    calcDisplay.textContent += 3;
  });

  fourBtn.addEventListener("click", function () {
    calcDisplay.textContent += 4;
  });

  fiveBtn.addEventListener("click", function () {
    calcDisplay.textContent += 5;
  });

  sixBtn.addEventListener("click", function () {
    calcDisplay.textContent += 6;
  });

  sevenBtn.addEventListener("click", function () {
    calcDisplay.textContent += 7;
  });

  eightBtn.addEventListener("click", function () {
    calcDisplay.textContent += 8;
  });

  nineBtn.addEventListener("click", function () {
    calcDisplay.textContent += 9;
  });

  zeroBtn.addEventListener("click", function () {
    calcDisplay.textContent += 0;
  });
};
numberButtons();

//Operator Button Event Listeners

let operatorButtons = () => {
  addBtn.addEventListener("click", function () {
    num1 = Number(calcDisplay.textContent);
    operator = add;
  });

  subtractBtn.addEventListener("click", function () {
    num1 = Number(calcDisplay.textContent);
    operator = subtract;
  });

  multiplyBtn.addEventListener("click", function () {
    num1 = Number(calcDisplay.textContent);
    operator = multiply;
  });

  divideBtn.addEventListener("click", function () {
    num1 = Number(calcDisplay.textContent);
    operator = divide;
  });

  equalsBtn.addEventListener("click", function () {
    operate();
  });
};

operatorButtons();

const operate = (operator, num1, num2) => {};

clearBtn.addEventListener("click", () => {
  calcDisplay.textContent = "";
  num1 = null;
});
