const body = document.querySelector('body');
const container = document.querySelector('#container');

const addCells = () =>{
    const lastCell = document.querySelector('#lastCell') 
    for(let i = 0 ; i < 18; i ++){
        let cell = document.createElement('div');
        container.insertBefore(cell, lastCell );
        container.children[i].classList.add(`cell${i}`)
    }
}

addCells()