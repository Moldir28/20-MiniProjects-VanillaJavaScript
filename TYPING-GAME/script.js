const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('setting-btn');
const settings = document.getElementById('setting');
const settingsForm = document.getElementById('setting-form');
const difficultySelect = document.getElementById('difficulty');

let randomWord;
let score = 0;
let time = 10;

let difficulty =
    localStorage.getItem('difficulty') !== null
        ? localStorage.getItem('difficulty')
        : 'medium';


difficultySelect.value =
    localStorage.getItem('difficulty') !== null
        ? localStorage.getItem('difficulty')
        : 'medium';

// focus on input field
text.focus();

const timeInterval = setInterval(updateTime, 1000);

async function getRandomWord() {
    const res = await fetch('https://random-words-api.vercel.app/word');
    const data = await res.json();
    return data[Object.keys(data)[0]].word.toLowerCase();
}


async function addWordToDOM() {
    randomWord = await getRandomWord();
    console.log(randomWord)
    word.innerHTML = randomWord;

}

function updateScore() {
    score++
    scoreEl.innerHTML = score;
}

addWordToDOM();



function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    endGameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is: ${score}</p>
    <button onClick="window.location.reload()">Reload</button>`

    endGameEl.style.display = 'flex';
};


text.addEventListener('input', e => {
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        // Clear
        e.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
});


// settings btn click
settingsBtn.addEventListener('click', () =>
    settings.classList.toggle('hide'));

settingsForm.addEventListener('change', (e) => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})