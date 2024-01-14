const grid = document.querySelector('.grid');


function createGrid(n) {

    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add("row"); //adds className
        for (let j= 0; j < n; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = (600) / n + "px";
            square.style.height = (600) / n + "px";
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function mouseOverDefault() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });

}

function mouseOverRandom() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        });
    });
}

function clearBoard() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.style.backgroundColor = 'floralwhite';
    })
}

function deleteBoard() {
    document.querySelectorAll(".row").forEach((row) => row.parentNode.removeChild(row))
}

function buttonListener() {
    const normal = document.querySelector('.normal');
    const random = document.querySelector('.random');
    const clear = document.querySelector('.clear');
    const changeSize = document.querySelector('.changeSize');

    clear.addEventListener('click', () => {
        clearBoard();
    });

    changeSize.addEventListener('click', () => {
       let n = prompt("Choose size of the grid from 1 to 100.");
       deleteBoard();
       createGrid(n);
       mouseOverDefault();
    });

    normal.addEventListener('click', () => {
        clearBoard();
        mouseOverDefault();
    });

    random.addEventListener('click', () => {
       clearBoard();
       mouseOverRandom();
    });


}


createGrid(16);
mouseOverDefault();
buttonListener();