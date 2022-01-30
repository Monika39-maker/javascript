const gameBoard = document.getElementById('wrapper')



const memoryCards = [
    {
        name: 'cheeseburger',
        src: './images/cheeseburger.png'
    },
    {
        name: 'fries',
        src: './images/fries.png'
    },
    {
        name: 'hotdog',
        src: './images/hotdog.png'
    },
    {
        name: 'ice-cream',
        src: './images/ice-cream.png'
    },
    {
        name: 'hotdog',
        src: './images/hotdog.png'
    },
    {
        name: 'milkshake',
        src: './images/milkshake.png'
    },
    {
        name: 'fries',
        src: './images/fries.png'
    },
    {
        name: 'pizza',
        src: './images/pizza.png'
    },
    {
        name: 'cheeseburger',
        src: './images/cheeseburger.png'
    },
    {
        name: 'ice-cream',
        src: './images/ice-cream.png'
    },
    {
        name: 'milkshake',
        src: './images/milkshake.png'
    },
    {
        name: 'pizza',
        src: './images/pizza.png'
    },
    
    
]

memoryCards.sort(() => 0.5 - Math.random())
let cardImageArr = [];
let cardIdArr = [];
let result = 0

function checkCardMatch() {
    const images = document.querySelectorAll('img')
    const optionOne = cardIdArr[0];
    const optionTwo = cardIdArr[1];
    console.log(images)
    if (memoryCards[optionOne].src === memoryCards[optionTwo].src ) {
        alert('you got them');
        images[optionOne].setAttribute('src', './images/white.png')
        images[optionTwo].setAttribute('src', './images/white.png')
        result+=1;
        
        
        
    }
    else {
        images[optionOne].setAttribute('src', './images/blank.png');
        images[optionTwo].setAttribute('src', './images/blank.png');
        
    }
    cardIdArr = [];
    cardImageArr = [];
    if (result === 6) {
        alert('CONGRATS!!!')
    }
    
}

function flipCard() {
    

    const cardId = this.getAttribute('data-id');
    this.setAttribute("src", memoryCards[cardId].src)
    const cardImage = this.getAttribute('src')
    
    cardIdArr.push(cardId)
    cardImageArr.push(cardImage)
    if (cardImageArr.length === 2) {
        setTimeout(() => {
            checkCardMatch()
        }, 300);
    }

}

const createImage = () => {
    
    for (let i=0; i<memoryCards.length; i++) {
        const imageCard = document.createElement("img");
        imageCard.setAttribute('src', './images/blank.png');
        imageCard.setAttribute('data-id', i)
        imageCard.classList.add('image-card')
        
        
        
        imageCard.addEventListener('click', flipCard)
        gameBoard.appendChild(imageCard);



    }
    
}




createImage()
