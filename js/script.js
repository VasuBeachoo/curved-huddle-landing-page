const form = document.querySelector(".footer__form");

function validateInput(e) {
  const emailInput = document.querySelector(".footer__email-input");
  const errorMsg = document.querySelector(".footer__error-msg");
  if (emailInput.value === "" || !emailInput.validity.valid) {
    e.preventDefault();
    errorMsg.className = "footer__error-msg footer__error-msg--visible";
    emailInput.className = "footer__email-input footer__email-input--invalid";
  }
}

form.addEventListener("submit", (e) => validateInput(e));
