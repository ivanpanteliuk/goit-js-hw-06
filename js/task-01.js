const categoriesListEl = document.querySelector('#categories')

// ----------------------------- Варіант 1 ------------------------------

// const categoriesListItemsEl = [...categoriesListEl.children]

// console.log(`Number of categories: ${categoriesListItemsEl.length}`);

// categoriesListItemsEl.forEach(category => {
//     console.log(`Category: ${category.firstElementChild.textContent}`);
//     console.log(`Elements: ${category.lastElementChild.children.length}`);
// })

// ----------------------------------------------------------------------

// ------------------------- Варіант 2 ----------------------------------

const categoriesListItemsEl = categoriesListEl.querySelectorAll('.item')

console.log(`Number of categories: ${categoriesListItemsEl.length}`);

categoriesListItemsEl.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`);
    console.log(`Elements: ${category.querySelectorAll('ul li').length}`);
})



// ----------------------------------------------------------------------