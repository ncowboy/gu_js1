/*
Вывести в консоль значения выражений и объяснить, почему получились такие значения
*/

"use strict";

console.log(10 + 10 + "10");
/*
2010
Ассоциативность оператора + слева направо. Сначала складываются два числа, получаем 20.
Затем складываем число и строку, при этом число приводится к строке. Получаем "2010"
*/

console.log(10 + "10" + 10);
/*
101010
Ассоциативность оператора + слева направо. Сначала скалдываются строка и число, при этом число приводится к строке.
Получаем "1010".
Затем складываем также строку и число. Получаем "101010"
*/

console.log(10 + 10 + +"10");
/*
30
Здесь три оператора - два сложения и унарный плюс, приоритет которого выше.
Сначала правая десятка приводится к числу, затем три числа скалдываются. Получаем 30
*/

console.log(10 / -"");
/*
-Infinity
В соответствии с приоритетом, сначала выполняется унарный минус. При этом пустая строка приводится к -0
Деление на 0 и -0 в JS разрешено, получается бесконечность с соответствующим знаком.
*/

console.log(10 / +"2,5");
/*
NaN
В соответствии с приоритетом, сначала выполняется унарный плюс. При попытке привести к числу получим NaN,
т.к. дробные числа в JS можно писать только через точку. Все операции с NaN дают на выходе NaN
*/


