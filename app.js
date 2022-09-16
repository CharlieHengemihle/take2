/* Imports */
import { getRandomItem } from './utils.js';

/* State */
// let shell = ['shell-1', 'shell-2', 'shell-3'];
let pearl = ['pearl-1', 'pearl-2', 'pearl-3'];
// let guess = ['guess-1', 'guess-2', 'guess-3'];
const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');
const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const gameState = ['guess', 'results'];

// let guess = [guess1, guess2, guess3];

function loadPage() {
    displayShells();
    getRandomItem.pearl;
    pearl.classList.remove('hidden');
    gameState = 'guess';
}

guess1.addEventListener('click', () => {
    guess = guess1;
    gameState = 'results';
    shell1.classList.add('reveal');
});

guess2.addEventListener('click', () => {
    guess = guess2;
    gameState = 'results';
    shell2.classList.add('reveal');
});

guess3.addEventListener('click', () => {
    guess = guess3;
    gameState = 'results';
    shell3.classList.add('reveal');
});

function displayShells() {
    if (gameState = 'guess') {
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
        display3.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    }
}

playAgainButton.addEventListener('click', () => {
    playAgain();

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
