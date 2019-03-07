/*
С помощью цикла while вывести все простые числа в промежутке от 0 до 100 (можно без оптимизаций).
 */

console.log(`Задание 4
===========================`);

"use strict";

let m = 2;
while (m <= 100) {
    isPrimeNumber(m) ? console.log(m) : '';
    m++;
}

/**
 * Функция проверки на простое число.
 * @param {number} x Число
 * @returns {boolean}
 */

function isPrimeNumber(x) {
    let res = true;
    for (let i = x - 1; i > 1; i--) {
        if (x % i === 0) {
            res = false;
            break;
        }
    }
    return res;
}
