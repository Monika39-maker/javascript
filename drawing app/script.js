const canvas = document.getElementById('canvas');
const sizeText = document.getElementById('size-text');
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn')
const ctx = canvas.getContext('2d')

canvas.addEventListener('mousedown', (e) => {
    const x = e.offsetX
    const y = e.offsetY
    draw(x, y)
})
var size = 30

sizeText.innerText = size
function draw(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2*Math.PI);
    ctx.stroke()
}

plusBtn.addEventListener('click', () => {
    size =+ 5
})