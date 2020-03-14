const screen = document.querySelector(".screen-container");
const calculator = document.querySelector(".calculator-container");
const ACKey = document.getElementById("ac");

// Print typed keys to Screen Calculator

calculator.addEventListener("click", e => {
  const targetedKey = e.target.id;

  screen.innerText += targetedKey;

  // AC Key
  if (targetedKey === "ac") {
    screen.innerText = "";
  }

  // Delete Key && else if for when the icon element is clicked (key element != icon element in HTML)
  if (targetedKey === "d") {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 2);
  } else if (targetedKey === "d2") {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 3);
  }

  if (targetedKey === "%") {
    // Percentage Key
    screen.innerText = eval(
      eval(screen.innerText.slice(0, screen.innerText.length - 1)) / 100
    );
  }

  // Equal Key
  if (targetedKey === "=") {
    const calc = eval(screen.innerText.slice(0, screen.innerText.length - 1));

    screen.innerText = calc;
  }
});

// 2) Detect keyboard input if I want to type directly, not click on screen
// Use key fixed number like (t = 25) to create if ENTER, RETURN then ...
// See past projects for use of it, 20 js WORD or HARDCODE ANTHO

// Print typed Keys to calculator
window.addEventListener("keyup", e => {
  // Print only numbers key from 0 to 9
  if (e.which >= 48 && e.which <= 57) {
    screen.innerText += e.key;
  }

  // Print following keys: +, -, ., /, *
  if (
    e.which === 187 ||
    e.which === 189 ||
    e.which === 190 ||
    e.which === 191 ||
    e.which === 221
  ) {
    screen.innerText += e.key;
  }

  // Delete one character when RETURN pressed
  if (e.which === 8) {
    screen.innerText = "";
  }

  // Calculate Percentages when % pressed
  if (e.which === 222) {
    screen.innerText = eval(
      eval(screen.innerText.slice(0, screen.innerText.length)) / 100
    );
  }

  // Calculate Result when ENTER pressed
  if (e.which === 13) {
    const calc = eval(screen.innerText);

    screen.innerText = calc;
  }
});
