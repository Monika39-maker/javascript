const canvas = document.getElementById('canvas');
const sizeText = document.getElementById('size-text');
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn');
const input = document.getElementById('color-input')
const clearBtn = document.getElementById('clear')
const ctx = canvas.getContext('2d');


var color = 'green'
var isPressed = false;

var x1 = undefined;
var y1 = undefined;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x1 = e.offsetX;
    y1 = e.offsetY;
})

canvas.addEventListener('mouseup', () => {
    isPressed=false;
    x1 = undefined;
    y1 = undefined;
})
canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        drawLine(x1, y1, x2, y2);
        x1 = x2;
        y1 = y2
    }
    

})
var size = 10


function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1 , y1);
    ctx.lineTo(x2, y2)
    input.addEventListener('change' , (e) => {
        ctx.strokeStyle = e.target.value
    })
    ctx.lineWidth = size*0.25
    ctx.stroke();
};


plusBtn.addEventListener('click', () => {
    size = size+5;
    sizeText.innerText = size
    
});

minusBtn.addEventListener('click', () => {
    size = size-5;
    sizeText.innerText = size
});

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});
