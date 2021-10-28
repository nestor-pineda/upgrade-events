// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el  evento click que ejecute un console log con la información del evento del click
let myButton = document.getElementById("btnToClick");

myButton.addEventListener("click", (info) => {
  console.log(info);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
let inputFocus = document.querySelector("input.focus");

inputFocus.addEventListener("focus", () => {
  console.log(inputFocus.value);
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
let input = document.querySelector("input");

input.addEventListener("input", updateValue);

function updateValue() {
  console.log(input.value);
}
