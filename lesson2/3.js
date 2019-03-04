/*
Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- если а и b разных знаков, вывести их сумму;
*/

"use strict";

let a = getRandomInt(-100, 100);
let b = getRandomInt(-100, 100);

console.log(`Первое число: ${a}`);
console.log(`Первое число: ${b}`);

if (a >= 0 && b >= 0) {
    console.log((a - b));
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

/**
 * Генератор случайного числа в заданном диапазоне
 * @param {number} min минимальное число из диапазона
 * @param {number} max максимальное число из диапазона
 * @returns {number}
 * @author https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
