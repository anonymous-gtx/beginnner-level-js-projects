const form = document.querySelector('form');
let counter = 0;
const totalAttempts = 10;
let guesses = [];

const prevGuess = document.querySelector('.guesses');
const remGuess = document.querySelector('.lastResult');
const rightGuess = document.querySelector('#rightGuess');
const lowOrHi = document.querySelector('.lowOrHi');
const guessField = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');

let randomNumber = Math.floor(Math.random() * 100) + 1; number

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const number = parseInt(guessField.value); 
    if (isNaN(number) || number < 1 || number > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    counter++;
    guesses.push(number);
    prevGuess.innerHTML = `<span>${guesses.join(', ')}</span>`;
    remGuess.innerHTML = `<span>${totalAttempts - counter}</span>`;

    if (number === randomNumber) {
        lowOrHi.innerHTML = `<span>Congratulations! You guessed the right number.</span>`;
        rightGuess.innerHTML = `<span>You guessed it right, the number is ${number}</span>`;
        endGame();
        return;
    }

    if (counter >= totalAttempts) {
        rightGuess.innerHTML = `<span>Game Over! The correct number was ${randomNumber}</span>`;
        endGame();
        return;
    }
    if (number < randomNumber) {
        lowOrHi.innerHTML = `<span>Too low, try again...</span>`;
    } else {
        lowOrHi.innerHTML = `<span>Too high, try again...</span>`;
    }

    guessField.value = "";
});

//Below function was edited using chatgpt
function endGame() { 
    guessField.disabled = true; 
    submitButton.disabled = true; 
    const resetButton = document.createElement('button');
    resetButton.textContent = "Play Again";
    resetButton.classList.add("reset-btn");
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//Below function was edited using chatgpt
function resetGame() {
    counter = 0;
    guesses = [];
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess.innerHTML = "";
    remGuess.innerHTML = `<span>${totalAttempts}</span>`;
    rightGuess.innerHTML = "";
    lowOrHi.innerHTML = "";
    
    guessField.disabled = false;
    submitButton.disabled = false;
    guessField.value = ""; 
    document.querySelector('.reset-btn').remove();
}
