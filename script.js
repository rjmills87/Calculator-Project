"use strict";

let num1;
let num2;
let operator;

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
const decimalBtn = document.querySelector("#btn-decimal");

const clearBtn = document.querySelector("#clear-btn");
const deleteBtn = document.querySelector("#delete-btn");

const addBtn = document.querySelector("#btn-add");
const subtractBtn = document.querySelector("#btn-subtract");
const divideBtn = document.querySelector("#btn-divide");
const multiplyBtn = document.querySelector("#btn-multiply");
const equalsBtn = document.querySelector("#btn-equals");

//Display Selector

const calcDisplay = document.querySelector(".calc-display");
const displayLineTop = document.querySelector("#display-line-top");
const displayLineBottom = document.querySelector("#display-line-bottom");

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

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return NaN;
  }
};

// Number Button Event Listeners

let numberButtons = () => {
  oneBtn.addEventListener("click", function () {
    displayLineBottom.textContent += "1";
  });

  twoBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 2;
  });

  threeBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 3;
  });

  fourBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 4;
  });

  fiveBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 5;
  });

  sixBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 6;
  });

  sevenBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 7;
  });

  eightBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 8;
  });

  nineBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 9;
  });

  zeroBtn.addEventListener("click", function () {
    displayLineBottom.textContent += 0;
  });

  decimalBtn.addEventListener("click", function () {
    displayLineBottom.textContent += ".";
  });
};
numberButtons();

//Operator Button Event Listeners

let operatorButtons = () => {
  addBtn.addEventListener("click", function () {
    num1 = Number(displayLineBottom.textContent);
    const selectedOperator = "+";
    displayLineTop.textContent = `${num1} + `;
    displayLineBottom.textContent = "";
    operator = selectedOperator;
  });

  subtractBtn.addEventListener("click", function () {
    num1 = Number(displayLineBottom.textContent);
    const selectedOperator = "-";
    displayLineTop.textContent = `${num1} − `;
    displayLineBottom.textContent = "";
    operator = selectedOperator;
  });

  multiplyBtn.addEventListener("click", function () {
    num1 = Number(displayLineBottom.textContent);
    const selectedOperator = "*";
    displayLineTop.textContent = `${num1} ᳵ `;
    displayLineBottom.textContent = "";
    operator = selectedOperator;
  });

  divideBtn.addEventListener("click", function () {
    num1 = Number(displayLineBottom.textContent);
    const selectedOperator = "/";
    displayLineTop.textContent = `${num1} ÷ `;
    displayLineBottom.textContent = "";
    operator = selectedOperator;
  });

  equalsBtn.addEventListener("click", function () {
    num2 = Number(displayLineBottom.textContent);
    displayLineTop.textContent = `${num1}${operator}${num2}`;
    displayLineBottom.textContent = operate(operator, num1, num2);
    num1 = null;
    num2 = null;
    operator = null;
  });
};
operatorButtons();

const getResult = (operator, num1, num2) => {
  displayLineTop.textContent = "";
  displayLineBottom.textContent = operator(num1, num2);
  num1 = null;
  num2 = null;
  operator = null;
};

clearBtn.addEventListener("click", () => {
  displayLineTop.textContent = "";
  displayLineBottom.textContent = "";
  num1 = null;
  num2 = null;
  operator = null;
});

deleteBtn.addEventListener("click", function () {
  displayLineBottom.textContent = displayLineBottom.textContent.slice(0, -1);
});
