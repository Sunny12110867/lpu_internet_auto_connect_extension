// content.js

// Function to simulate clicking the "I Agree with Terms and Conditions" checkbox
console.log("yes it is starting ");
function agreeWithTerms() {
    var agreeCheckbox = document.getElementById('agreepolicy');
    if (agreeCheckbox) {
      agreeCheckbox.checked = true;
    }
  }
  
  // Function to fill in the username and password fields
  function fillLoginForm() {
    var usernameField = document.querySelector('input[name="username"]');
    var passwordField = document.querySelector('input[name="password"]');
  
    if (usernameField && passwordField) {
      // Replace 'your_username' and 'your_password' with actual values
      usernameField.value = '12110867';
      passwordField.value = '8082746001';
  
      // Enable the login button
      enableLoginButton();
    }
  }
  
  // Function to enable the login button
  function enableLoginButton() {
    var loginButton = document.getElementById('loginbtn');
    if (loginButton) {
      loginButton.removeAttribute('disabled');
    }
  }
  
  // Function to click the login button
  function clickLoginButton() {
    var loginButton = document.getElementById('loginbtn');
    if (loginButton) {
      loginButton.click();
    }
  }
  
  // Call the functions to automate the login process
  agreeWithTerms();
  fillLoginForm();
  clickLoginButton();
  
console.log("yes it is ending");