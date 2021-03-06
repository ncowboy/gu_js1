"use strict";

const button = document.getElementById('submit');
button.addEventListener('click', (event) => {
    let helpBlocks = document.querySelectorAll('.help-block');
    helpBlocks.forEach(elem => {
        elem.innerHTML = '';
    });

    const errors = isFormCorrect();

    if (!errors.hasErrors) {
        alert('Форма отправлена');
    } else {
        event.preventDefault();
        renderMessages(errors);
    }
});

/**
 * Проверяет корректность заполнения формы
 * @return {Object} Возвращает объект с ошибками
 */
function isFormCorrect() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const pass = document.getElementById('pass').value;
    const passRepeat = document.getElementById('passRepeat').value;

    let errors = {name: null, phone: null, pass: null, passRepeat: null, hasErrors: false};

    if (name.length === 0 || name.length >= 50) {
        errors.name = 'Имя - должно содержать как минимум 1 символ, не более 50';
        errors.hasErrors = true;
    }

    if (phone.length !== 11 || Number.isNaN(+phone) || !Number.isInteger(+phone)) {
        errors.phone = 'Телефон - должно содержать 11 цифр, не больше, не меньше';
        errors.hasErrors = true;
    }

    if (pass.length < 5 || pass.length > 50) {
        errors.pass = 'Пароль - минимум 5 символов, максимум 50';
        errors.hasErrors = true;
    }

    if (passRepeat.length === 0 || passRepeat !== pass) {
        errors.passRepeat = 'Пароли не совпадают';
        errors.hasErrors = true;
    }

    return errors;
}

function renderMessages(obj) {
    for (let key in obj) {
        if (obj[key] !== null && key !== 'hasErrors') {
            let helpBlock = document.getElementById(key).nextElementSibling;
            helpBlock.innerHTML = obj[key];
            helpBlock.parentElement.classList.add('has-error');

        } else if (obj[key] === null) {
            let helpBlock = document.getElementById(key).nextElementSibling;
            helpBlock.parentElement.classList.add('has-success');
            helpBlock.parentElement.classList.remove('has-error');
        }
    }
}