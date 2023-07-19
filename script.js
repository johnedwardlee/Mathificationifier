// Globals
const btns = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
let display = "";
let arr = "";

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
  let num = a + b;
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const subtract = (a, b) => {
  let num = a - b;
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const multiply = (a, b) => {
  let num = a * b;
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const divide = (a, b) => {
  let num;
  if (b) num = a / b;
  else alert("No divide by zero");
  return Math.round((num + Number.EPSILON) * 100) / 100;
};

const mod = (a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) return a % b;
  else alert("Modulo only work with integer numbskull");
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
  arr = display.toString().trim().split(/\s+/);
  if (arr.length > 2 && inputClass == "op") inputClass = "equals";
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
    display = operate(Number(arr[0]), arr[1], Number(arr[2]));
    if (display == undefined || isNaN(display)) {
      display = "";
      alert("You goofed up and made an error.");
    }
    updateScreen();
  }
};

// Main
Array.from(btns).forEach((button) => {
  button.addEventListener("click", parseBtn);
});
