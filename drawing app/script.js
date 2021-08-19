const canvas = document.getElementById('canvas');
const sizeText = document.getElementById('size-text');
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')
const ctx = canvas.getContext('2d')


var isPressed = false;
canvas.addEventListener('mousedown', () => {
    isPressed = true
})

canvas.addEventListener('mouseup', () => {
    isPressed=false
})
canvas.addEventListener('mousedown', (e) => {
    if (isPressed) {
        const x = e.offsetX
        const y = e.offsetY
        draw(x, y)
    }

})
var size = 10


function draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2*Math.PI);
    ctx.stroke()
}

plusBtn.addEventListener('click', () => {
    size = size+5;
    sizeText.innerText = size
    
});

minusBtn.addEventListener('click', () => {
    size = size-5;
    sizeText.innerText = size
})
