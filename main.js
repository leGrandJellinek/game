let input = document.querySelector('.input')
    ,btn = document.querySelector('.btn')
    ,timeOut = document.querySelector('.time')
    ,block = document.querySelector('.block')
    ,score = 0
    ,time = 0
    ,interval = 0
    ,result
    ,currentTime;
    
btn.addEventListener('click', (event) => {event.preventDefault();input.value != '' ? setTimeout(() =>{time = input.value;input.value = '';clearInterval(interval);score = 0;document.querySelector('h3').classList.remove('danger');startGame();result = document.querySelector('.result');block.removeChild(result);}) : '';})
input.addEventListener('keydown' , (event) => {event.key == 'Enter'  ? input.value != '' ? setTimeout(() =>{time = input.value;input.value = '';clearInterval(interval);score = 0;document.querySelector('h3').classList.remove('danger');startGame();result = document.querySelector('.result');block.removeChild(result);}, 0) : '' : '' ;})
block.addEventListener('click', (event) => {event.target.classList.contains('ball') ? setTimeout(() => {score++;event.target.remove();randomFigure()}) : '' ;event.target.classList.contains('fas') ? setTimeout(() => {score++;event.target.remove();randomFigure();}) : '';})

function startGame() {interval = setInterval(() => decreaseTime(), 1000);randomFigure();}

function decreaseTime() {
    if(time === 0) {
        endGame();
    }else {
        let currentTime = --time;
        if(currentTime < 10) {
            currentTime = '0' + currentTime;
            document.querySelector('h3').classList.add('danger');
        }
        timeOut.innerHTML = '00:' + currentTime;
    }
}


function endGame() {block.innerHTML = `<h1 class="result">Ваш результат: <span class="span">${score}</span></h1>`;}
    
function createBall() {
    let ball = document.createElement('div')
    ,size = getRandomNumber(20,60)
    ,blockSize = block.getBoundingClientRect()
    ,x = getRandomNumber(0, blockSize.width - size)
    ,y = getRandomNumber(0, blockSize.height - size);
    
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';
    ball.classList.add('ball');
    ball.style.top = y + 'px';
    ball.style.left = x + 'px';
    ball.style.background = `rgb(${getRandomNumber(0,256)},${getRandomNumber(0,256)},${getRandomNumber(0,256)})`;
    
    block.append(ball);
}

function createTrigon() {
    let trigon = document.createElement('i')
    ,size = getRandomNumber(20,70)
    ,blockSize = block.getBoundingClientRect()
    ,x = getRandomNumber(0, blockSize.width - size)
    ,y = getRandomNumber(0, blockSize.height - size);
    trigon.classList.add('fas');
    trigon.classList.add('fa-triangle');
    trigon.classList.add('trigon');
    
    trigon.style.fontSize = size + 'px';
    trigon.style.top = y + 'px';
    trigon.style.left = x + 'px';
    trigon.style.color = `rgb(${getRandomNumber(0,256)},${getRandomNumber(0,256)},${getRandomNumber(0,256)})`;
    
    block.append(trigon);
}

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function randomFigure(){
    let f = getRandomNumber(1,2) == 1 ? createBall() : createTrigon();
}



// function clickBtn(){
//         if(input.value != '') {
//         time = input.value
//         input.value = '';
//         clearInterval(interval)
//         score = 0;
//         document.querySelector('h3').classList.remove('danger')
//         startGame();
//         result = document.querySelector('.result');
//         block.removeChild(result)
//     }
// }



// if(event.target.classList.contains('ball')) {
//     score++
//     event.target.remove();
//     createBall()
// }