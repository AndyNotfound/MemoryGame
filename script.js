const cardArray = [
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name : 'pizza',
        img: 'images/pizza.png'
    },
    {
        name : 'fries',
        img: 'images/fries.png'
    },
    {
        name : 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name : 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name : 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name : 'milkshake',
        img: 'images/milkshake.png'
    },

    {
        name : 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('#grid');
const result = document.querySelector('#result');
const cardsWon = [];
let cardFlipped = [];
let cardsChosenId = [];

function createBoard (){

    for (let i = 0; i < 12; i++){
        const card = document.createElement('img');
        card.setAttribute('src' , 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flippingCard);
        grid.appendChild(card);
    }

}

createBoard ();

function checkMatch (){
    const cards = document.querySelectorAll('img')
    const one = cardsChosenId[0];
    const two = cardsChosenId[1];

    if (one == two){
        alert('Choose Another Cards!');
        cards[one].setAttribute('src', 'images/blank.png');
        cards[two].setAttribute('src', 'images/blank.png');
    }

    if (cardFlipped[0] === cardFlipped[1]){
        alert ('Nice One!');
        cards[one].setAttribute('src', 'images/white.png');
        cards[two].setAttribute('src', 'images/white.png');
        cards[one].removeEventListener('click', flippingCard);
        cards[two].removeEventListener('click', flippingCard);
        cardsWon.push(cardFlipped);
    } else {
        cards[one].setAttribute('src', 'images/blank.png');
        cards[two].setAttribute('src', 'images/blank.png');
        alert ('Lol You are noob!');
    }

    result.textContent = cardsWon.length;

    if (cardsWon.length === 6){
        alert ('Lol Nice!');
    }

    cardFlipped = [];
    cardsChosenId = [];
}

function flippingCard (){
    const cardId = this.getAttribute('data-id');

    cardFlipped.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if (cardFlipped.length === 2){
        setTimeout(checkMatch, 500);
    }

}