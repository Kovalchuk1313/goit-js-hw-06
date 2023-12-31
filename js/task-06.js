const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", symbolControl);

function symbolControl() {
  if (textInput.value.trim().length === Number(textInput.dataset.length)) {
    textInput.classList.remove("invalid");
    return textInput.classList.add("valid");
  }

  textInput.classList.remove("valid");
  return textInput.classList.add("invalid");
}
