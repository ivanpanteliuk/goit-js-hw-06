const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsListEl = document.querySelector('#ingredients');

const ingredientsItemsMarkup = ingredients.map(item => { 
  const ingredientsItemEl = document.createElement('li');
  ingredientsItemEl.textContent = item;
  ingredientsItemEl.classList.add('item');
  return ingredientsItemEl
})


ingredientsListEl.append(...ingredientsItemsMarkup);