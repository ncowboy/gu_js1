/*

Пользователь, с помощью команды prompt, вводит номер билета - 6 цифр. Программа
определяет является ли счастливым данный билетик и выводит соответстующее сообщение в
консоль. Счастливый билет - билет, у которого сумма первых трех цифр равна сумме последних
трех цифр номера билета.

 */

"use strict";

let number = prompt('Введите номер билета');
let numberNum = +number;

if (number.length !== 6) {
    console.log('Номер не удовлетворяет условиям (должен быть из 6 цифр)');
} else if (parseInt(numberNum / 100000) + parseInt(numberNum / 10000) % 10 + parseInt(numberNum / 1000) % 10 ===
parseInt(numberNum / 100) % 10 + parseInt(numberNum / 10) % 10 + numberNum % 10) {
    console.log('Cчастливый билетик!!!');
} else {
    console.log('Не повезло :(');
}

