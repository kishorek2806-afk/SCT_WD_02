// get reference to the display
const display = document.getElementById('display');
// get all calculator buttons inside the .buttons container
const buttons = document.querySelectorAll('.buttons button');

// --- Button click handling ---
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (value === 'C') {
      // Clear display
      display.value = '';
    } else if (value === '=') {
      // Evaluate expression
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else {
      // Append clicked value to display
      display.value += value;
    }
  });
});

// --- Keyboard handling ---
document.addEventListener('keydown', (e) => {
  const key = e.key;

  // Numbers, decimal, and operators
  if (/[0-9+\-*/.]/.test(key)) {
    display.value += key;
  }
  // Enter = equals
  else if (key === 'Enter') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }
  // Backspace = delete last char
  else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
  // Escape or 'c' = clear
  else if (key === 'Escape' || key.toLowerCase() === 'c') {
    display.value = '';
  }
});