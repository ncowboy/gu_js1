/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
Обязательно использовать оператор return.
*/
"use strict";

/**
 * Сложение двух чисел
 * @param {number} a Первое слагаемое
 * @param {number} b Второе слагаемое
 * @returns {number} Результат сложения
 */
function add(a, b) {
    return a + b;
}

/**
 * Вычитание одного числа из другого
 * @param {number} a Уменьшаемое число
 * @param {number} b Вычитаемое число
 * @returns {number} Результат вычитания
 */
function substract(a, b) {
    return a - b;
}

/**
 * Умножение двух чисел
 * @param {number} a Первый множитель
 * @param {number} b Второй множитель
 * @returns {number} Результат умножения
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Деление двух чисел
 * @param {number} a Делимое
 * @param {number} b Делитель
 * @returns {number} Результат деления
 */
function divide(a, b) {
    return a / b;
}

console.log(add(3, 5));
console.log(substract(3, 5));
console.log(multiply(3, 5));
console.log(divide(3, 5));




