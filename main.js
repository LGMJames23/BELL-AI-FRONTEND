const accountQuestion = document.getElementById("account-question");
const loginButton = document.getElementById("login-btn");
const registerButton = document.getElementById("register-btn");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const accountForms = [loginForm, registerForm];
let lastChoice = loginButton;

function resetForms() {
  accountForms.forEach((form) => {
    form.hidden = true;
    form.reset();
    form.querySelector('[role="alert"]').textContent = "";
    form.querySelectorAll("input").forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  });
}

function showForm(form, choice) {
  resetForms();
  lastChoice = choice;
  accountQuestion.hidden = true;
  form.hidden = false;
  form.elements.namedItem("username").focus();
}

loginButton.addEventListener("click", () => {
  showForm(loginForm, loginButton);
});

registerButton.addEventListener("click", () => {
  showForm(registerForm, registerButton);
});

document.querySelectorAll("[data-account-back]").forEach((button) => {
  button.addEventListener("click", () => {
    resetForms();
    accountQuestion.hidden = false;
    lastChoice.focus();
  });
});

accountForms.forEach((form) => {
  const username = form.elements.namedItem("username");
  const password = form.elements.namedItem("password");
  const feedback = form.querySelector('[role="alert"]');

  form.addEventListener("input", () => {
    feedback.textContent = "";
    [username, password].forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const missingUsername = username.value.trim() === "";
    const missingPassword = password.value === "";

    username.setAttribute("aria-invalid", String(missingUsername));
    password.setAttribute("aria-invalid", String(missingPassword));

    if (missingUsername || missingPassword) {
      if (missingUsername && missingPassword) {
        feedback.textContent = "Please enter a username and password.";
      } else {
        feedback.textContent = missingUsername
          ? "Please enter a username."
          : "Please enter a password.";
      }
      (missingUsername ? username : password).focus();
      return;
    }

    password.value = "";
    feedback.textContent = form === loginForm
      ? "Credential verification is unavailable: no authentication backend is configured. You are not logged in."
      : "Account creation is unavailable: no authentication backend is configured. No account has been created.";
  });
});
