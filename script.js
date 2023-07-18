// Globals
const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
let display = "";

// Functions
const updateScreen = () => {
  screen.textContent = display;
};

const clear = () => {
  display = "";
  updateScreen();
  return;
};

const del = () => {
  display = display.toString();
  display = display.slice(0, -1);
  updateScreen();
  return;
};

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  if (b) return a / b;
  else alert("No divide by zero");
};

const mod = (a, b) => {
  return a % b;
};

const operate = (first, op, last) => {
  if (op === "+") return add(first, last);
  else if (op === "-") return subtract(first, last);
  else if (op === "*") return multiply(first, last);
  else if (op === "÷") return divide(first, last);
  else if (op === "%") return mod(first, last);
};

const parseBtn = (e) => {
  let inputClass = e.target.parentElement.classList[0];
  let inputText = e.target.outerText;
  if (inputText === "AC") clear();
  else if (inputText === "C") del();
  else if (inputClass === "number") {
    display += inputText;
    updateScreen();
  } else if (inputClass === "op") {
    display += ` ${inputText} `;
    updateScreen();
  } else if (inputClass === "dot") {
    display += inputText;
    updateScreen();
  } else if (inputClass === "equals") {
    let arr = display.trim().split(/\s+/);
    display = operate(Number(arr[0]), arr[1], Number(arr[2]));
    updateScreen();
  }
};

// Main
Array.from(btns).forEach((button) => {
  button.addEventListener("click", parseBtn);
});
