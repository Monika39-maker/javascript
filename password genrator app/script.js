const lengthEl  = document.getElementById('length-input')
const upperCaseEl  = document.getElementById('upperCase-input')
const lowerCaseEl  = document.getElementById('lowerCase-inut')
const charEl = document.getElementById('char-input')

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
function createRandomChar() {
    return Math.floor(Math.random() * char.length)
}
 
function lengthOfPassword() {
    const passwordLength = lengthEl.value;
    console.log(passwordLength) 

}
lengthOfPassword()