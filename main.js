
// Create grid variables //
let numRow = 16;

const sketchBoardContainer = document.querySelector('.sketch-board-container')


function generateRandomColor(min = 0, max = 255) {
    let r = Math.floor(Math.random() * (max - min + 1) + min);
    let g = Math.floor(Math.random() * (max - min + 1) + min);
    let b = Math.floor(Math.random() * (max - min + 1) + min);
    return `rgb(${r},${g},${b})`;
}



// Create the grid //

function createGrid(numRow) {
    // Add px to height and width //
    
    let sizeX = 550 / numRow;
    let sizeY = 550 / numRow;
    let sizeWidth = sizeX + 'px';
    let sizeHeight = sizeY + 'px';


    sketchBoardContainer.setAttribute('id', 'container');
    sketchBoardContainer.setAttribute('style', `grid-template-rows: repeat(${numRow}, 1fr)`);
    sketchBoardContainer.setAttribute('style', `grid-template-columns: repeat(${numRow}, 1fr;)`);

    
    for (i = 0; i < numRow * numRow; i++) {

        
        let newDivs = document.createElement('div');
        newDivs.setAttribute('style', `width: ${sizeWidth}; height: ${sizeHeight};`)
        newDivs.setAttribute('class', 'sketch-board-item');
        newDivs.style.height = sizeHeight;
        sketchBoardContainer.appendChild(newDivs);

        newDivs.addEventListener('mouseover',function(){
            // newDivs.classList.add('selected');
            newDivs.style.backgroundColor = "black"
        })

    };
    


};
createGrid(numRow);


let clearButton = document.querySelector('.clear');
// console.log(numRow);

function clearGrid(e){
    sketchBoardContainer.innerHTML = "";
    let numRow = parseInt(prompt('How many rows/columns would you like? Please enter a number between 2 and 100.'));

    if (numRow < 2 || numRow > 100) {
        alert('No can do, refreshing page now.');
        let numRow = 16;
        createGrid(numRow); 
    } else {
    createGrid(numRow);
    }
    
}

clearButton.addEventListener('click', clearGrid);

let colorButton = document.querySelector('.color');

let blackButton = document.querySelector('.black');

function colorGrid (e){
    let gridItems = document.querySelectorAll('.sketch-board-item');
    gridItems.forEach((cell) => {
        cell.addEventListener('mouseover', function(e){
            cell.style.backgroundColor = generateRandomColor();

        })
    });
}


function blackGrid (e){
    let gridItems = document.querySelectorAll('.sketch-board-item');
    gridItems.forEach((cell) => {
        cell.addEventListener('mouseover', function(e){
            cell.style.backgroundColor = "black";

        })
    });

}


blackButton.addEventListener('click', blackGrid);
colorButton.addEventListener('click', colorGrid );
