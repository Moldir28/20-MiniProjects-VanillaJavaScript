const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');


// storing the current card
let currentActiveCard = 0;


// storing the DOM cards
const cardsEl = [];

const cardsData = getCardsData()
// const cardsData = [
//     {
//         question: 'What must a variable begin with?',
//         answer: 'A letter, $ or _'
//     },
//     {
//         question: 'What is a variable?',
//         answer: 'Container for a piece of data'
//     },
//     {
//         question: 'Example of Case Sensitive Variable',
//         answer: 'thisIsAVariable'
//     }
// ];

// create cards by looping through the data 
function createCards() {
    cardsData.forEach((data, index) =>
        createCard(data, index)
    )
}

// create single cards
function createCards() {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in DOM
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
    <div class="inner-card">
    <div class="inner-card-front">
      <p>
        ${data.question}
      </p>
    </div>
    <div class="inner-card-back">
      <p>
        ${data.answer}
      </p>
    </div>
  </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'))

    // Add to DOM cards
    cardsEl.push(card);

    cardsContainer.appendChild(card);

    updateCurrentText();
}

function updateCurrentText() {
    currentEl.innerText = `
    ${currentActiveCard + 1}/${cardsEl.length}`
}

// get cards from the local storage
function getCardsData() {
    const cards = JSON.parse(localStorage.getItem('cards')); // converts to array 
    return cards === null ? [] : cards
}

// add the cards to the local storage
function setCardsData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));

    window.location.reload();
}

createCards();

nextBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card left';

    currentActiveCard = currentActiveCard + 1;

    if (currentActiveCard > cardsEl.length - 1) {
        currentActiveCard = cardsEl.length - 1;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});


prevBtn.addEventListener('click', () => {
    cardsEl[currentActiveCard].className = 'card right';

    currentActiveCard = currentActiveCard - 1;

    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    }

    cardsEl[currentActiveCard].className = 'card active';

    updateCurrentText();
});
// classname overwrites the class that is already there 

showBtn.addEventListener('click', () => {
    addContainer.classList.add('show')
});


hideBtn.addEventListener('click', () => {
    addContainer.classList.remove('show')
});


addCardBtn.addEventListener('click', () => {
    const question = questionEl.value;
    const answer = answerEl.value;

    if (question.trim() && answer.trim()) {
        const newCard = { question, answer } // creating a new object

        createCard(newCard);
        questionEl.value = '';
        answerEl.value = '';

        addContainer.classList.remove('show');

        cardsData.push(newCard);
        setCardsData(cardsData);
    }
})


clearBtn.addEventListener('click', () => {
    localStorage.clear();
    cardsContainer.innerHTML = "";
    window.location.reload()
});