function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('#controls input')
}
const boxesMarkup = []

function createBoxes(amount) {
  amount = Number(refs.input.value)
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.width = 30 + 10 * (i - 1) + 'px';
    boxEl.style.height = 30 + 10 * (i - 1) + 'px';
    boxEl.style.backgroundColor = getRandomHexColor()
    boxesMarkup.push(boxEl)
  }
  refs.boxes.append(...boxesMarkup)
}

function destroyBoxes () {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}

refs.createBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);