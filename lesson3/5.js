/*
Дан массив (создать такой же, с такими же значениями):
const arr = [
  [2, 4, 6],
  [1, 5, 10],
  [7, 4, 1],
];
Задания:
1. Найти массив, у которого сумма всех чисел максимальна, вывести в console.log индекс этого массива.
2. Получить и вывести в console.log минимальное значение найденное в массиве, который мы получили в
первом пункте.
*/
"use strict";

console.log(`Задание 5
===========================`);
const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

let arrSorted = arr.slice().sort(function (a, b) {
    let aSum = 0, bSum = 0;
    for (let n in a) {
        aSum += a[n]
    }
    for (let k in b) {
        bSum += b[k]
    }
    if (aSum > bSum) {
        return -1;
    }
    if (aSum < bSum) {
        return 1;
    }
    if (aSum === bSum) {
        return 0;
    }
});

let index = arr.indexOf(arrSorted[0]);
console.log(`Индекс масссива с максимальной суммой элементов: ${index}`);
console.log(`Минимальное значение в этом массиве: ${arr[index].sort(function (a, b) {
    return a - b;
})[0]}`);
