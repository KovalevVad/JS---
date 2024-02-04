let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  message = document.querySelectorAll('.error-message'),
  inputEmail = document.querySelector('.js-input-email'),
  inputPassword = document.querySelector('.js-input-password'),
  inputCheckbox = document.querySelector('.js-input-checkbox');

date = {
  email: '',
  password: ''
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.onsubmit = function(event) {
  event.preventDefault();
  let emailVal = inputEmail.value
  let passwordVal = inputPassword.value

  formInputs.forEach(function(input, index) { //Провека input на пустую строку
    if (input.value === '' ) {
      input.classList.add('error')
      message[index].innerHTML = 'Это поле обязательно для заполнения'
      return false
    } else {
      input.classList.remove('error')
    }
  })

  if (!validateEmail(emailVal)) { // Проверка email на валидатность
    inputEmail.classList.add('error')
    if (emailVal === '') {
      message[1].innerHTML = 'Это поле обязательно для заполнения'
    } else {
      message[0].innerHTML = 'Email невалидный'
    }
    return false
  } else {
    message[0].innerHTML = ''
    inputEmail.classList.remove('error')
  }

  if (passwordVal.length < 8) {  // проверка пароля на длину
    inputPassword.classList.add('error')
    message[1].innerHTML = 'Пароль должен содержать как минимум 8 символов'
    return false
  } else {
    message[1].innerHTML = ''
    inputPassword.classList.remove('error')
  }

  if (!inputCheckbox.checked) {  // Проверка chekcbox
    inputCheckbox.classList.add('error')
    return false
  } else {
    inputCheckbox.classList.remove('error')
  }

  date.email = emailVal
  date.password = passwordVal
  console.log(date)

  inputEmail.value = ''
  inputPassword.value = ''
  inputCheckbox.checked = false
}









