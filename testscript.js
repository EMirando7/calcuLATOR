const container = document.querySelector("#container");
const input = document.querySelector("input");
const inputSoFarSelector = document.querySelector('#inputSoFar');
addCellNumClasses(),workingNumberCells(),plusOrMinus(),showPercentage(),Add(),Division(),Multiply(),Subtract()
function showPercentage(){
    container.children[2].addEventListener('click', function(){
        input.value = input.value * 0.01
    }, false)
}
function addCellNumClasses() {
    let oneToTenBtns = [1,2,3,4,5,6,7,8,9,0,'.'];
    for(let i = 0 ; i < 19; i ++){
        container.children[i].classList.add('cell')
        if(oneToTenBtns.includes(+container.children[i].textContent)) container.children[i].classList.add('number');
    }
    container.children[17].classList.add('number');
}
function workingNumberCells () {
    document.addEventListener('click', function(e){
        clearInputACBtn();
        if(input.value.length <= 8){
            if(e.target.classList.contains('dot') && input.value =='') input.value = '0.'   
            if(e.target.classList.contains('number') && !e.target.classList.contains('dot') && !e.target.classList.contains('cell0')){
                input.value += e.target.textContent
            }
            if(e.target.classList.contains('dot') && !input.value.includes('.')){
                input.value += e.target.textContent
            }
            if(e.target.classList.contains('cell0') && !input.value[0] == '0'){
                input.value += e.target.textContent
            } 
        }
        removeHyph();
    }, false)
}
function removeHyph(){
    return input.value.length == 1 && input.value === '-' ? input.value = '' : input.value;
}
function clearInputACBtn (){
    container.children[0].addEventListener('click', function(){
        input.value = '';
        inputSoFarSelector.innerHTML = '0'
    }, false)
}
function plusOrMinus(){
    container.children[1].addEventListener('click', function(){
        let tempArr = [...input.value];
        if(input.value.includes('-')){
            tempArr.shift()
            tempArr = tempArr.join('');
            input.value = tempArr
        } else {
            tempArr.unshift('-');
            tempArr =tempArr.join('');
            input.value = tempArr
        }
    }, false)
}
function shortenNum (){
    let numToShorten = +input.value
    if(input.value.length > 8 && input.value.indexOf('-') == 0){
        input.value = numToShorten.toFixed(6);
        return;
    }
    if(input.value.length > 8){
        input.value = numToShorten.toFixed(0);
    }else {
        return numToShorten.toFixed(8)
    }
}
function Division(){
    let firstNum = '';
    let secondNum = '';
    let divisionEventListenerFunc = function(){
        inputSoFarSelector.innerHTML = input.value;
        firstNum = +input.value;
        input.value = ''
        if(!inputSoFarSelector.innerHTML.includes('/')) inputSoFarSelector.innerHTML += ' ' + '/'
        input.value = '';
    }
    container.children[3].addEventListener('click', divisionEventListenerFunc, false)
    container.children[18].addEventListener('click', () => {
        debugger;
        if(inputSoFarSelector.innerHTML.includes('*') || inputSoFarSelector.innerHTML.includes('-') || inputSoFarSelector.innerHTML.includes('+')){
            if(inputSoFarSelector.innerHTML.indexOf('-') == 0 && !inputSoFarSelector.innerHTML.includes('*')&& !inputSoFarSelector.innerHTML.includes('-')){
                secondNum = +input.value;
                input.value = (firstNum / secondNum);
                shortenNum()
                return
            }
            else if(inputSoFarSelector.innerHTML.indexOf('-') == 0 && !inputSoFarSelector.innerHTML.includes('*')){
                if(inputSoFarSelector.innerHTML.indexOf('-',1) !== 0 && !inputSoFarSelector.innerHTML.includes('/')) return
                else if(inputSoFarSelector.innerHTML.includes('/')){
                    secondNum = +input.value;
                    input.value = (firstNum / secondNum);
                    shortenNum()
                    return;
                }
                secondNum = +input.value;
                input.value = (firstNum / secondNum)
                shortenNum()
                return;
            }
            else{
                return
            }
        }
        inputSoFarSelector.innerHTML += ' ' + input.value;
        secondNum = +input.value;
        input.value = (firstNum / secondNum)
        shortenNum()
    }, false)
}
function Multiply(){
    let firstNum = '';
    let secondNum = '';
    let multiplyEventListenerFunc = function(){
        inputSoFarSelector.innerHTML = input.value;
        firstNum = +input.value;
        input.value = ''
        if(!inputSoFarSelector.innerHTML.includes('*')) inputSoFarSelector.innerHTML += ' ' + '*'
        input.value = '';
    }
    container.children[7].addEventListener('click', multiplyEventListenerFunc, false)
    container.children[18].addEventListener('click', () =>{
        if(inputSoFarSelector.innerHTML.includes('/') || inputSoFarSelector.innerHTML.includes('-') ||inputSoFarSelector.innerHTML.includes('+')){
            if(inputSoFarSelector.innerHTML.indexOf('-') == 0 && !inputSoFarSelector.innerHTML.includes('/') && !inputSoFarSelector.innerHTML.includes('+') && !inputSoFarSelector.innerHTML.includes('-')){  
                secondNum = +input.value;
                input.value = (firstNum * secondNum);
                shortenNum()
                return;
            }
            else if(inputSoFarSelector.innerHTML.indexOf('-') == 0 && inputSoFarSelector.innerHTML.includes('*')){
                secondNum = +input.value;
                input.value = (firstNum * secondNum);
                shortenNum()
                return
            }else{
                return
            }
        }
        inputSoFarSelector.innerHTML += ' ' + input.value;
        secondNum = +input.value;
        input.value = (firstNum * secondNum);
        shortenNum()
        return input.value.length > 9 ? input.value.pop() : input.value 
    }, false)
}
function Subtract(){
    let firstNum = '';
    let secondNum = '';
    let subtractEventListenerFunc = function(){
        inputSoFarSelector.innerHTML = input.value;
        firstNum = +input.value;
        input.value = ''
        if(!inputSoFarSelector.innerHTML.includes('*')) inputSoFarSelector.innerHTML += ' ' + '-'
        input.value = '';
    }
    container.children[11].addEventListener('click', subtractEventListenerFunc, false)
    container.children[18].addEventListener('click', () =>{
        if(inputSoFarSelector.innerHTML.includes('/') || inputSoFarSelector.innerHTML.includes('*') || inputSoFarSelector.innerHTML.includes('+')|| inputSoFarSelector.innerHTML.includes('-')){
            if(inputSoFarSelector.innerHTML.indexOf('-') == 0 && !inputSoFarSelector.innerHTML.includes('/') && !inputSoFarSelector.innerHTML.includes('+') && !inputSoFarSelector.innerHTML.includes('-')){
                secondNum = +input.value;
                input.value = (firstNum - secondNum);
                shortenNum()
                return;
            } else if(inputSoFarSelector.innerHTML.indexOf('-') == 0 && !inputSoFarSelector.innerHTML.includes('/') &&inputSoFarSelector.innerHTML.includes('*')&& inputSoFarSelector.innerHTML.includes('+')){
                secondNum = +input.value;
                input.value = (firstNum - secondNum)
                shortenNum()
                return;
            }
            else if(inputSoFarSelector.innerHTML.includes('-')&& !inputSoFarSelector.innerHTML.includes('/') && !inputSoFarSelector.innerHTML.includes('*') && !inputSoFarSelector.innerHTML.includes('+')){
                if(!inputSoFarSelector.innerHTML.indexOf('-') ==0 && inputSoFarSelector.innerHTML.indexOf('-', 1)) {
                    inputSoFarSelector.innerHTML += ' ' + input.value;
                    secondNum = +input.value;
                    input.value = (firstNum - secondNum);
                    shortenNum()
                    return
                }
                if(inputSoFarSelector.innerHTML.indexOf('-')==0 && inputSoFarSelector.innerHTML.indexOf('-', 1)){
                    secondNum = +input.value;
                    input.value = (firstNum - secondNum);
                    shortenNum()
                    return
                } 
                inputSoFarSelector.innerHTML += ' ' + input.value;
                secondNum = +input.value;
                input.value = (firstNum - secondNum);
                shortenNum()
                return;
            }else {
                return
            }
        }
        inputSoFarSelector.innerHTML += ' ' + input.value;
        secondNum = +input.value;
        input.value = (firstNum - secondNum);
        shortenNum()
    }, false)
}
function Add(){
    let firstNum = '';
    let secondNum = '';
    let additionEventListenerFunc = function(){
        inputSoFarSelector.innerHTML = input.value;
        firstNum = +input.value;
        input.value = ''
        if(!inputSoFarSelector.innerHTML.includes('+')) inputSoFarSelector.innerHTML += ' ' + '+'
        input.value = '';
    }
    container.children[15].addEventListener('click', additionEventListenerFunc, false)
    container.children[18].addEventListener('click', () =>{
        if(inputSoFarSelector.innerHTML.includes('-') || inputSoFarSelector.innerHTML.includes('*') || inputSoFarSelector.innerHTML.includes('/')){
            if(inputSoFarSelector.innerHTML.indexOf('-') == 0){
                inputSoFarSelector.innerHTML += ' ' + input.value;
                secondNum = +input.value;
                input.value = (firstNum + secondNum);
                shortenNum();
                return;
            } else{
                return;
            }
        }
        inputSoFarSelector.innerHTML += ' ' + input.value;
        secondNum = +input.value;
        input.value = (firstNum + secondNum);
        shortenNum();
    }, false)
}