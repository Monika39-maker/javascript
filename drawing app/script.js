const canvas = document.getElementById('canvas');
const sizeText = document.getElementById('size-text');
const plusBtn = document.getElementById('plus-btn')
const minusBtn = document.getElementById('minus-btn');
const input = document.getElementById('color-input')
const ctx = canvas.getContext('2d')


var isPressed = false;

canvas.addEventListener('mousemove', (e) => {
    canvas.addEventListener('mousedown', (e) => {
        isPressed = true
        const x1 = e.offsetX
        const y1 = e.offsetY
        console.log(x1, y1)
    })

canvas.addEventListener('mouseup', () => {
        isPressed=false;
        const x2 = undefined
        const y2 = undefined
    });

    if (isPressed) {
        x2 = e.offsetX;
        y2 = e.offsetY;
        console.log(x2, y2)
        x1 = x2;
        y1 = y2;
        drawLine(x1, y1, x2, y2);
    }
    

})
var size = 10





function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1, size, 0, 2*Math.PI);
    ctx.lineTo(x2, y2, size, 0, 2*Math.PI);
    input.addEventListener('change', (e) => {
        ctx.strokeStyle = e.target.value;

    })
    
    ctx.stroke();
};


plusBtn.addEventListener('click', () => {
    size = size+5;
    sizeText.innerText = size
    
});

minusBtn.addEventListener('click', () => {
    size = size-5;
    sizeText.innerText = size
})
