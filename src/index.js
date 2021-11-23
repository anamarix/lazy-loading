import { registerImage } from "./lazy";

const container = document.querySelector("div#images");
const numbers = [];
for (let i = 1; i < 124; i++) {
  numbers.push(i);
}

const images = [];

numbers.forEach((number) => {
  let baseURL = `https://randomfox.ca/images/${number}.jpg`;
  const imageContainer = document.createElement("div");
  imageContainer.className = "p-4";
  imageContainer.style.backgroundColor = "#5F9EA0";
  imageContainer.style.minHeight = "100px";
  imageContainer.style.display = "inline-block";
  imageContainer.style.marginRight = "1rem";
  imageContainer.style.marginTop = "1rem";

  const image = document.createElement("img");
  image.dataset.src = baseURL;
  image.className = "mx-auto";
  image.width = "320";
  imageContainer.appendChild(image);

  images.push(imageContainer);
});

const random = () => Math.floor(Math.random() * 122);

const addImage = () => {
  const newImage = images[random()];
  container.appendChild(newImage);
  registerImage(newImage);
};

const removeImages = () => {
  container.textContent = "";
};

const addButton = document.querySelector("#btn-a");
addButton.addEventListener("click", addImage);

const removeButtton = document.querySelector("#btn-r");
removeButtton.addEventListener("click", removeImages);
