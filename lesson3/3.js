/*
Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
*/

"use strict";

console.log(`Задание 3
===========================`);

for(let i = 0, str = 'x'; i < 20; i++, str += 'xx') {
    console.log(str);
}