const container = document.querySelector(".container");
const display = document.querySelector(".display");
let sum = 0;
let typedValue,
  operation = null;
displayedOnce = false;
console.log(container);

container.addEventListener("click", (e) => calc(e));

function calc(e) {
  if (e.target.children.length) {
    console.log(e.target.children[0].textContent);
    typedValue = e.target.children[0].textContent;
  } else {
    console.log(e.target.textContent);
    typedValue = e.target.textContent;
  }
  console.log(typeof display.textContent);
  if (!Number.isNaN(Number.parseInt(typedValue))) {
    if (display.textContent != "0" && !displayedOnce) {
      display.textContent += typedValue;
    } else {
      display.textContent = typedValue;
    }
  } else {
    console.log(operation);

    if (typedValue === "C") {
      operation = null;
      display.textContent = 0;
      sum = 0;
    } else if (typedValue == "=" && operation !== null && !displayedOnce) {
      console.log("= chapse");
      if (operation === "+") {
        sum += Number.parseInt(display.textContent);
        resetDisplay();
      } else if (operation === "-") {
        sum -= Number.parseInt(display.textContent);
        resetDisplay();
      } else if (operation === "x") {
        sum *= Number.parseInt(display.textContent);
        resetDisplay();
      } else if (operation === "/") {
        sum /= Number.parseInt(display.textContent);
        resetDisplay();
      }
    } else if (typedValue === "←") {
      console.log("arrow chap dise");
      const currentDisplayText = display.textContent.substring(
        0,
        display.textContent.length - 1
      );
      display.textContent =
        currentDisplayText === "" ? "0" : currentDisplayText;
      console.log(display.textContent);
    } else if (typedValue !== "=") {
      if (!operation) {
        sum = Number.parseInt(display.textContent);
        display.textContent = 0;
        displayedOnce = false;
      }
      console.log("ekhane");
      operation = typedValue;
      console.log(operation);
    }
  }
}

function resetDisplay() {
  display.textContent = sum;
  sum = 0;
  operation = null;
  displayedOnce = true;
}
