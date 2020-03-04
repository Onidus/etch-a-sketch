const gridBox = document.getElementById('grid-box');
const gridPixel = document.getElementsByClassName('grid-pixel');
const resetButton = document.getElementById('reset-grid');
let mouseDown = 0;
let currentColor = "black";

resetButton.addEventListener('click', createGrid);

//Run main function
gridBuilder(64);







function colorPicker(){
    const colorBox = document.getElementById('color-box');
    const colorButtons = colorBox.querySelectorAll('button');

    colorButtons.forEach((button) => {
        button.addEventListener('click', () =>{

            //Remove "selected" from all buttons prior to selecting a new one
            colorButtons.forEach((button) => {
                button.classList.remove('selected');
            })

            //"select" button
            button.classList.add('selected');

            //Check button id to decide which color to use
            switch (button.id){
                case "btn-black":
                    currentColor = "black";
                    break;
                case "btn-d-grey":
                    currentColor = "dimgrey";
                    break;
                case "btn-grey":
                    currentColor = "darkgrey";
                    break;
                case "btn-l-grey":
                    currentColor = "lightgrey";
                    break;
                case "btn-white":
                    currentColor = "white";
                    break;
            }

        })
    })
}



function gridBuilder(gridSize){
    //Mouse hold listener
    gridBox.onmousedown = () => {
        mouseDown = 1;
    }
    gridBox.onmouseup = () => {
        mouseDown = 0;
    }

    colorPicker();

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

    //Adds coloring functionality to grid's pixels *ADD AFTER THE GRID IS BUILT*
    for (let i = 0; i < gridPixel.length; i++){
        gridPixel[i].addEventListener('mouseover', () => {
            if (mouseDown){
                gridPixel[i].style.background = currentColor;
            }
        })
        gridPixel[i].addEventListener('mousedown', () => {
            gridPixel[i].style.background = currentColor;
        })
    }
}



function createGrid(){
    let gridSize = prompt("Please enter the new grid's size", 64);
    if(gridSize <= 0 || isNaN(gridSize)){
        return;
    }
    removeGrid();
    gridBuilder(gridSize);
}

function removeGrid(){
    gridBox.innerHTML = "";
}