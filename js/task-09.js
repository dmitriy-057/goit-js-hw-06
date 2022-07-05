// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

// функция для генерации случайного цвета используй функция getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// получаем доступ к елементам body, button, span
const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
// вешает событие слушателя на кнопку
buttonEl.addEventListener("click", changeHexColor);

// создаем функцию которая меняет цвет body
// на body получаем доступ к background-color и вешаем функцию генерации цвета
// текст спана равен background-color
function changeHexColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
}
