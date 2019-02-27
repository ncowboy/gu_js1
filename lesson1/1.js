'use strict';
let tempC = +prompt('Введите температуру по Цельсию');
let tempF = Math.round((9 / 5) * tempC + 32);
alert('Температура по Фаренгейту: ' + tempF);
