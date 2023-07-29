const inputSquares = document.querySelector("input");
const createSquares = document.querySelector("[data-create]");
const destroySquares = document.querySelector("[data-destroy]");
const aLotOfBoxes = document.querySelector("#boxes");

createSquares.addEventListener("click", createSomeSquares);

function createSomeSquares() {
  let number = Number(inputSquares.value);

  const squaresArr = [];

  if (number >= inputSquares.attributes.min.value && number <= inputSquares.attributes.max.value) {
    for (let i = 1; i <= number; i++) {
      const item = document.createElement("div");
      item.style.width = `${30 + (i - 1) * 10}px`;
      item.style.height = `${30 + (i - 1) * 10}px`;
      item.style.backgroundColor = getRandomHexColor();
      squaresArr.push(item);
    }

    aLotOfBoxes.append(...squaresArr);
  } else {
    alert("Введи число від 1 до 100");
  }
}

function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return color;
}

destroySquares.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  inputSquares.value = "";
  aLotOfBoxes.innerHTML = "";
}
