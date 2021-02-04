const colorPicker = document.getElementById("colorPicker");
const themeNames = ["darkTheme", "sunshineTheme"];
const darkTheme = document.getElementById("darkTheme");
const sunshineTheme = document.getElementById("sunshineTheme");

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

darkTheme.addEventListener("click", (event) => {
  chooseTheme("darkTheme");
})

sunshineTheme.addEventListener("click", (event) => {
  chooseTheme("sunshineTheme");
})

function clearTheme() {
  document.body.classList.remove(...themeNames);
  document.body.style.backgroundColor = "";
}

function setBackgroundColor(color) {
  clearTheme();
  document.body.style.backgroundColor = color;
}

function chooseTheme(themeName) {
  clearTheme();
  document.body.classList.add(themeName);
}