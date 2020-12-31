const body = document.querySelector('body');
const container = document.querySelector('#container');
const inputCell = document.createElement('input');
const child = container.children;
let firstBatchHolder = [];
let secondBatchHolder = [];
let holder;

const addCells = function(){
    const lastCell = document.querySelector('#lastCell') 
    for(let i = 0 ; i < 18; i ++){ //22 is to include input space
        let cell = document.createElement('div');
        container.insertBefore(cell, lastCell );
        if(i === 3 || i === 7 || i === 11 || i === 15){
            container.children[i].classList.add('orangeC')
        }
        lastCell.classList.add('orangeC')
        container.children[i].classList.add(`cell${i}`)
        container.children[i].textContent = `${i}`
    }
    //insert a div inside body before grid 
    body.insertBefore(inputCell, container);
    // select and add class
    let input = document.querySelector('input');
    input.classList.add('inputCell');
    input.setAttribute('placeholder', '0');
    //prevents adding more than 9 with keyboard
    input.setAttribute('onkeydown', 'limit(this)');
    input.setAttribute('onkeyup', 'limit(this)')
    addTextAndListeners();

}
const addTextAndListeners =  function(){
    const inputField = document.querySelector('input');
    inputCell.setAttribute('max', '444');
    child[0].textContent = 'AC';
    child[1].textContent = '+/-';
    child[2].textContent = '%';
    child[3].textContent = '/';
    child[4].textContent = 7;
    child[5].textContent = 8;
    child[6].textContent = 9;
    child[7].textContent = 'x';
    child[8].textContent = '4';
    child[9].textContent = 5;
    child[10].textContent = 6;
    child[11].textContent = '-';
    child[12].textContent = 3;
    child[13].textContent = 2;
    child[14].textContent = 1;
    child[15].textContent = '+';
    child[16].textContent = '.';
    child[17].textContent = 0;
    child[18].textContent = '=';
    for(let i = 0 ; i < 19; i ++){
        if(child[i].textContent < 11 && child[i].textContent != 0){
            child[i].addEventListener('click', function() {
                        // limits clicked in input
                if([...inputCell.value].length < 10){
                    inputCell.value += child[i].textContent;
                }
                if(holder.length > 0 && [...inputCell.value].length < 10){
                    inputCell.value = +holder;
                }  
            })            
        }
                //clicking on zero with more than 1 length
        if(child[i].textContent == 0){
            child[i].addEventListener('click', () => {
                if([...inputField.value].length >=1 && [...inputField.value].length <= 9){
                    inputField.value += child[i].textContent;
                }
            })  
        }
    }

    child[15].addEventListener('click', function hello(){
        if(firstBatchHolder.length < 1 && secondBatchHolder.length < 1){
            holder = [];
            firstBatchHolder += inputCell.value;
            holder = inputCell.value;

            
        }
        else if(firstBatchHolder.length >= 1 && secondBatchHolder.length < 1){
            inputCell.value = (+firstBatchHolder) + (+secondBatchHolder)
        }
        else{
            inputCell.value = (+firstBatchHolder) + (+secondBatchHolder)
            console.log('hi')
        }
    })
}



// ########KEYBOARD LIMIT INPUT 
const limit = element => {
    var max_chars = 9   ;
    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}

addCells();