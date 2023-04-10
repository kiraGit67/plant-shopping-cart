"use strict";

//Constant for default single price
let singlePrice = parseFloat(
  document
    .querySelector(".product__price")
    .innerText.replace("€ ", "")
    .replace(",-", "")
);
console.log(singlePrice);

//Variable for single price input field
const singlePriceInput = document.querySelector("#single-price");

//set single price input value to single price default
singlePriceInput.value = singlePrice;

//Variable for default quantity
let defaultQuantity = 0;

//Variable for quantity input field
const quantityInput = document.querySelector("#quantity");
quantityInput.value = defaultQuantity;

let totalPrice = 0;

//Variable for displaying the total price
const displayTotalPrice = document.querySelector("#display-total-price");
const productPriceSpan = document.querySelector(".product__price span");

singlePriceInput.addEventListener("input", (event) => {
  singlePriceInput.value = event.target.value;
  console.log(singlePriceInput.value);
  productPriceSpan.innerText = singlePriceInput.value;

  totalPrice = calcTotalPrice(
    parseFloat(singlePriceInput.value),
    parseInt(quantityInput.value)
  );
  console.log(totalPrice);
  displayTotalPrice.innerText = totalPrice + " €";
});

quantityInput.addEventListener("input", (event) => {
  quantityInput.value = event.target.value;
  console.log(quantityInput.value);

  totalPrice = calcTotalPrice(
    parseFloat(singlePriceInput.value),
    parseInt(quantityInput.value)
  );
  console.log(totalPrice);
  displayTotalPrice.innerText = totalPrice + " €";
});

//function to calculate the total price
function calcTotalPrice(singlePrice, quantity) {
  return (singlePrice * quantity).toFixed(2);
}
