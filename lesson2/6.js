/*
Программа должна спросить у пользователя количество денег, которое он хочет положить в банк.
Пользователь должен ввести целое число, а программа должна выдать соответствующее сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
Если пользователь введет любое другое целое число, программа также должна выдать соответствующее сообщение, в котором
будет отображено это число, а также поставить верное окончание в слове "рубль".
Для получения верного склонения слова (любого слова с числом) вам необходимо создать функцию.
*/

transaction(+prompt('Сколько положить на счет?'));

/**
 * Функция проверяет сумму на валидность и выводит сообщение о результате операции.
 * @param {number} amount Сумма к зачислению
 */
function transaction(amount) {
    if (!Number.isNaN(amount) && amount !== 0) {
        alert(`Ваша сумма в ${amount} ${getRightDeclension(amount, 'рубль', 'рублей', 'рубля')} успешно зачислена.`);
    } else {
        alert('Введите корректную сумму');
    }
}

/**
 * Функция возвращает правильное склонение слова с числом в зависимости от значения числа.
 * @param {number} num Число.
 * @param {string} strSingular Вариант склонения в единственном числе именительном падеже.
 * @param {string} strPluralGenitive Вариант склонения во множественном числе родительном падеже.
 * @param {string} strSingularGenitive Вариант склонения в единственном числе родительном падеже.
 * @returns {string} Возвращает один из вариантов.
 */
function getRightDeclension(num, strSingular, strPluralGenitive, strSingularGenitive) {
    if ((num % 10 === 2 || num % 10 === 3 || num % 10 === 4) && (num % 100 !== 12 && num % 100 !== 13 && num % 100 !== 14)) {
        return strSingularGenitive;
    } else if (num % 10 === 1 && num % 100 !== 11) {
        return strSingular;
    } else {
        return strPluralGenitive;
    }
}
