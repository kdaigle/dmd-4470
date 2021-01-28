const colorPicker = document.getElementById("colorPicker");

window.onload = function() {
  let backgroundColor = window.localStorage.getItem("backgroundColor");
  if(backgroundColor) {
    setBackgroundColor(backgroundColor);
  }

  colorPicker.value = backgroundColor;
}

colorPicker.addEventListener("change", (event) => {
  console.log(event.target.value);
  window.localStorage.setItem("backgroundColor", event.target.value);
  setBackgroundColor(event.target.value);
})

function setBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}