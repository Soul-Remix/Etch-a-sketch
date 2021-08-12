const grid = document.querySelector('#container');
const main = document.querySelector('.main');
const sizeBtn = document.querySelector('.size-btn');
const reset = document.querySelector('.clear');
const boxHover = document.querySelectorAll('#container div');
const rainbow = document.querySelector('#rainbow');
const gray = document.querySelector('#gray');
let div;
let userChoice;
let size = 16;

sizeBtn.addEventListener('click', gridSize);
reset.addEventListener('click', startGame);
grid.addEventListener('mouseover', chooseColor);
rainbow.addEventListener('click', chooseColor);
gray.addEventListener('click', chooseColor);

function gridSize() {
  userChoice = prompt('Enter your grid size up to 50');
  while (userChoice > 50) {
    alert('you can only go up to 50');
    userChoice = prompt('Enter your grid size up to 50');
  }
  clear();
  return createGrid();
}

function createGrid(choice) {
  if (userChoice != null) {
    choice = userChoice * userChoice;
    grid.setAttribute(
      'style',
      `grid-template-columns: repeat(${userChoice},1fr); grid-template-rows: repeat(${userChoice},1fr);`
    );
    for (let i = 0; i <= choice; i++) {
      div = document.createElement('div');
      div.classList.add('box');
      grid.appendChild(div);
    }
  } else {
    choice = size * size;
    grid.setAttribute(
      'style',
      `grid-template-columns: repeat(${size},1fr); grid-template-rows: repeat(${size},1fr);`
    );
    for (let i = 0; i <= choice; i++) {
      div = document.createElement('div');
      div.classList.add('box');
      grid.appendChild(div);
    }
  }
}

function clear() {
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
}

function startGame() {
  clear();
  userChoice = null;
  createGrid();
}

function randomNum() {
  return Math.floor(Math.random() * 257);
}

function chooseColor(e) {
  function changeColorRainbow(e) {
    if (e.target.classList.contains('box')) {
      e.target.setAttribute(
        'style',
        `background-color: rgb(${randomNum()},${randomNum()},${randomNum()})`
      );
    }
  }
  function changeColorGray(e) {
    if (e.target.classList.contains('box')) {
      e.target.setAttribute('style', `background-color: rgb(128,128,128)`);
    }
  }
  if (e.target.classList.value === 'rainbow') {
    grid.addEventListener('mouseover', changeColorRainbow);
    grid.addEventListener('touchstart', changeColorRainbow);
    grid.removeEventListener('mouseover', changeColorGray);
    grid.removeEventListener('touchstart', changeColorGray);
  } else if (e.target.classList.value === 'gray') {
    grid.removeEventListener('mouseover', changeColorRainbow);
    grid.removeEventListener('touchstart', changeColorRainbow);
    grid.addEventListener('mouseover', changeColorGray);
    grid.addEventListener('touchstart', changeColorGray);
  }
}

startGame();
