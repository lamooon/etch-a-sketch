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



function mouseOver() {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });

}



createGrid(16);
mouseOver();