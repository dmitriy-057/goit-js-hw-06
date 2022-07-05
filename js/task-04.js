// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

// 1- получить доступ к елементам value, decrement, increment
// 2 - добавить слушателя на decrement, increment
// 3 - при клике на decrement значение value -= 1
// 4 -  при клике на increment значение value += 1

const counterValue = {
  value: 0,

  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const valueEl = document.querySelector("#value");
console.log(valueEl);
const decrementEl = document.querySelector('[data-action="decrement"]');
console.log(decrementEl);
const incrementEl = document.querySelector('[data-action="increment"]');
console.log(incrementEl);

decrementEl.addEventListener("click", () => {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
  // valueEl.textContent -= 1;
});

incrementEl.addEventListener("click", () => {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
  // valueEl.textContent += 1;
});
