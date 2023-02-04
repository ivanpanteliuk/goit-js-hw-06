function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpanEl = document.querySelector('.color')

changeColorBtn.addEventListener('click', onChangeColor)

function onChangeColor() {
  colorSpanEl.textContent = document.body.style.backgroundColor = getRandomHexColor();
}