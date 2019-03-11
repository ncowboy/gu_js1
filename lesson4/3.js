/*
На базе игры (приняв за пример), созданной на уроке, реализовать игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект содержащий всю логику игры, который будет иметь методы, например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
*/

"use strict";

/**
 * Массив с вопросами и ответами
 * @type {array}
 */
const questions = [
    {
        id: 0,
        text: 'Как правильно закончить пословицу: «Не откладывай на завтра то, что можно…»?',
        answers: [
            {
                text: 'сделать сегодня',
                correct: true,
                alias: 'a'
            },
            {
                text: 'сделать послезавтра',
                correct: false,
                alias: 'b'
            },
            {
                text: 'сделать через месяц',
                correct: false,
                alias: 'c'
            },
            {
                text: 'никогда не делать',
                correct: false,
                alias: 'd'
            },
        ]
    },
    {
        id: 1,
        text: 'Что говорит человек, когда замечает нечто необычное?',
        answers: [
            {
                text: 'попало в лоб',
                correct: false,
                alias: 'a'
            },
            {
                text: 'залетело в рот',
                correct: false,
                alias: 'b'
            },
            {
                text: 'накапало в уши',
                correct: false,
                alias: 'c'
            },
            {
                text: 'бросилось в глаза',
                correct: true,
                alias: 'd'
            },
        ]
    },
    {
        id: 2,
        text: 'Что помогает туристу ориентироваться в незнакомом городе?',
        answers: [
            {
                text: 'путепровод',
                correct: false,
                alias: 'a'
            },
            {
                text: 'путеукладчик',
                correct: false,
                alias: 'b'
            },
            {
                text: 'Путеводитель',
                correct: true,
                alias: 'c'
            },
            {
                text: 'путеводная звезда',
                correct: false,
                alias: 'd'
            },
        ]
    },
    {
        id: 3,
        text: 'Кого с большим основанием можно назвать островитянами?',
        answers: [
            {
                text: 'алеутов',
                correct: true,
                alias: 'a'
            },
            {
                text: 'эвенков',
                correct: false,
                alias: 'b'
            },
            {
                text: 'чукчей',
                correct: false,
                alias: 'c'
            },
            {
                text: 'якутов',
                correct: false,
                alias: 'd'
            },
        ]
    },
    {
        id: 4,
        text: 'Каким видом спорта серьезно увлекался французский летчик Ролан Гаррос?',
        answers: [
            {
                text: 'пинг-понгом',
                correct: false,
                alias: 'a'
            },
            {
                text: 'теннисом',
                correct: false,
                alias: 'b'
            },
            {
                text: 'поло',
                correct: false,
                alias: 'c'
            },
            {
                text: 'регби',
                correct: true,
                alias: 'd'
            },
        ]
    }
];

/**
 * Объект игры.
 * @property {int} count Текущий счет игры
 */
const game = {
    count: 0, //Обнуляем счет

    /**
     * Запускает игру
     */
    run() {
        alert('Добро пожаловать на игру "Кто хочет стать миллионером!"');
        //Список доступных ответов
        const availableAnswers = ['q', 'a', 'b', 'c', 'd'];
        for (let i = 0; i < questions.length; i++) {
            const answer = this.askQuestion(questions[i]);
            //Если ввод некорректный, выдаем сообщение и повторяем ввод
            if (!availableAnswers.includes(answer)) {
                alert(`Для ответа необходимо ввести одно из значений: ${availableAnswers.join(', ')}.`);
                i--;
                continue;
            }
            // Выход из игры по жделанию игрока
            if (answer === 'q') {
                alert(`До свидания. Ваш счёт: ${this.count}`);
                return;
            }
            //Результат ответа
            if (this.checkAnswer(questions[i].id, answer)) {
                this.count++;
                alert('Верно!');
            } else {
                alert('Неправильно(');
            }
        }
        alert(`Итоговый счет: ${this.count}`); //Выводим итоговый счет
    },

    /**
     * Рендерит вопросы и собирает ответы
     * @param {Object} obj Объект - вопрос из массива вопросов
     * @return {string} Возвращает введенный пользователем ответ.
     */
    askQuestion(obj) {
        const header = `Вопрос №${obj.id + 1} \n
        Введите букву правильного ответа или q для выхода из игры.\n`;
        const text = obj.text;
        const body = function () { /* Собирает строку с варианом ответа*/
            let str = '';
            obj.answers.forEach(function callback(value) {
                str += `${value.alias}. ${value.text} \n`;
            });
            return str;
        };
        return prompt(`${header + text} \n\n${body()}`);
    },

    /**
     * Ищет введенный ответ в массиве вопросов и проверяет его
     * @param id Id Вопроса в массиве вопросов
     * @param string Вариант ответа
     * @return {boolean}
     */
    checkAnswer(id, string) {
        //Ищем вопрос по id
        let questionIndex = questions.findIndex(function (question) {
            return question.id === id;
        });

        //Ищем ответ по букве
        let optionIndex = questions[questionIndex].answers.findIndex(function (option) {
            return option.alias === string;
        });

        //Возвращаем результат
        return questions[questionIndex].answers[optionIndex].correct;
    },
};

game.run();