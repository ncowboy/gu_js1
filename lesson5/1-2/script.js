/*
Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. Заполнить созданную
таблицу фигурами, фигуры должны выглядеть как картинки, либо можно использовать символы (существуют символы шахматных фигур)
причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
*/

"use strict";

function chessBoardRender() {
    //Создаем доску
    const board = document.createElement('table');
    board.classList.add('chess-board');
    document.body.appendChild(board);

    //Создаем ячейки
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        row.classList.add('row');
        board.appendChild(row);
    }

    const rows = board.getElementsByTagName('tr');
    for (let k = 0; k < rows.length; k++) {
        for (let m = 0; m < rows.length; m++) {
            const col = document.createElement('td');
            if ((k === 0 || k === 9) && m !== 0 && m !== 9) {
                col.classList.add('row-header');
            } else if ((m === 0 || m === 9) && k !== 0 && k !== 9) {
                col.classList.add('col-header');
            } else if (k === 0 && m === 0 || k === 9 && m === 9 || k === 0 && m === 9 || m === 0 || k === 9) {
                col.classList.add('col-blank');
            } else {
                col.classList.add('col');
            }
            rows[m].appendChild(col);
        }

    }

    // Заполняем буквы и цифры
    const  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const colH = board.querySelectorAll('.col-header:nth-child(2n');
    const rowHLeft = board.querySelectorAll('.row-header:nth-child(1)');
    const rowHRight = board.querySelectorAll('.row-header:nth-child(n+2)');
    console.log(colH);

    for (let g = 0; g < 8; g++) {
        rowHLeft[g].textContent = 8 - g;
        rowHRight[g].textContent = 8 - g;
    }


}


chessBoardRender();