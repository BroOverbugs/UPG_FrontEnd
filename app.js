const rangeInput = document.getElementById("rangeInput");
const rangeLabel = document.getElementById("rangeLabel");
const addButton = document.querySelector(".btn1");
const subtractButton = document.querySelector(".btn2");
let countElement = document.querySelector(".count-of-product");

// rangeInput.addEventListener("input", function () {
//   let value = this.value;
//   value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
//   rangeLabel.textContent = value;
// });

addButton.addEventListener("click", function () {
  var currentCount = parseInt(countElement.innerText);
  let newCount = currentCount + 1;
  countElement.innerText = newCount;
});

subtractButton.addEventListener("click", function () {
  var currentCount = parseInt(countElement.innerText);
  if (currentCount != 1) {
    let newCount = currentCount - 1;

    countElement.innerText = newCount;
  }
});
