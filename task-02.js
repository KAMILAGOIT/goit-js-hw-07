const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
].map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li
});

const ul = document.getElementById('ingredients');
console.log(ingredients);
ul.prepend(...ingredients);
