const rangeInput = document.getElementById("rangeInput");
const rangeLabel = document.getElementById("rangeLabel");

// Update label text when range input value changes
rangeInput.addEventListener("input", function () {
  let value = this.value;
  // Insert a space after every third digit
  value = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  rangeLabel.textContent = value;
});
