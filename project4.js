/*
parseInt:
-> we don't want decimal number
-> and + 1 cuz we do not want 0
*/

let randomNumber = parseInt(Math.random() * 10 + 1 );

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');


//later we will add button with para in endGame
const p = document.createElement('p');     

let prevGuess = [];
let numGuess = 1;
let playGame = true;



//check whether user is available or not
if (playGame) {
    submit.addEventListener('click', function(event){
event.preventDefault()
const guess = parseInt(userInput.value)
validateGuess(guess)               //pass to the next step
    });
    }





//to check value is valid not [ abc, -8 etc]
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('plz enter a valid number');  
    }
    else if (guess < 1) {
        alert('plz enter a number greater than 1');    
    }
    else if (guess > 100) {
        alert('plz enter a number less than 10');    
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over... Random number was ${randomNumber}`)  
            endGame();
        }

        //in case attempt is not = 11
    else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}





//to print value after validation
function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    }
    else if (guess < randomNumber){
        displayMessage(`Number is TOO low`)
    }
    else if (guess > randomNumber){
        displayMessage(`Number is TOO hight`)
    }
}





//resultParas(gueses) inside it we are adding value in span
function displayGuess(guess) {
    userInput.value = ''           //update value
    guessSlot.innerHTML += `${guess}, `;       //to print with , and space
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

//inside lowOrHi there is para we want to display that msg
function displayMessage(message) {
    lowOrHi.innerHTML =`<h2>${message}</h2>`;
}




function endGame() {
    userInput.value = ''               // value is cleaned
    userInput.setAttribute('disabled' , '')

    //new button with id name newGame , add text , and add
    p.classList.add('button')                      
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);

    playGame = false;     //game end..........
    newGame();
}
    



 function newGame() {
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener('click' , function(event){

            randomNumber = parseInt(Math.random() * 10 + 1);
            prevGuess = []          //previous guess is empty
            numGuess  = 1;
            guessSlot.innerHTML = ''
            remaining.innerHTML = `${11 - numGuess} `;
            userInput.removeAttribute('disabled');
            startOver.removeChild(p);
            playGame = true;
        });
}