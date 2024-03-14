# Projects related to DOM

# Solution Code


# Project 1
```Javascript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
// console.log(buttons)

buttons.forEach(function (button) {
  // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);

    // if(e.target.id==="grey"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="white"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="blue"){
    //   body.style.backgroundColor=e.target.id
    // }
    // if(e.target.id==="yellow"){
    //   body.style.backgroundColor=e.target.id
    // }

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
# Project 2
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