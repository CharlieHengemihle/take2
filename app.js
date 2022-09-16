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

// let guess = [guess1, guess2, guess3];

function loadPage() {
    displayShells();
    getRandomItem.pearl;
    pearl.classList.remove('hidden');
    // gameState = 'guess';
}

guess1.addEventListener('click', () => {
    guess = guess1;
    // gameState = 'results';
    shell1.classList.add('reveal');
    displayGuess();
    displayScoreboard();
});

guess2.addEventListener('click', () => {
    guess = guess2;
    // gameState = 'results';
    shell2.classList.add('reveal');
    displayGuess();
    displayScoreboard();
});

guess3.addEventListener('click', () => {
    guess = guess3;
    // gameState = 'results';
    shell3.classList.add('reveal');
    displayGuess();
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

// function score(pick, pearl) {
//     if (pick === 'guess1' && pearl === 'pearl-1') {
//         return 1;
//         // paladin.classList.add('hidden');
//     }
//     if (pick === 'guess1' && pearl !== 'pearl-1') {
//         return 1;
//         // rogue.classList.add('hidden');
//     }
//     if (pick === 'guess2' && pearl === 'pearl-2') {
//         return 1;
//         // sorcerer.classList.add('hidden');
//     }
//     if (pick === 'guess2' && pearl !== 'pearl-2') {
//         return -1;
//         // sorcerer.classList.add('hidden');
//     }
//     if (pick === 'guess3' && pearl === 'pearl-3') {
//         return -1;
//         // paladin.classList.add('hidden');
//     }
//     if (pick === 'guess3' && pearl !== 'pearl-3') {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// function handleFight(pick) {
//     computer = getRandomItem(fighters);
//     const result = score(pick, computer);

//     if (result === 1) {
//         wins++;
//     }
//     if (result === 0) {
//         draws++;
//     }
//     if (result === -1) {
//         losses++;
//     }
//     total++;
//     displayScoreboard();
//     gameState = 'results';
//     if (gameState === 'results') {
//         rogueButton.classList.add('hidden');
//         paladinButton.classList.add('hidden');
//         sorcererButton.classList.add('hidden');
//         againButton.classList.remove('hidden');
//
