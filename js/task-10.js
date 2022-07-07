// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let size = 20;

const inputEl = document.querySelector("input");
// console.log(inputEl);
const createButton = document.querySelector("[data-create]");
console.log(createButton);
const destroyButton = document.querySelector("[data-destroy]");
console.log(destroyButton);
const allBoxes = document.querySelector("#boxes");

createButton.addEventListener("click", onClickCreate);
function onClickCreate() {
  const value = inputEl.value;
  allBoxes.innerHTML = "";
  size = 20;
  createBoxes(value);
}

function createBoxes(amount) {
  const box = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    size += 10;
    div.style.background = getRandomHexColor();
    div.style.width = `${size}px`;
    div.style.height = size + "px";
    box.append(div);
  }
  console.log(box);
  allBoxes.append(box);
}
destroyButton.addEventListener("click", onDestroyButton);

function onDestroyButton() {
  allBoxes.innerHTML = "";
  inputEl.value = "";
}
