function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorButton = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.querySelector('body');

colorButton.addEventListener('click', changeButton);

function changeButton() {
  const bodyColor = (body.style.backgroundColor = getRandomHexColor());
  span.textContent = bodyColor;
}