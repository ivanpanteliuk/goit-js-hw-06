let counterValue = 0;

const decrementBtnEl = document.querySelector('[data-action="decrement"]')
const incrementBtnEl = document.querySelector('[data-action="increment"]')
const valueEl = document.querySelector('#value')

const decrementActionHandler = () => (counterValue -= 1, valueEl.textContent = counterValue);
const incrementActionHandler = () => (counterValue += 1, valueEl.textContent = counterValue);

decrementBtnEl.addEventListener('click', decrementActionHandler);
incrementBtnEl.addEventListener('click', incrementActionHandler);