const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark = true;
// Toggle theme between light and dark
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};

// Iterate through all buttons and add functionality
buttons.forEach((button) => {
  button.onclick = () => {
    // Clear the display when "C" is clicked
    if (button.id === "clear") {
      display.innerText = "";
    } 
    // Remove the last character when "backspace" is clicked
    else if (button.id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } 
    // Evaluate the expression when "=" is clicked
    else if (button.id === "equal") {
      try {
        if (display.innerText.trim() === "") {
          display.innerText = "Empty!";
          setTimeout(() => (display.innerText = ""), 2000);
        } else {
          // Evaluate the expression safely
          display.innerText = eval(display.innerText);
        }
      } catch (error) {
        // Show error if the input is invalid
        display.innerText = "Error!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } 
    // Append the button's ID to the display for other buttons
    else {
      display.innerText += button.id;
    }
  };
});

