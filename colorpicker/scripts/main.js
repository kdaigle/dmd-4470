const colorPicker = document.getElementById("colorPicker");
const themeNames = ["darkTheme", "sunshineTheme"];
const darkTheme = document.getElementById("darkTheme");
const sunshineTheme = document.getElementById("sunshineTheme");

window.onload = function() {
  let backgroundColor = window.localStorage.getItem("backgroundColor");
  let theme = window.localStorage.getItem("theme");
  if(backgroundColor) {
    setBackgroundColor(backgroundColor);
  } else if(theme) {
    chooseTheme(theme);
  }

  colorPicker.value = backgroundColor;
}

colorPicker.addEventListener("change", (event) => {
  console.log(event.target.value);
  setBackgroundColor(event.target.value);
})

darkTheme.addEventListener("click", (event) => {
  chooseTheme("darkTheme");
})

sunshineTheme.addEventListener("click", (event) => {
  chooseTheme("sunshineTheme");
})

function clearThemeAndBackgroundColor() {
  window.localStorage.clear();
  document.body.classList.remove(...themeNames);
  document.body.style.backgroundColor = "";
}

function setBackgroundColor(color) {
  clearThemeAndBackgroundColor();
  window.localStorage.setItem("backgroundColor", color);
  document.body.style.backgroundColor = color;
}

function chooseTheme(themeName) {
  clearThemeAndBackgroundColor();
  window.localStorage.setItem("theme", themeName);
  document.body.classList.add(themeName);
}