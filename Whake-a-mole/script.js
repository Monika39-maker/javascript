
const boxes = document.querySelectorAll('.box');
let score = document.querySelector('#score');
let timeLeft = document.querySelector('#time-left');

let userPoints = 0;
let timeRemaining = 10;
let timerId = 'null'

function square() {
    
    let randomPosition = boxes[(Math.floor(Math.random() * 12))]

    boxes.forEach(box => {
        box.classList.remove('mole');
        randomPosition.classList.add('mole')
        hitPosition = randomPosition.id
        
    
        
    })
    boxes.forEach(id => {
        id.addEventListener("mouseup", () => {
            if (id.id === hitPosition) {
                userPoints++;
                console.log(userPoints)
                score.textContent = userPoints;
                hitPosition = null
            }
        })
        
    })
}

function moveMole() {
    timerId = setInterval(() => {square()}, 1500);
}

function setTimer() {
    timeRemaining--;
    timeLeft.textContent = timeRemaining;
    if (timeRemaining == 0) {
        clearInterval(setTimerId)
        clearInterval(timerId)
        alert('TIME OUT! Your score is 10')

    }
    
}
let setTimerId = setInterval(() => {setTimer()}, 1000);


moveMole()

