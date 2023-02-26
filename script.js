"use strict";

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

//Event Listeners

oneBtn.addEventListener("click", function () {
  calcDisplay.textContent = 1;
});

twoBtn.addEventListener("click", function () {
  calcDisplay.textContent = 2;
});

threeBtn.addEventListener("click", function () {
  calcDisplay.textContent = 3;
});

fourBtn.addEventListener("click", function () {
  calcDisplay.textContent = 4;
});

fiveBtn.addEventListener("click", function () {
  calcDisplay.textContent = 5;
});

sixBtn.addEventListener("click", function () {
  calcDisplay.textContent = 6;
});

sevenBtn.addEventListener("click", function () {
  calcDisplay.textContent = 7;
});

eightBtn.addEventListener("click", function () {
  calcDisplay.textContent = 8;
});

nineBtn.addEventListener("click", function () {
  calcDisplay.textContent = 9;
});

zeroBtn.addEventListener("click", function () {
  calcDisplay.textContent = 0;
});

const add = (num1, num2) => {
  let sum = num1 + num2;
  return sum;
};

const subtract = (num1, num2) => {
  let sum = num1 - num2;
  return sum;
};

const multiply = (num1, num2) => {
  let sum = num1 * num2;
  return sum;
};

const divide = (num1, num2) => {
  let sum = num1 / num2;
  return sum;
};

const operate = (op, num1, num2) => {};
