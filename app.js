/* Imports */
import { getRandomItem } from './utils.js';

/* State */
// let shell = ['shell-1', 'shell-2', 'shell-3'];
let pearl = ['pearl-1', 'pearl-2', 'pearl-3'];
let guess = ['guess1', 'guess2', 'guess3'];
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');
const playAgainButton = document.getElementById('play-again-button');
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay = document.getElementById('losses-display');
// let gameState = '';
let computer = '';

// let guess = [guess1, guess2, guess3];

function loadPage() {
    displayShells();
    pearl.classList.remove('hidden');
    // gameState = 'guess';
}

guess1.addEventListener('click', () => {
    guess = guess1;
    // gameState = 'results';
    shell1.classList.add('reveal');
    displayGuess();
    handleResults();
    displayScoreboard();
});

guess2.addEventListener('click', () => {
    guess = guess2;
    // gameState = 'results';
    shell2.classList.add('reveal');
    displayGuess();
    handleResults();
    displayScoreboard();
});

guess3.addEventListener('click', () => {
    guess = guess3;
    // gameState = 'results';
    shell3.classList.add('reveal');
    displayGuess();
    handleResults();
    displayScoreboard();
});

// function displayShells() {
//     if (gameState = 'guess') {
// pearl1.classList.add('hidden');
// pearl2.classList.add('hidden');
// pearl3.classList.add('hidden');
function displayShells() {
    // if ((gameState = 'guess')) { {
    shell1.classList.remove('reveal');
    shell2.classList.remove('reveal');
    shell3.classList.remove('reveal');
    display1.classList.add('hidden');
    display2.classList.add('hidden');
    display3.classList.add('hidden');
    // playAgainButton.classList.add('hidden');
}

playAgainButton.addEventListener('click', () => {
    playAgain();
});

function displayScoreboard() {
    totalDisplay.textContent = total;
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = total - wins;
    playAgainButton.classList.remove('hidden');
}

function playAgain() {
    displayShells();
    displayScoreboard();
}

function result(pick, computer) {
    computer = getRandomItem(pearl);
    if (pick === 'guess1' && computer === 'pearl-1') {
        return 1;
    }
    if (pick === 'guess1' && computer !== 'pearl-1') {
        return 1;
    }
    if (pick === 'guess2' && computer === 'pearl-2') {
        return 1;
    }
    if (pick === 'guess2' && computer !== 'pearl-2') {
        return -1;
    }
    if (pick === 'guess3' && computer === 'pearl-3') {
        return -1;
    }
    if (pick === 'guess3' && computer !== 'pearl-3') {
        return -1;
    }
}

function displayGuess() {
    if (guess === guess1) {
        shell1.classList.add('reveal');
    } else {
        if (guess === guess2) {
            shell2.classList.add('reveal');
        } else {
            shell3.classList.add('reveal');
        }
    }
}

function handleResults(pick) {
    result(pick, computer);

    if (result === 1) {
        wins++;
    }
    if (result === -1) {
        losses++;
    }
    total++;
}
// function choose(userGuess) {
//     gameState = 'results';
//     guess = userGuess;
//     reveal = pearl;
//     displayPearl();
// }

/* Components */

/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();

//     displayScoreboard();
//     gameState = 'results';
//     if (gameState === 'results') {
//         rogueButton.classList.add('hidden');
//         paladinButton.classList.add('hidden');
//         sorcererButton.classList.add('hidden');
//         againButton.classList.remove('hidden');
//
