// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// 1 - получаем доступ к id;
// 2 - перебираем массив строк меодом map;
// 3 - создаем елемент li
// 4 - присваиваем класс <li>
// 5 - добавляем  в li перебранный массив
// 6 - добавляем li в ul

const ingredientsEl = document.querySelector("#ingredients");
console.log(ingredientsEl);

const eachOfIngredients = ingredients.map((element) => {
  const itemIngredients = document.createElement("li");
  itemIngredients.classList.add("item");
  itemIngredients.textContent = element;

  return itemIngredients;
});
ingredientsEl.append(...eachOfIngredients);
