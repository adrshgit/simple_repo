// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginForm = document.getElementById('loginForm');
    const cancelBtn = document.getElementById('cancelBtn');
    const loginFormElement = document.getElementById('loginFormElement');
  
    // Show the login form when the login button is clicked
    loginBtn.addEventListener('click', () => {
      loginForm.classList.remove('hidden');
    });
  
    // Hide the login form when the cancel button is clicked
    cancelBtn.addEventListener('click', () => {
      loginForm.classList.add('hidden');
    });
  
    // Handle form submission
    loginFormElement.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      console.log('Username:', username);
      console.log('Password:', password);
  
      // You can add logic here to send login details to a server
      alert('Login submitted!');
  
      // Hide the form after submission
      loginForm.classList.add('hidden');
    });
  });
  