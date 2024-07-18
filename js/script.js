
let currentDisplay = "";
let handelno = false;

// getting number
function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

// function multiResult(result) {
//   return result.replaceAll(/\*/g, '×');
// }

let display = document.getElementById("texteara");
const arr = Array.from(buttons);
arr.forEach((item) => {
  item.addEventListener("click", ding);
});

// operators
function ins(val) {
  const operators = ["+", "-", "*", "/"];
  const lastChar = display.value.slice(-1);

  if (
    display.style.background == "mediumSpringGreen" ||
    display.style.background == "rgb(255, 30, 0)"
  ) {
    currentDisplay = val;
    display.value = currentDisplay;
    display.style.background = "white";
  } else {
    if (handelno == true) {
      clearDisplay();
      handelno = false;
    } else {
      // zero at the beginning
      if (val === "0" && display.value === "") {
        return;
      }

      // entering '*' or '/' at the beginning
      if ((val === "*" || val === "/") && display.value === "") {
        return;
      }

      // Prevent entering consecutive operators
      if (operators.includes(val) && operators.includes(lastChar)) {
        return;
      }

      // leading zero when entering a nonzero number
      if (display.value === "0" && !operators.includes(val)) {
        currentDisplay = val;
        display.value = currentDisplay;
      } else {
        currentDisplay += val;
        display.value = currentDisplay;
      }
    }
  }
}

// clear all
function clearDisplay() {
  currentDisplay = "";
  display.value = currentDisplay;
  display.style.background = "white";
}

// calculate nums
function calculate() {
  try {
    handelno = true;
    const result = eval(currentDisplay);

    // Check for division by zero
    if (!isFinite(result)) {
      display.value = "∞";
      currentDisplay = "";
      display.style.background = "mediumSpringGreen";
    } else {
      display.value = formatNumber(result);
      currentDisplay = result.toString();
      display.style.background = "mediumSpringGreen";
      const inpValue = display.value.replaceAll(",", "");
      let calculateValue = eval(inpValue);
      calculateValue += "";
      calculateValue = new Intl.NumberFormat().format(calculateValue);
      display.value = calculateValue;
    }
  } catch (error) {
    display.value = "Error";
    display.style.background = "rgb(255, 30, 0)";
    currentDisplay = "";
  }
}

// deleting one by one
function singleChar() {
  display.value = display.value.slice(0, display.value.length - 1);
  if (!display.value) {
    display.style.background = "white";
    clearDisplay();
  }
}

// button sound
function ding() {
  var sound = new Audio(
    "https://proxy.notificationsounds.com/message-tones/out-of-nowhere-message-tone/download/file-sounds-1231-out-of-nowhere.mp3"
  );
  sound.play();
}

