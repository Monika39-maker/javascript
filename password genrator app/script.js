const lengthEl  = document.getElementById('length-input')
const upperCaseEl  = document.getElementById('upperCase-input')
const lowerCaseEl  = document.getElementById('lowerCase-input');
const numberEl = document.getElementById('number-input');
const charEl = document.getElementById('char-input');
const submitEl = document.getElementById('submit');
const passwordEl = document.getElementById('password-input');
const copyEl = document.getElementById('copy')

const upperCase  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase  = 'abcdefghijklmnopqrstuvwxyz'
const number  = '0123456789'
const char = '!@£$%&?';

function createRandomNumber() {
    return number[Math.floor(Math.random() * number.length)]
};

function createRandomUpperCase() {
    return upperCase[Math.floor(Math.random() * upperCase.length)]
};

function createRandomLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}

function createRandomChar() {
    return char[Math.floor(Math.random() * char.length)]
}


submitEl.addEventListener('click', generatePassword)

function generatePassword() {
    const len = lengthEl.value;
    // let x = generateX()
    let password = ''
    for (let i=0; i<len; i++) {
        password += generateX()
    }
    passwordEl.value = password

    

}

function generateX() {
    let pw = []
    if (upperCaseEl.checked) {
        const upperLetter = createRandomUpperCase()
        pw.push(upperLetter)
    
    }
    if (lowerCaseEl.checked) {
        const lowerLetter = createRandomLowerCase()
        pw.push(lowerLetter)
    }
    if (numberEl.checked) {
        const num = createRandomNumber()
        pw.push(num)
    }
    if (charEl.checked) {
        const char = createRandomChar()
        pw.push(char)
    }
    if (pw.length == 0) {
        return ''
    }

    return pw[Math.floor(Math.random() * pw.length)]
    
}
copyEl.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = passwordEl.value;
    document.body.appendChild(textArea)
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('password copied');
    passwordEl.value=''
})
    

