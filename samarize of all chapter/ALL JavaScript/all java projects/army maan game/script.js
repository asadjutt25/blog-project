const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const restartBtn = document.getElementById('restartBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');

const background = new Image();
background.src = 'assets/background.jpg';

const soldierImg = new Image();
soldierImg.src = 'assets/soldier_with_gun.png';

const enemyImg = new Image();
enemyImg.src = 'assets/enemy.png';

const bulletImg = new Image();
bulletImg.src = 'assets/bullet.png';

const enemyBulletImg = new Image();
enemyBulletImg.src = 'assets/enemy_bullet.png';

const fireSound = new Audio('assets/sounds/fire.mp3');
const winSound = new Audio('assets/sounds/win.mp3');
const loseSound = new Audio('assets/sounds/lose.mp3');

let soldier, bullets, enemies, enemyBullets, kills, totalEnemies, gameOver, health;

function initGame() {
  soldier = { x: 50, y: 200, width: 50, height: 50 };
  bullets = [];
  enemyBullets = [];
  enemies = [];
  kills = 0;
  totalEnemies = 10;
  gameOver = false;
  health = 100;
  restartBtn.style.display = 'none';

  for (let i = 0; i < totalEnemies; i++) {
    enemies.push({
      x: 600 + Math.random() * 150,
      y: Math.random() * 450,
      width: 40,
      height: 40,
      alive: true,
      shootCooldown: Math.random() * 100 + 50
    });
  }

  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(soldierImg, soldier.x, soldier.y, soldier.width, soldier.height);

  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 100, 10);
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, health, 10);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(10, 10, 100, 10);

  bullets.forEach((b, i) => {
    b.x += 10;
    ctx.drawImage(bulletImg, b.x, b.y, 10, 5);

    enemies.forEach((e) => {
      if (e.alive && b.x < e.x + e.width && b.x + 10 > e.x && b.y < e.y + e.height && b.y + 5 > e.y) {
        e.alive = false;
        kills++;
        bullets.splice(i, 1);
      }
    });
  });

  enemyBullets.forEach((eb, i) => {
    eb.x -= 5;
    ctx.drawImage(enemyBulletImg, eb.x, eb.y, 10, 5);

    if (
      eb.x < soldier.x + soldier.width &&
      eb.x + 10 > soldier.x &&
      eb.y < soldier.y + soldier.height &&
      eb.y + 5 > soldier.y
    ) {
      health -= 20;
      enemyBullets.splice(i, 1);
      if (health <= 0) {
        gameOver = true;
        loseSound.play();
        restartBtn.style.display = 'block';
      }
    }
  });

  enemies.forEach((e) => {
    if (e.alive) {
      ctx.drawImage(enemyImg, e.x, e.y, e.width, e.height);
      e.shootCooldown--;
      if (e.shootCooldown <= 0) {
        enemyBullets.push({ x: e.x, y: e.y + e.height / 2 });
        e.shootCooldown = Math.random() * 100 + 50;
      }
    }
  });

  ctx.fillStyle = 'white';
  ctx.font = '20px Arial';
  ctx.fillText(`Kills: ${kills}/${totalEnemies}`, 10, 40);

  if (kills === totalEnemies) {
    ctx.fillStyle = 'green';
    ctx.font = '30px Arial';
    ctx.fillText('🏆 You Win!', 330, 250);
    gameOver = true;
    winSound.play();
    restartBtn.style.display = 'block';
  }

  if (!gameOver) {
    requestAnimationFrame(draw);
  }
}

document.addEventListener('keydown', (e) => {
  if (gameOver) return;

  switch (e.key) {
    case 'ArrowUp':
      if (soldier.y > 0) soldier.y -= 10;
      break;
    case 'ArrowDown':
      if (soldier.y < canvas.height - soldier.height) soldier.y += 10;
      break;
    case 'ArrowLeft':
      if (soldier.x > 0) soldier.x -= 10;
      break;
    case 'ArrowRight':
      if (soldier.x < canvas.width - soldier.width) soldier.x += 10;
      break;
    case ' ':
      bullets.push({ x: soldier.x + 40, y: soldier.y + 20 });
      fireSound.play();
      break;
  }
});

restartBtn.addEventListener('click', () => {
  initGame();
});

fullscreenBtn.addEventListener('click', () => {
  if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
  } else if (canvas.webkitRequestFullscreen) {
    canvas.webkitRequestFullscreen();
  } else if (canvas.msRequestFullscreen) {
    canvas.msRequestFullscreen();
  }
});

background.onload = () => initGame();
