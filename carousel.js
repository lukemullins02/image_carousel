let i = 0;
let id = 1;

const images = document.querySelectorAll(".image");

images.forEach((image) => {
  image.dataset.id = i;
  i++;
});

const napoleon = document.querySelector(`img[data-id="0"]`);

function switchPic() {
  let prev;
  if (id === 0) {
    prev = images.length - 1;
  } else {
    prev = id - 1;
  }

  const show_image = document.querySelector(`img[data-id="${id}"]`);
  const hide_image = document.querySelector(`img[data-id="${prev}"]`);

  hide_image.classList.toggle("invisible");
  show_image.classList.toggle("invisible");

  if (id === images.length - 1) {
    id = 0;
  } else {
    id++;
  }
}

napoleon.classList.toggle("invisible");

setInterval(() => switchPic(), 5000);
