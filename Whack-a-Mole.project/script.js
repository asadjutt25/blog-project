// const holes = document.querySelectorAll('.hole');
// const moles = document.querySelectorAll('.mole');
// const scoreBoard = document.getElementById('score');
// const highScoreBoard = document.getElementById('highScore');
// const timeLeftBoard = document.getElementById('timeLeft');
// const modeBoard = document.getElementById('mode');
// const modeSelect = document.getElementById('modeSelect');
// const startButton = document.getElementById('startButton');
// const whackSound = document.getElementById('whackSound');

// let lastHole;
// let timeUp = false;
// let score = 0;
// let highScore = 0;
// let timeLeft = 30;
// let mode = 'easy';
// let peepTime = 1000;
// let gameTimer;
// let moleTimer;

// // Set peep time based on selected mode
// function setPeepTime(mode) {
//   switch (mode) {
//     case 'easy':
//       return 1000;
//     case 'medium':
//       return 800;
//     case 'hard':
//       return 600;
//     default:
//       return 1000;
//   }
// }

// // Generate a random time between min and max
// function randomTime(min, max) {
//   return Math.round(Math.random() * (max - min) + min);
// }
// // Select a random hole for the mole to appear
// function randomHole(holes) {
//   const idx = Math.floor(Math.random() * holes.length);
//   const hole = holes[idx];
//   if (hole === lastHole) {
//     return randomHole(holes);
//   }
//   lastHole = hole;
//   return hole;
// }

// // Select a random mole type
// function randomMoleType() {
//   const types = ['basic', 'speedy', 'bomb', 'bonus'];
//   const idx = Math.floor(Math.random() * types.length);
//   return types[idx];
// }

// // Make the mole pop up
// function peep() {
//   const time = randomTime(peepTime - 300, peepTime);
//   const hole = randomHole(holes);
//   const mole = hole.querySelector('.mole');
//   const moleType = randomMoleType();
//   mole.className = 'mole ' + moleType;
//   hole.classList.add('up');
//   moleTimer = setTimeout(() => {
//     hole.classList.remove('up');
//     if (!timeUp) peep();
//   }, time);
// }

// // Start the game
// function startGame() {
//   clearInterval(gameTimer);
//   clearTimeout(moleTimer);
//   scoreBoard.textContent = 0;
//   timeLeftBoard.textContent = 30;
//   modeBoard.textContent = mode.charAt(0).toUpperCase() + mode.slice(1);
//   score = 0;
//   timeLeft = 30;
//   peepTime = setPeepTime(mode);
//   timeUp = false;
//   peep();
//   gameTimer = setInterval(() => {
//     timeLeft--;
//     timeLeftBoard.textContent = timeLeft;
//     if (timeLeft <= 0) {
//         clearInterval(gameTimer);
//       timeUp = true;
//       updateHighScore();
//       alert('Game Over! Your score is ' + score);
//     }
//   }, 1000);
// }

// // Handle mole click
// function bonk(e) {
//   if (!e.isTrusted) return; // Prevent fake clicks
//   const mole = this;
//   const moleType = mole.classList[1];
//   switch (moleType) {
//     case 'basic':
//       score += 10;
//       break;
//     case 'speedy':
//       score += 20;
//       break;
//     case 'bomb':
//       score -= 15;
//       break;
//     case 'bonus':
//       score += 30;
//       timeLeft += 5;
//       timeLeftBoard.textContent = timeLeft;
//       break;
//     default:
//       score += 10;
//   }
//   mole.parentElement.classList.remove('up');
//   scoreBoard.textContent = score;
//   whackSound.currentTime = 0;
//   whackSound.play();
// }

// // Update high score
// function updateHighScore() {
//   if (score > highScore) {
//     highScore = score;
//     highScoreBoard.textContent = highScore;
//   }
// }

// // Event listeners
// moles.forEach((mole) => mole.addEventListener('click', bonk));
// startButton.addEventListener('click', startGame);
// modeSelect.addEventListener('change', (e) => {
//   mode = e.target.value;
// });





const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const highScoreDisplay = document.getElementById('highScore');
const startBtn = document.getElementById('startBtn');
const popSound = document.getElementById('popSound');
const hitSound = document.getElementById('hitSound');

const easyBtn = document.getElementById('easyBtn');
const hardBtn = document.getElementById('hardBtn');

const emojis = ['🐭', '🐁', '🐹', '🐀'];

let lastHole;
let score = 0;
let timeLeft = 15;
let timerId = null;
let moleTimerId = null;
let timeUp = false;
let mode = 'easy';

let highScore = localStorage.getItem('whackHighScore') || 0;
highScoreDisplay.textContent = highScore;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) return randomHole(holes);
  lastHole = hole;
  return hole;
}

function showMole() {
 let min = mode === 'easy' ? 700 : 350;
  let max = mode === 'easy' ? 1500 : 900;
  const time = randomTime(min, max);
  const hole = randomHole(holes);
  const moleSpan = hole.querySelector('.mole');
  moleSpan.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  hole.classList.add('up');
  popSound.currentTime = 0;
  popSound.play();

  moleTimerId = setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) showMole();
  }, time);
}

function countDown() {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerId);
    clearTimeout(moleTimerId);
    timeUp = true;
    startBtn.disabled = false;
    startBtn.textContent = 'Restart Game';
    if (score > highScore) {
      highScore = score;
      localStorage.setItem('whackHighScore', highScore);
      highScoreDisplay.textContent = highScore;
    }
    alert(`Time's up! Your score is ${score}`);
  }
}

function startGame() {
  score = 0;
  timeLeft = 15;
  timeUp = false;
  scoreDisplay.textContent = score;
  timeDisplay.textContent = timeLeft;
  startBtn.disabled = true;
  startBtn.textContent = 'Playing...';
  showMole();
  timerId = setInterval(countDown, 1000);
}

function bonk(e) {
  if (!e.isTrusted || !this.parentNode.classList.contains('up')) return;
   score++;
  scoreDisplay.textContent = score;
  scoreDisplay.classList.add('hit');
  this.classList.add('hit');
  hitSound.currentTime = 0;
  hitSound.play();
  this.parentNode.classList.remove('up');

  setTimeout(() => {
    this.classList.remove('hit');
    scoreDisplay.classList.remove('hit');
  }, 300);
}

function setMode(selectedMode) {
  mode = selectedMode;
  easyBtn.classList.toggle('active', mode === 'easy');
  hardBtn.classList.toggle('active', mode === 'hard');
}

startBtn.addEventListener('click', startGame);
easyBtn.addEventListener('click', () => setMode('easy'));
hardBtn.addEventListener('click', () => setMode('hard'));
moles.forEach(mole => mole.addEventListener('click', bonk));










