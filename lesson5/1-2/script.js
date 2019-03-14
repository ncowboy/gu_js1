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
function chessBoardRender() {
    //Создаем доску
    const board = document.createElement('table');
    board.classList.add('chess-board');
    document.body.appendChild(board);

    //Создаем ячейки

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
            }
            row.appendChild(col);
        }

    }

    // Заполняем буквы и цифры
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
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
     * Расставляет старшие фигуры
     * @param {int} row Номер строки в дереве элементов
     * @param {string} color Цвет фигур
     */
    function placeSeniors(row, color) {
        const seniorsRow = document.querySelector(`.row:nth-child(${row})`);
        const seniorsCells = seniorsRow.querySelectorAll('.col');
        seniorsCells[0].innerHTML = `<i class="fas fa-chess-rook fa-2x color-${color}"></i>`;
        seniorsCells[7].innerHTML = `<i class="fas fa-chess-rook fa-2x color-${color}"></i>`;
        seniorsCells[1].innerHTML = `<i class="fas fa-chess-knight fa-2x color-${color}"></i>`;
        seniorsCells[6].innerHTML = `<i class="fas fa-chess-knight fa-2x color-${color}"></i>`;
        seniorsCells[2].innerHTML = `<i class="fas fa-chess-bishop fa-2x color-${color}"></i>`;
        seniorsCells[5].innerHTML = `<i class="fas fa-chess-bishop fa-2x color-${color}"></i>`;
        seniorsCells[3].innerHTML = `<i class="fas fa-chess-king fa-2x color-${color}"></i>`;
        seniorsCells[4].innerHTML = `<i class="fas fa-chess-queen fa-2x color-${color}"></i>`;
    }

    /**
     * Расставляет пешки
     * @param {int} row Номер строки в дереве элементов
     * @param {string} color Цвет фигур
     */

    function placePawns(row, color) {
        const pawnsRaw = document.querySelector(`.row:nth-child(${row})`);
        const pawnsCells = pawnsRaw.querySelectorAll('.col');
        pawnsCells.forEach((cell) =>
            cell.innerHTML = `<i class="fas fa-chess-pawn fa-2x color-${color}"></i>`);
    }

    placeSeniors(2, 'black');
    placeSeniors(9, 'white');
    placePawns(3, 'black');
    placePawns(8, 'white');
}

chessBoardRender();
placeFigures();