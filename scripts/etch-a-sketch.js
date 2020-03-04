const gridBox = document.getElementById('grid-box');
const gridPixel = document.getElementsByClassName('grid-pixel');
let mouseDown = 0;

gridBuilder(64);

gridBox.onmousedown = () => {
    mouseDown = 1;
}
gridBox.onmouseup = () => {
    mouseDown = 0;
}

for (let i = 0; i < gridPixel.length; i++){
    gridPixel[i].addEventListener('mouseover', () => {
        if (mouseDown){
            gridPixel[i].style.background = "black";
        }
    })
}


function gridBuilder(gridSize){
    for(let i = 0; i < gridSize; i++){

        let row = document.createElement('div');
        row.classList.add('flex-row')
        gridBox.appendChild(row);
        for(let j = 0; j < gridSize; j++){
            let div = document.createElement('div');
            div.classList.add('grid-pixel');
            row.appendChild(div);
        }
    }
}

function createGrid(){
    let gridSize = prompt("Please enter the new grid's size (default 64px): ", 64);
    gridBuilder(gridSize);
}