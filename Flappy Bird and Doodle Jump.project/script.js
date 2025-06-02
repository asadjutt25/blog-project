
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const bird = {
  x: 50,
  y: 150,
  width: 24,
  height: 9,
  gravity: 0.4,
  lift: -9,
  velocity: 0,
};
const pipeWidth = 40;
const pipeGap = 170;
let pipes = [];
let frame = 0;
let score = 0;
let gameOver = false;

function resetGame() {
  bird.y = 150;
  bird.velocity = 0;
  pipes = [];
  frame = 0;
  score = 0;
  gameOver = false;
  document.getElementById('score').textContent = 'Score: 0';
  loop();
}

function drawBird() {
  ctx.fillStyle = 'yellow';
  ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
  // simple wing
  ctx.fillStyle = 'orange';
  ctx.fillRect(bird.x + 5, bird.y + 10, 10, 5);
}

function drawPipes() {
  ctx.fillStyle = '#228B22'; // green pipes
  pipes.forEach(pipe => {
    // top pipe
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
    // bottom pipe
    ctx.fillRect(pipe.x, pipe.bottomY, pipeWidth, canvas.height - pipe.bottomY);
  });
}

function updatePipes() {
  if (frame % 90 === 0) {
    // generate new pipe with random top height
    const topHeight = Math.floor(Math.random() * (canvas.height - pipeGap - 100)) + 50;
    pipes.push({
      x: canvas.width,
      top: topHeight,
      bottomY: topHeight + pipeGap,
      passed: false,
    });
  }

  pipes.forEach(pipe => {
    pipe.x -= 9;

    // Check if bird passed pipe to increase score
    if (!pipe.passed && pipe.x + pipeWidth < bird.x) {
      pipe.passed = true;
      score++;
      document.getElementById('score').textContent = 'Score: ' + score;
    }
  });

  // Remove pipes that are out of screen
  pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);
}

function checkCollision() {
  if (bird.y + bird.height > canvas.height || bird.y < 0) {
    gameOver = true;
  }

  pipes.forEach(pipe => {
    // Bird inside horizontal pipe area
    if (bird.x + bird.width > pipe.x && bird.x < pipe.x + pipeWidth) {
      // Bird hits top pipe
      if (bird.y < pipe.top) {
        gameOver = true;
      }
      // Bird hits bottom pipe
      if (bird.y + bird.height > pipe.bottomY) {
        gameOver = true;
      }
    }
  });
}

function updateBird() {
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  if (gameOver) {
    alert('Game Over! Your score: ' + score);
    resetGame();
    return;
  }

  clearCanvas();
  drawBird();
  updateBird();
  updatePipes();
  drawPipes();
  checkCollision();

  frame++;
  requestAnimationFrame(loop);
}

window.addEventListener('keydown', e => {
  if (e.code === 'Space' || e.code === 'ArrowUp') {
    bird.velocity = bird.lift;
  }
}); 

resetGame();