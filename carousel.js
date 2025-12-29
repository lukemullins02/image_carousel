let i = 0;
let id = 0;

const images = document.querySelectorAll(".image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".previous");
const container = document.querySelector(".container");

images.forEach((image) => {
  image.dataset.id = i;
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

  const show_image = document.querySelector(`img[data-id="${id}"]`);
  const hide_image = document.querySelector(`img[data-id="${prev}"]`);

  console.log(show_image);
  console.log(hide_image);

  hide_image.classList.toggle("invisible");
  show_image.classList.toggle("invisible");
}

function previous() {
  let prev = id;
  if (id === 0) {
    id = images.length - 1;
  } else {
    id--;
  }

  const show_image = document.querySelector(`img[data-id="${id}"]`);
  const hide_image = document.querySelector(`img[data-id="${prev}"]`);

  console.log(show_image);
  console.log(hide_image);

  hide_image.classList.toggle("invisible");
  show_image.classList.toggle("invisible");
}

nextBtn.addEventListener("click", () => {
  next();
});

prevBtn.addEventListener("click", () => {
  previous();
});

// setInterval(() => switchPic(), 5000);
