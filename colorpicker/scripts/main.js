const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", (event) => {
  console.log(event.target.value);
  document.body.style.backgroundColor = event.target.value;
})