const grid = document.querySelector('#container');
const main = document.querySelector('.main');
const sizeBtn = document.querySelector('.size-btn');
const reset = document.querySelector('.clear');
const boxHover = document.querySelectorAll('#container div');
const rainbow = document.querySelector('#rainbow');
const gray = document.querySelector('#gray');
let div;
let userChoice = 16;

sizeBtn.addEventListener('click', gridSize);
reset.addEventListener('click', resetGame);
rainbow.addEventListener('click', changeColorRainbow);
gray.addEventListener('click', changeColorGray);

function gridSize() {
  userChoice = prompt('Enter your grid size up to 50');
  while (userChoice > 50) {
    alert('you can only go up to 50');
    userChoice = prompt('Enter your grid size up to 50');
  }
  clear();
  return createGrid();
}

function createGrid() {
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
}

function clear() {
  while (grid.lastElementChild) {
    grid.removeChild(grid.lastElementChild);
  }
}

function startGame() {
  clear();
  createGrid();
}

function resetGame() {
  clear();
  userChoice = 16;
  createGrid();
}

function randomNum() {
  return Math.floor(Math.random() * 257);
}

function changeColorRainbow(e) {
  if (e.target.classList.contains('box')) {
    e.target.setAttribute(
      'style',
      `background-color: rgb(${randomNum()},${randomNum()},${randomNum()})`
    );
  }
  grid.addEventListener('mouseover', changeColorRainbow);
  grid.addEventListener('click', changeColorRainbow);
  grid.removeEventListener('mouseover', changeColorGray);
  grid.removeEventListener('click', changeColorGray);
}

function changeColorGray(e) {
  if (e.target.classList.contains('box')) {
    e.target.setAttribute('style', `background-color: rgb(128,128,128)`);
  }
  grid.addEventListener('mouseover', changeColorGray);
  grid.addEventListener('click', changeColorGray);
  grid.removeEventListener('mouseover', changeColorRainbow);
  grid.removeEventListener('click', changeColorRainbow);
}

startGame();
