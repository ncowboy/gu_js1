/*
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. Заполнить созданную
таблицу фигурами, фигуры должны выглядеть как картинки, либо можно использовать символы (существуют символы шахматных фигур)
причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*/

"use strict";

/**
 * Функция создания шахматной доски
 */
const board = document.getElementById('chess-board');

function chessBoardRender() {

    //Создаем ячейки
    const letters = {
        0: 'a',
        1: 'b',
        2: 'c',
        3: 'd',
        4: 'e',
        5: 'f',
        6: 'g',
        7: 'h'
    };

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        if (i !== 0 && i !== 9) {  //Не добавляем класс ячейкам, в которых будет нумерация
            row.classList.add('row');
        }
        board.appendChild(row);
        for (let k = 0; k < 10; k++) {
            const col = document.createElement('td');
            if ((k === 0 || k === 9) && i !== 0 && i !== 9) { //Даем разные классы ячейкам под нумерацию, фигуры и пустые (угловые)
                col.classList.add('row-header');
            } else if ((i === 0 || i === 9) && k !== 0 && k !== 9) {
                col.classList.add('col-header');
            } else if (k === 0 && i === 0 || k === 9 && i === 9 || k === 0 && i === 9 || i === 0 || k === 9) {
                col.classList.add('col-blank');
            } else {
                col.classList.add('col');
                col.dataset.place = letters[k - 1] + (9 - i).toString();
            }
            row.appendChild(col);
        }
    }

    // Заполняем буквы и цифры
    const colH = board.querySelectorAll('.col-header');
    const rowHLeft = board.querySelectorAll('.row-header:nth-child(1)');
    const rowHRight = board.querySelectorAll('.row-header:nth-child(n + 2)');
    for (let g = 0; g < colH.length; g++) {
        if (g > 7) {
            colH[g].textContent = letters[g - 8]
        } else {
            colH[g].textContent = letters[g];
            rowHLeft[g].textContent = (8 - g).toString();
            rowHRight[g].textContent = (8 - g).toString();
        }
    }

    // Красим ячейки

    /**
     * Красит нужные ячейки в темный цвет в зависимости от четности строк
     * @param {boolean} isEven Четность строк
     */
    function paintCells(isEven) {
        const rows = board.querySelectorAll(`.row:nth-child(${isEven ? 'even' : 'odd'})`);
        for (let i = 0; i < rows.length; i++) {
            const cols = rows[i].querySelectorAll(`.col:nth-child(${isEven ? 'odd' : 'even'})`);
            for (let k = 0; k < cols.length; k++) {
                cols[k].classList.add('col-dark');
            }
        }
    }

    paintCells(true);
    paintCells(false);
}

/**
 * Расставляет фигуры на шахматной доске
 */
function placeFigures() {
    /**
     * Массив объектов - фигур
     * @type {*[]}
     */
    const figures = [
        {name: 'pawn', 'place': 'a7', color: 'b'},
        {name: 'pawn', 'place': 'b7', color: 'b'},
        {name: 'pawn', 'place': 'c7', color: 'b'},
        {name: 'pawn', 'place': 'd7', color: 'b'},
        {name: 'pawn', 'place': 'e7', color: 'b'},
        {name: 'pawn', 'place': 'f7', color: 'b'},
        {name: 'pawn', 'place': 'g7', color: 'b'},
        {name: 'pawn', 'place': 'h7', color: 'b'},
        {name: 'rook', 'place': 'a8', color: 'b'},
        {name: 'knight', 'place': 'b8', color: 'b'},
        {name: 'bishop', 'place': 'c8', color: 'b'},
        {name: 'king', 'place': 'd8', color: 'b'},
        {name: 'queen', 'place': 'e8', color: 'b'},
        {name: 'bishop', 'place': 'f8', color: 'b'},
        {name: 'knight', 'place': 'g8', color: 'b'},
        {name: 'rook', 'place': 'h8', color: 'b'},
        {name: 'pawn', 'place': 'a2', color: 'w'},
        {name: 'pawn', 'place': 'b2', color: 'w'},
        {name: 'pawn', 'place': 'c2', color: 'w'},
        {name: 'pawn', 'place': 'd2', color: 'w'},
        {name: 'pawn', 'place': 'e2', color: 'w'},
        {name: 'pawn', 'place': 'f2', color: 'w'},
        {name: 'pawn', 'place': 'g2', color: 'w'},
        {name: 'pawn', 'place': 'h2', color: 'w'},
        {name: 'rook', 'place': 'a1', color: 'w'},
        {name: 'knight', 'place': 'b1', color: 'w'},
        {name: 'bishop', 'place': 'c1', color: 'w'},
        {name: 'pawn', 'place': 'd1', color: 'w'},
        {name: 'king', 'place': 'e1', color: 'w'},
        {name: 'bishop', 'place': 'f1', color: 'w'},
        {name: 'knight', 'place': 'g1', color: 'w'},
        {name: 'rook', 'place': 'h1', color: 'w'},
    ];

    const cells = board.querySelectorAll('.col');
    cells.forEach(cell => {
        for (let i = 0; i < figures.length; i++) {
            if (figures[i].place === cell.dataset.place) {
                cell.innerHTML = `<i class="fas fa-chess-${figures[i].name} fa-2x color-${figures[i].color}"></i>`
            }
        }
    });
}

chessBoardRender();
placeFigures();