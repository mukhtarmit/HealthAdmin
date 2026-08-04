/* login.js — validates the login form with vanilla JS only */

(function () {
  "use strict";

  var form = document.getElementById("loginForm");
  if (!form) return;

  var emailField = document.getElementById("emailField");
  var passwordField = document.getElementById("passwordField");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var alertBox = document.getElementById("formAlert");
  var alertText = document.getElementById("formAlertText");
  var forgotBtn = document.getElementById("forgotBtn");

  function showAlert(message) {
    alertText.textContent = message;
    alertBox.classList.add("show");
  }
  function hideAlert() {
    alertBox.classList.remove("show");
  }

  function setError(fieldEl, hasError) {
    fieldEl.classList.toggle("has-error", hasError);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    hideAlert();

    var emptyEmail = email.value.trim() === "";
    var emptyPassword = password.value.trim() === "";

    setError(emailField, emptyEmail);
    setError(passwordField, emptyPassword);

    if (emptyEmail || emptyPassword) {
      showAlert("Please fill in every field before signing in.");
      return;
    }

    // No backend in this capstone build — simulate a successful login.
    var loginBtn = form.querySelector("button[type=submit]");
    loginBtn.textContent = "Signing in…";
    loginBtn.disabled = true;

    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 500);
  });

  [email, password].forEach(function (input) {
    input.addEventListener("input", function () {
      hideAlert();
      setError(input.closest(".field"), false);
    });
  });

  forgotBtn.addEventListener("click", function () {
    showAlert("Password reset isn't wired up in this demo build yet — contact your administrator.");
  });
})();
