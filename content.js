
console.log("yes it is starting ");
function agreeWithTerms() {
    var agreeCheckbox = document.getElementById('agreepolicy');
    if (agreeCheckbox) {
      agreeCheckbox.checked = true;
    }
  }
  

  function fillLoginForm() {
    var usernameField = document.querySelector('input[name="username"]');
    var passwordField = document.querySelector('input[name="password"]');
  
    if (usernameField && passwordField) {
     
      usernameField.value = '';
      passwordField.value = '';
  
      enableLoginButton();
    }
  }
  

  function enableLoginButton() {
    var loginButton = document.getElementById('loginbtn');
    if (loginButton) {
      loginButton.removeAttribute('disabled');
    }
  }

  function clickLoginButton() {
    var loginButton = document.getElementById('loginbtn');
    if (loginButton) {
      loginButton.click();
    }
  }
  
  
  agreeWithTerms();
  fillLoginForm();
  clickLoginButton();
  
console.log("yes it is ending");
