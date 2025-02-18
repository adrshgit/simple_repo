const inputField = document.getElementById("shortcut");
const buttons = document.querySelectorAll(".button");
const submitButton = document.getElementById("submitButton");
const saveButton = document.querySelector(".save");
const info = document.querySelector(".info");
const sk = document.querySelector(".sk");

let activeButton = null; // Track selected button

// Attach click event to each button
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    info.style.display = "block";
    activeButton = button; // Store active button

    // Use a safer key format for localStorage
    const shortcutKey = `shortcut_${button.dataset.shortcutId || button.innerText}`;
    inputField.value = localStorage.getItem(shortcutKey) || "";

    console.log(`Button clicked: ${button.innerText}, Loaded shortcut: ${inputField.value}`);
  });
});

// Handle keydown events
inputField.addEventListener("keydown", function (event) {
  event.preventDefault(); // Stop default input behavior

  if (!activeButton) {
    alert("Please select a button first!");
    return;
  }

  // Backspace functionality
  if (event.key === "Backspace") {
    inputField.value = inputField.value.slice(0, -1);
  } 
  // Allow single key input  
  else if (!event.metaKey) {
    inputField.value += event.key;
  }

  // Save in localStorage
  const shortcutKey = `shortcut_${activeButton.dataset.shortcutId || activeButton.innerText}`;
  localStorage.setItem(shortcutKey, inputField.value);
});
// function hide() {
//   alert(`You successfully saved your shortcut: ${inputField.value}`);
//   info.style.display = "none";
// }

// Submit Button Click - Final Save
submitButton.addEventListener("click", function () {
  if (!activeButton) {
    alert("Please select a button first!");
    return;
  }

  const shortcut = inputField.value.trim();
  if (shortcut) {
    const shortcutKey = `shortcut_${activeButton.dataset.shortcutId || activeButton.innerText}`;
    localStorage.setItem(shortcutKey, shortcut);
    console.log(`Shortcut saved for "${activeButton.innerText}": ${shortcut}`);
  }
  alert(`You successfully saved your shortcut: ${inputField.value}`);
  info.style.display = "none";

});

// Load Stored Shortcuts on Page Load
window.addEventListener("load", function () {
  buttons.forEach((button) => {
    const shortcutKey = `shortcut_${button.dataset.shortcutId || button.innerText}`;
    const savedShortcut = localStorage.getItem(shortcutKey);
    if (savedShortcut) {
      console.log(`Previously saved shortcut for "${button.innerText}": ${savedShortcut}`);
    }
  });
});

// Show or Hide Saved Shortcuts and Print All Button Text
saveButton?.addEventListener("click", function () {
  if (sk) {
    // Toggle visibility
    sk.style.display = sk.style.display === "block" ? "none" : "block";

    // Clear previous content
    sk.innerHTML = "";

    // Append button text content
    buttons.forEach((button) => {
      const shortcutKey = `shortcut_${button.dataset.shortcutId || button.innerText}`;
      const savedShortcut = localStorage.getItem(shortcutKey) || "No shortcut set";

      const shortcutEntry = document.createElement("p");
      shortcutEntry.textContent = `${button.textContent}: ${savedShortcut}`;
      sk.appendChild(shortcutEntry);
    });
  }
});
  