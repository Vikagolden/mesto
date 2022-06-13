const button = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
// Находим поля формы в DOM
let nameInput = formElement.querySelector(".popup__text_name");
let jobInput = formElement.querySelector(".popup__text_job");
let newName = document.querySelector(".profile__title");
let newJob = document.querySelector(".profile__subtitle");

function closePopupOnQ(e) {
  if (e.code === "KeyQ") {
    closePopup();
  }
}

function openPopup() {
  popup.classList.remove("popup_hidden");
  nameInput.value = newName.textContent;
  jobInput.value = newJob.textContent;
  document.addEventListener("keypress", closePopupOnQ);
}

function closePopup() {
  popup.classList.add("popup_hidden");
  document.removeEventListener("keypress", closePopupOnQ);
}

button.addEventListener("click", function () {
  openPopup();
});

popupCloseButton.addEventListener("click", function () {
  closePopup();
});

// Обработчик «отправки» формы
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  newName.textContent = nameInput.value;
  newJob.textContent = jobInput.value;
  popup.classList.add("popup_hidden");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
