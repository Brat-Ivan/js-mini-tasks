const form = document.querySelector('#form');
const emailInput = document.querySelector('#email-input');
const emailError = document.querySelector('#email-error');
const passwordInput = document.querySelector('#password-input');
const passwordError = document.querySelector('#password-error');
const checkboxInput = document.querySelector('#checkbox-input');
const checkboxLabel = document.querySelector('#checkbox-label');

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.onsubmit = function() {
  const email = emailInput.value;
  const password = passwordInput.value;
  let isErrorEmail;
  let isErrorPassword;
  let isErrorCheckbox;

  if (email === '') {
    emailError.textContent = 'Поле обязательно для заполнения';
    emailInput.classList.add('field__control--error');
    isErrorEmail = true;
  } else if (!validateEmail(email)) {
    emailError.textContent = 'Email невалидный';
    emailInput.classList.add('field__control--error');
    isErrorEmail = true;
  } else {
    emailInput.classList.remove('field__control--error');
    isErrorEmail = false;
  }

  if (password === '') {
    passwordError.textContent = 'Поле обязательно для заполнения';
    passwordInput.classList.add('field__control--error');
    isErrorPassword = true;
  } else if (password.length < 8) {
    passwordError.textContent = 'Пароль должен содержать как минимум 8 символов';
    passwordInput.classList.add('field__control--error');
    isErrorPassword = true;
  } else {
    passwordInput.classList.remove('field__control--error');
    isErrorPassword = false;
  }

  if (!checkboxInput.checked) {
    checkboxLabel.classList.add('checkbox__label--error');
    isErrorCheckbox = true;
  } else {
    checkboxLabel.classList.remove('checkbox__label--error');
    isErrorCheckbox = false;
  }

  if (isErrorEmail || isErrorPassword || isErrorCheckbox) {
    return false;
  }

  const obj = {
    email: email,
    password: password,
  };

  console.log(obj);

  return false;
};
