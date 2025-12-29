let i = 0;
let id = 0;
let uni = id;

const images = document.querySelectorAll(".image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
const container = document.querySelector(".container");
const select_format = document.querySelector(".select-format");

images.forEach((image) => {
  image.dataset.id = i;
  const selectBtn = document.createElement("button");
  selectBtn.classList.add("select");
  selectBtn.dataset.id = image.dataset.id;
  selectBtn.textContent = i + 1;
  select_format.appendChild(selectBtn);
  i++;
});

const napoleon = document.querySelector(`img[data-id="0"]`);
napoleon.classList.toggle("invisible");

function next() {
  let prev = id;
  if (id === images.length - 1) {
    id = 0;
  } else {
    id++;
  }

  uni = id;

  const show_image = document.querySelector(`img[data-id="${id}"]`);
  const hide_image = document.querySelector(`img[data-id="${prev}"]`);

  hide_image.classList.toggle("invisible");
  show_image.classList.toggle("invisible");
}

function previous() {
  console.log(id);
  let prev = id;
  if (id === 0) {
    id = images.length - 1;
  } else {
    id--;
  }

  console.log(id);

  uni = id;

  const show_image = document.querySelector(`img[data-id="${id}"]`);
  const hide_image = document.querySelector(`img[data-id="${prev}"]`);

  hide_image.classList.toggle("invisible");
  show_image.classList.toggle("invisible");
}

nextBtn.addEventListener("click", () => {
  next();
});

prevBtn.addEventListener("click", () => {
  previous();
});

container.addEventListener("click", (e) => {
  if (!e.target.classList.contains("select")) return;

  const show_image = document.querySelector(
    `img[data-id="${e.target.dataset.id}"]`
  );
  const hide_image = document.querySelector(`img[data-id="${uni}"]`);

  hide_image.classList.toggle("invisible");
  show_image.classList.toggle("invisible");

  uni = Number(e.target.dataset.id);
  id = Number(e.target.dataset.id);
});

// setInterval(() => switchPic(), 5000);
