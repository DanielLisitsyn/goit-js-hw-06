const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulElem = document.querySelector('#ingredients')

const items = ingredients.map((elements) => {
  const liItem = document.createElement('li');
  liItem.textContent = elements;
  liItem.classList.add('item');

  return liItem
})
ulElem.append(...items)
 
