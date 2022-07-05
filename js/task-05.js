// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous"

// 1 - получить доступ к инпуту и спану;
// 2- добавить слушателя на инпут;
// 3- создать функцию условиями, которой будут
//    а - если строка пустая, выведет строку Аноним
//    б - в другом случае покажет строку которую ввел пользователь

const refs = {
  input: document.querySelector("input"),
  nameLabel: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value === "") {
    refs.nameLabel.textContent = "Anonymous";
  } else {
    refs.nameLabel.textContent = event.currentTarget.value;
  }
}
