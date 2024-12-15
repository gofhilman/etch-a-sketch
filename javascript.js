// Function to create the grids
function createGrids(n) {
    for (let i=0; i<n; i++) {
        const verticalElement = document.createElement('div');
        verticalElement.setAttribute('class', 'vertical-element');
        container.appendChild(verticalElement);
        for (let j=0; j<n; j++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            verticalElement.appendChild(grid);
        }
    }
}

// Function to sketch with an event listener
function sketchGrids() {
    grids.forEach((grid) => {
        grid.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'gray';
        });
    });
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
    n = +prompt('You will sketch in n\u00D7n grids. Input n number!');
    container.replaceChildren();
    createGrids(n);
    grids = document.querySelectorAll('.grid');
    sketchGrids();
})