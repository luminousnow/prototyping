import myTechSkills from "../js/tech-skills.js";
console.log(myTechSkills);
// 1. виводимо елементи
// 2. слухаємо інпут і по ньому фільтруємо
// 3 виводимо новий список елементів

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

// створює розмітку
const techListMarkup = createTechListMarkup(myTechSkills);

// рендерить розмітку
refs.list.innerHTML = techListMarkup;

// слухає input
refs.input.addEventListener("input", _.debounce(onInputChange, 600));

myTechSkills.filter((element) => element.cont);

function createTechListMarkup(arr) {
  return arr.map((el) => `<li>${el.label}</li>`).join("");
}

function onInputChange(evt) {
  // console.log(evt.target.value);
  const filter = evt.target.value.toLowerCase();
  const filteredElements = myTechSkills.filter((el) =>
    el.label.toLowerCase().includes(filter)
  );

  refs.list.innerHTML = createTechListMarkup(filteredElements);
}
