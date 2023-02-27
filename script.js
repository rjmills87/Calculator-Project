"use strict";

let num1;
let num2;

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
  let sum = num1 + num2;
  return sum;
};
console.log(add(7, 2));

const subtract = (num1, num2) => {
  let sum = num1 - num2;
  return sum;
};
console.log(subtract(7, 2));

const multiply = (num1, num2) => {
  let sum = num1 * num2;
  return sum;
};
console.log(multiply(7, 2));

const divide = (num1, num2) => {
  let sum = num1 / num2;
  return sum;
};
console.log(divide(7, 2));

// Number Button Event Listeners

let numberButtons = () => {
  oneBtn.addEventListener("click", function () {
    calcDisplay.textContent += 1;
    num1 = Number(calcDisplay.textContent);

    console.log(num1);
  });
  twoBtn.addEventListener("click", function () {
    calcDisplay.textContent += 2;
    num1 = Number(calcDisplay.textContent);
    console.log(num1);
  });

  threeBtn.addEventListener("click", function () {
    calcDisplay.textContent += 3;
    num1 = Number(calcDisplay.textContent);

    console.log(num1);
  });

  fourBtn.addEventListener("click", function () {
    calcDisplay.textContent += 4;
    num1 = Number(calcDisplay.textContent);

    console.log(num1);
  });

  fiveBtn.addEventListener("click", function () {
    calcDisplay.textContent += 5;
    num1 = Number(calcDisplay.textContent);

    console.log(num1);
  });

  sixBtn.addEventListener("click", function () {
    calcDisplay.textContent += 6;
    num1 = Number(calcDisplay.textContent);

    console.log(num1);
  });

  sevenBtn.addEventListener("click", function () {
    calcDisplay.textContent += 7;
    num1 = Number(calcDisplay.textContent);
  });

  eightBtn.addEventListener("click", function () {
    calcDisplay.textContent += 8;
    num1 = Number(calcDisplay.textContent);
  });

  nineBtn.addEventListener("click", function () {
    calcDisplay.textContent += 9;
    num1 = Number(calcDisplay.textContent);
  });

  zeroBtn.addEventListener("click", function () {
    calcDisplay.textContent += 0;
    num1 = Number(calcDisplay.textContent);
  });
};
numberButtons();

//Operator Button Event Listeners

let operatorButtons = () => {
  addBtn.addEventListener("click", function () {});

  subtractBtn.addEventListener("click", function () {});

  multiplyBtn.addEventListener("click", function () {});

  divideBtn.addEventListener("click", function () {});

  equalsBtn.addEventListener("click", function () {
    operate();
  });
};

operatorButtons();

const operate = (operator, num1, num2) => {};

clearBtn.addEventListener("click", () => {
  calcDisplay.textContent = "";
  num1 = 0;
});
