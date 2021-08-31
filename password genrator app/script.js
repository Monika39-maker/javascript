const lengthEl  = document.getElementById('length-input')
const upperCaseEl  = document.getElementById('upperCase-input')
const lowerCaseEl  = document.getElementById('lowerCase-input');
const numberEl = document.getElementById('number-input');
const charEl = document.getElementById('char-input');
const submitEl = document.getElementById('submit')

const upperCase  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase  = 'abcdefghijklmnopqrstuvwxyz'
const number  = '0123456789'
const char = '!@£$%&?'

console.log(Math.floor(Math.random() * number.length));
console.log(Math.floor(Math.random() * upperCase.length))

function creatRandomNumber() {
    return Math.floor(Math.random() * number.length)
};

function createRandomUpperCase() {
    return Math.floor(Math.random() * upperCase.length)
};

function createRandomLowerCase() {
    return Math.floor(Math.random() * lowerCase.length)
}
function createRandomNumber() {
    return Math.floor(Math.random() * number.length)
}
function createRandomChar() {
    return Math.floor(Math.random() * char.length)
}


submitEl.addEventListener('click', generatePassword)

function generatePassword() {
    let len = lengthEl.value;
    let pw = ''
    for (let i=0; i<len; i++) {
        if (upperCaseEl.checked) {
            const upperLetter = createRandomUpperCase()
            pw += upperLetter
        }
        if (lowerCaseEl.checked) {
            const lowerLetter = createRandomLowerCase()
            pw += lowerLetter
        }
        if (numberEl.checked) {
            const num = createRandomNumber()
            pw += num
        }
        if (charEl.checked) {
            const char = createRandomChar()
            pw += char
        }
        alert(pw)
    }

}
    

