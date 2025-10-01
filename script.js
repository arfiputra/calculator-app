let display = document.getElementById("display");
let toggleBtn = document.querySelector(".toggle-btn");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    toggleBtn.innerText = "☀️ Light Mode";
  } else {
    toggleBtn.innerText = "🌙 Dark Mode";
  }
}
