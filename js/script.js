let currentDisplay = "";
// let clearOnNextNum = false;

function formatNumber(number) {
  return new Intl.NumberFormat().format(number);
}

function ins(val) {
  const display = document.getElementById("texteara");
  const operators = ["+", "-", "*", "/"];
  const lastChar = display.value.slice(-1);

  if (operators.includes(val) && operators.includes(lastChar)) {
    return;
  }
  currentDisplay += val;
  display.value = currentDisplay;
}

function clearDisplay() {
  const display = document.getElementById("texteara");
  currentDisplay = "";
  display.value = currentDisplay;
  display.style.background = "white";
}
// کار نمیکنه
// function handleNumber(number) {
//   if (clearOnNextNum) {
//     clearOnNextNum = false;
//     currentDisplay = "";
//     display.style.background = "white";
//   }
//   currentDisplay += number;
//   display.value = currentDisplay;
// }

function calculate() {
  const display = document.getElementById("texteara");
  try {
    const result = eval(currentDisplay);
    display.value = formatNumber(result);
    currentDisplay = result.toString();
    display.style.background = "MediumSpringGreen";

    const inpValue = display.value.replaceAll(",", "");
    let calculateValue = eval(inpValue);
    calculateValue += "";
    calculateValue = new Intl.NumberFormat().format(calculateValue);
    display.value = calculateValue;
  } catch (error) {
    display.value = "Error";
    display.style.background = "rgb(255, 30, 0)";
    currentDisplay = "";
  }
}

function ding() {
  var sound = new Audio(
    "https://proxy.notificationsounds.com/message-tones/out-of-nowhere-message-tone/download/file-sounds-1231-out-of-nowhere.mp3"
  );
  sound.play();
}
const display = document
  .getElementsByTagName("button")[0]
  .addEventListener("click", ding);
