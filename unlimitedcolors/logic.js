// generating an random value for colors 
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color+= hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId;
// console.log(randomColor());
const body = document.querySelector('body')
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const startChanginColor = function(){
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 1000)
    }
    
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChanginColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChanginColor)
document.querySelector('#stop').addEventListener('click',stopChanginColor)