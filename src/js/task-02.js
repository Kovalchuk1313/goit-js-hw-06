const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ingredientsList = document.querySelector("ul#ingredients");

const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  return listItem;
});

ingredientsList.append(...listItems);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const name = ingredients[i];
//   const itemElm = document.createElement("li");
//   itemElm.classList.add("item");
//   itemElm.textContent = `${name}`;

//   const listElm = document.getElementById("ingredients");
//   listElm.append(itemElm);
// }
