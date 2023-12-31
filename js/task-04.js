const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const counterValueEl = document.querySelector("#value");

let counterValue = 0;

const incrementValue = () => {
  counterValue += 1;
  counterValueEl.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  counterValueEl.textContent = counterValue;
};

buttonIncrement.addEventListener("click", incrementValue);
buttonDecrement.addEventListener("click", decrementValue);
