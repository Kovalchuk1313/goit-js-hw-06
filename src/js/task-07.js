const sizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

sizeControl.addEventListener("input", () => {
  const fontSize = sizeControl.value + "px";
  text.style.fontSize = fontSize;
});
