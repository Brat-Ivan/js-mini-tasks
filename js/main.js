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

  if (email === '') {
    emailError.textContent = 'Поле обязательно для заполнения';
    emailInput.classList.add('field__control--error');
  } else if (!validateEmail(email)) {
    emailError.textContent = 'Email невалидный';
    emailInput.classList.add('field__control--error');
  } else { emailInput.classList.remove('field__control--error'); }

  if (password === '') {
    passwordError.textContent = 'Поле обязательно для заполнения';
    passwordInput.classList.add('field__control--error');
  } else if (password.length < 8) {
    passwordError.textContent = 'Пароль должен содержать как минимум 8 символов';
    passwordInput.classList.add('field__control--error');
  } else { passwordInput.classList.remove('field__control--error'); }

  if (!checkboxInput.checked) {
    checkboxLabel.classList.add('checkbox__label--error');
  } else { checkboxLabel.classList.remove('checkbox__label--error'); }

  if (
    emailInput.classList.contains('field__control--error') ||
    passwordInput.classList.contains('field__control--error') ||
    checkboxLabel.classList.contains('checkbox__label--error')
  ) {
    return false;
  }
  
  const obj = {
    email: email,
    password: password,
  }
  
  console.log(obj);
  
  return false;
};