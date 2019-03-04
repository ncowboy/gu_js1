/*
Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.
*/

"use strict";

/**
 * Функция получения результата действия с числами в зависимости от выбранной операции
 * @param {number} arg1 Первое число
 * @param {number} arg2 Второе число
 * @param {string} operation Математическая операция
 * @returns {number} Получаем результат
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложить':
            return add(arg1, arg2);
        case 'вычесть':
            return substract(arg1, arg2);
        case 'умножить':
            return multiply(arg1, arg2);
        case 'разделить':
            return divide(arg1, arg2);
    }
}

console.log(mathOperation(10, 25, 'сложить'));
console.log(mathOperation(10, 25, 'вычесть'));
console.log(mathOperation(10, 25, 'умножить'));
console.log(mathOperation(10, 25, 'разделить'));