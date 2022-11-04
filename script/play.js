import food from "./food.js";
import snake from "./snake.js";
import game from "./game.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const points = document.getElementById('points');
const level = document.getElementById('level');

document.getElementById("gameover").style.display = "none";

function start() {
  document.getElementById("button").style.display = "none";
  play();
}
function newGame() {
  document.getElementById("button2").style.display = "none";
  document.getElementById("gameover").style.display = "none";
  ctx.clearRect(0, 0, 600, 576);
  snake.snake.length = 0;
  snake.snake.unshift({x:288, y:288});
  game.point = 0;
  play();
}

food.randomFood();
food.randomImg();

document.addEventListener('mousedown',game.mouse);
document.addEventListener('keydown', game.key);

document.addEventListener('dblclick', (event) => {
  event.preventDefault();
  dir = 'up';
});
document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  dir = 'down';
});

function play() {
  let level1 = setInterval(() => {
    game.draw();
    game.gameOv(level1);
    game.eatSnake(snake.snake[0], snake.snake, level1);
    level.textContent = 1;

    if (3 < snake.snake.length) {
      if (snake.snake.length === 4) {
        snake.snake.splice(snake.snake.length - 3);
      }
      ctx.font = "70px Lakki Reddy";
      ctx.fillStyle = '#136A0B';
      ctx.fillText("Level 2", 150, 100);
      clearInterval(level1);

      let level2 = setInterval(() => {
        level.textContent = 2;
        game.draw();
        game.gameOv(level2);
        game.eatSnake(snake.snake[0], snake.snake, level2);

        if (snake.snake.length > 6) {
          if (snake.snake.length === 7) {
            snake.snake.splice(snake.snake.length - 6);
          }
          ctx.font = "70px Lakki Reddy";
          ctx.fillStyle = '#136A0B';
          ctx.fillText("Level 3", 150, 100);
          clearInterval(level2);

          let level3 = setInterval(() => {
            level.textContent = 3;
            game.draw();
            game.gameOv(level3);
            game.eatSnake(snake.snake[0], snake.snake, level3);
          }, 150);
        }
      }, 200);
    }
  }, 250);
}

const startButton = document.getElementById('button');

startButton.addEventListener('click', (a) =>{
  event.preventDefault();
  start();
});

const newGameButton = document.getElementById('button2');

newGameButton.addEventListener('click', (a) =>{
  event.preventDefault();
  newGame();
});
