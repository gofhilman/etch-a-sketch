// Function to create the grids
function createGrids(n) {
    for (let i=0; i<n; i++) {
        const verticalElement = document.createElement('div');
        verticalElement.setAttribute('class', 'vertical-element');
        container.appendChild(verticalElement);
        for (let j=0; j<n; j++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            grid.style.opacity = '0';
            verticalElement.appendChild(grid);
        }
    }
}

// Function to sketch with an event listener
function sketchGrids() {
    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = randomizeColor();
            e.target.style.opacity = `${+e.target.style.opacity+0.1}`;
        });
    });
}

// Function to randomize sketch color
function randomizeColor() {
    let randomRGBNumber = [];
    for(let i=0; i<3; i++) {
        randomRGBNumber.push(Math.floor(256*Math.random()));
    }
    return `rgb(${randomRGBNumber[0]},${randomRGBNumber[1]},${randomRGBNumber[2]})`;
}

// Create the grids
const container = document.querySelector('#container');
let n = 16;
createGrids(n);

// Sketch
let grids = document.querySelectorAll('.grid');
sketchGrids();

// Create an event listener to the play button
const playButton = document.querySelector('.button');
playButton.addEventListener('click', () => {
    do {
        n = +prompt('You will sketch in n\u00D7n grids. Input n number! (maximum 100)');
    } while (n>100 || isNaN(n));   
    container.replaceChildren();
    createGrids(n);
    grids = document.querySelectorAll('.grid');
    sketchGrids();
})