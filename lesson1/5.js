"use strict";

let number = prompt('Введите номер билета');

if (number.length !== 6) {
    console.log('Номер не удовлетворяет условиям (должен быть из 6 цифр)');
} else if (+number[0] + +number[1] + +number[2] === +number[3] + +number[4] + +number[5]) {
    console.log('Cчастливый билетик!!!');
} else {
    console.log('Не повезло :(');
}
