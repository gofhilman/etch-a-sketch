// Create the grids
const container = document.querySelector('#container');
for (let i=0; i<16; i++) {
    const verticalElement = document.createElement('div');
    verticalElement.setAttribute('class', 'vertical-element');
    container.appendChild(verticalElement);
    for (let j=0; j<16; j++) {
        const grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        verticalElement.appendChild(grid);
    }
}

// Create the event listener
const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
    grid.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'gray';
    });
});