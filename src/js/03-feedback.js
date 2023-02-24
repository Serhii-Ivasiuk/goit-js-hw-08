import _throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  message: document.querySelector('.feedback-form textarea'),
};

const LOCAL_STORAGE_KEY = 'feedback-form-state';
let formData = {};

refs.formEl.addEventListener('input', _throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onFormSubmit);

settleFormInputs();

function onFormInput(evt) {
  // зчитуємо дані з localStorage і записуємо їх у змінну formData (якщо в localStorage пусто - записуємо туди пустий об'єкт)
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  formData = savedData ? savedData : {};

  // записуємо (якщо в formData пустий об'єкт) чи перезаписуємо (якщо НЕ пустий) дані з інпутів спочатку у formData, потім у localStorage
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem(LOCAL_STORAGE_KEY);
  console.log(formData);
}

function settleFormInputs() {
  const savedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

  if (savedData) {
    for (let key in savedData) {
      refs[key].value = savedData[key];
    }
  }
}
