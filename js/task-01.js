const itemEl = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${itemEl.length}.`);

itemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

// const categoriesList = (categories) => {
//   const itemEl = document.querySelectorAll(categories);
//   console.log(`Number of categories: ${itemEl.length0}.`);
//   itemEl.forEach((item) => {
//     console.log(`Category: ${item.firstElementChild.textContent}`),
//       console.log(`Number of elements: ${item.lastElementChild.children.length}`);
//   });
// };
// categoriesList(".item");
