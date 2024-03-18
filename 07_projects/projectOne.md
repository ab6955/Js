# Projects related to DOM

## Solution Code

## Project 1

```Javascript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
// console.log(buttons)

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);

    if(e.target.id==="grey"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="white"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="blue"){
      body.style.backgroundColor=e.target.id
    }
    if(e.target.id==="yellow"){
      body.style.backgroundColor=e.target.id
    }

    // usong Switch :
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

## Project 2

```Javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please Enter a valid height , ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please Enter a valid weight , ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //  Show the result
    result.innerHTML = `<span> ${BMI} </span>`;
    const result2 = document.querySelector('#result2');
    if (BMI < 18.6) {
      result2.innerHTML = 'You are Under Weight';
    } else if (BMI > 24.9) {
      result2.innerHTML = 'You are Over Weight';
    } else {
      result2.innerHTML = 'You are in Normal Range';
    }
  }
});


```

## Project 3:

```Javascript
const clock = document.getElementById('clock');

setInterval(function () {
  const date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();

}, 1000);
```

## Project 4:

```Javascript
let randomNumber = Math.round(Math.random() * 100 + 1);
// console.log(randomNumber)

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessesSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let prevGuess = [];
let numOfGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess)
    validation(guess);
  });
}

function validation(guess) {
  if (isNaN(guess)) {
    // userInput.innerHTML="Invalid Number"
    alert('Invalid Number');
  } else if (guess < 1) {
    alert('Larger number please');
  } else if (guess > 100) {
    alert('Smaller Number please');
  } else {
    prevGuess.push(guess);
    if (numOfGuess >= 10) {
      displayGuess(guess);
      displayMess(`Game over buddy : ${guess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMess('Congrats: You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMess(`Number is TOO Low`);
  } else if (guess > randomNumber) {
    displayMess(`Number is TOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessesSlot.innerHTML += `${guess} `;
  numOfGuess++;
  remainingSlot.innerHTML = `${11 - numOfGuess}`;
}

function displayMess(mess) {
  lowOrHi.innerHTML = `<h2>${mess}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start a New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.getElementById('newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = Math.round(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    guessesSlot.innerHTML = '';
    remainingSlot.innerHTML = '';
    userInput.removeAttribute('disabled');
    playGame = true;
  });
}

```

## Project 5:

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `

  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key===" " ?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>

  `;
});


```

## Project 6:

```Javascript

// generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color = color + hex[Math.round(Math.random() * 16)];
  }
  return color;
};
// console.log(Math.round(Math.random() * 16));
// console.log(randomColor())
let startChange;
const startChangingColor = function () {
  // if (startChange == null) { // is variable is null then add value to it (it is simply just more efficinet code not more than that.)
  if (!startChange) {
    startChange = setInterval(changeColor, 300);
  }
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(startChange);
  startChange = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```
