let display = document.getElementById("display");
let historyList = document.getElementById("historyList");
let clearHistoryBtn = document.getElementById("clearHistory");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;
    let result = eval(expression);

    addToHistory(expression + " = " + result);

    display.value = result;
  } catch {
    display.value = "Error";
  }
}

// ⭐ Add to history
function addToHistory(text) {
  let li = document.createElement("li");
  li.textContent = text;
  historyList.appendChild(li);
}

// ⭐ Clear history
clearHistoryBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
