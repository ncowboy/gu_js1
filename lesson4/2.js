/*
Для игры, реализованной на уроке (бродилка), добавить возможность ходить по диагонали цифрами 1, 3, 7, 9.
Также необходимо сделать так, чтобы пользователь не мог совершить шаг в стенку, т.е. при направлении в стенку
игрок оставался на том же месте где стоял.
*/

"use strict";

/**
 * Объект с настройками игры.
 * @property {int} rowsCount Количество строк в карте.
 * @property {int} colsCount Количество колонок в карте.
 * @property {int} startPositionX Начальная позиция игрока по X координате.
 * @property {int} startPositionY Начальная позиция игрока по Y координате.
 */
const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним.
 * @property {int} x Позиция по X-координате.
 * @property {int} y Позиция по Y-координате.
 */
const player = {
    x: null,
    y: null,

    /**
     * Инициализация игрока и его метоположения.
     */
    init(startX, startY) {
        this.x = startX;
        this.y = startY;
    },

    /**
     * Двигает игрока по переданному направлению.
     * @param {int} direction Направление, в котором будет движение.
     */
    move(direction) {
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        const endPoint = this.calculateMove(this.x, this.y, direction);
        this.x = endPoint[0];
        this.y = endPoint[1];
    },

    /**
     * Просчитывает шаг игрока
     * @param {int} x
     * @param {int} y
     * @param {int} direction
     * @return {Array} Возвращает массив координат x ,y
     */
    calculateMove(x,y, direction) {
        const endPoint = [];
        switch (direction) {
            case 2:
                y++;
                break;
            case 1:
                y++;
                x--;
                break;
            case 4:
                x--;
                break;
            case 7:
                x--;
                y--;
                break;
            case 8:
                y--;
                break;
            case 9:
                y--;
                x++;
                break;
            case 6:
                x++;
                break;
            case 3:
                x++;
                y++;
                break;
        }
        endPoint.push(x, y);
        return endPoint;
    }
};

/**
 * Объект игры, здесь будут все методы и свойства связанные с самой игрой в общем.
 * @property {settings} settings Настройки игры.
 * @property {player} player Игрок, участвующий в игре.
 */
const game = {
    settings,
    player,

    /**
     * Запускает игру.
     */
    run() {
        // Инициализируем игрока, ставим его начальное местоположение
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        // Бесконечный цикл
        while (true) {
            // Отображаем нашу игру.
            this.render();

            // Получаем направление от игрока.
            const direction = this.getDirection();

            // Если игрок сказал что хочет выйти (набрал -1), значит выходим.
            if (direction === -1) {
                alert('До свидания.');
                return;
            }

            // Двигаем игрока.
            if(this.canPlayerMakeStep(direction)) {
                this.player.move(direction);
            }else{
                alert('не пытайтесь выйти из матрицы');
            }
        }
    },

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Сюда запишем все что надо отобразить.
        let map = "";

        // Цикл перебирает все строки, которые надо отобразить.
        for (let row = 0; row < this.settings.rowsCount; row++) {
            // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
            for (let col = 0; col < this.settings.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть и игрок, отображаем игрока, если нет - клетку.
                if (this.player.y === row && this.player.x === col) {
                    map += 'o ';
                } else {
                    map += 'x ';
                }
            }
            // После того как отобразили всю строку делаем переход на следующую строку.
            map += '\n';
        }

        // Чистим консоль.
        console.clear();
        // Выводим все что надо отобразить в игре.
        console.log(map);
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [-1, 1, 4, 7, 8, 9, 6, 3, 2];

        while (true) {
            // Получаем от пользователя направление.
            const direction = parseInt(prompt('Введите число, куда вы хотите переместиться, -1 для выхода.'));

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert(`Для перемещения необходимо ввести одно из чисел: ${availableDirections.join(', ')}.`);
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Проверяет, не выйдет ли игрок за пределы поля на следующем шаге
     * @param {int} direction
     * @return {boolean}
     */
    canPlayerMakeStep(direction){
        let pointX = this.player.x;
        let pointY = this.player.y;

        const endPoint = this.player.calculateMove(pointX, pointY, direction);
        pointX = endPoint[0];
        pointY = endPoint[1];

        return (pointX >= 0 && pointY >= 0 && pointX < this.settings.colsCount && pointY < this.settings.rowsCount);
    },
};

// Запускаем игру.
game.run();