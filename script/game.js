import food from "./food.js";
import snake from "./snake.js";

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let box = 32;

const head = new Image();

head.src = 'img/4591880_animal_carnivore_cartoon_fauna_snake_icon.png';
const headLeft = new Image();

headLeft.src = 'img/left.png';
const headRight = new Image();

headRight.src = 'img/right.png';
const headUp = new Image();

headUp.src = 'img/up.png';

const scoreGameOv = new Image();

scoreGameOv.src = 'img/1720772_win_achievement_best_reward_trophy_icon.png';

const levelGameOv = new Image();

levelGameOv.src = 'img/1034364_quality_award_prize_star_trophy_icon.png';

document.getElementById("button2").style.display = "none";
document.getElementById("gameover").style.display = "none";

let dir;

class Game{
  constructor(){
    this.point = 0;
  }

  board(){
    ctx.fillStyle = '#8EE1F9';
    ctx.fillRect(0, 0, 608, 576);
    ctx.strokeStyle = '#0059ffcf';
    for (let y = 0; y < 576; y += box) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(608, y);
      ctx.stroke();
      ctx.restore();
    }
    for (let x = 1; x < 608; x += box) {
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 576);
      ctx.stroke();
      ctx.restore();
    }
  };

  gameOv(level){
    if (snake.snake[0].x === -32 || snake.snake[0].y === -32 || snake.snake[0].x === 608 || snake.snake[0].y === 576) {
      clearInterval(level);
      ctx.font = "50px Lakki Reddy";
      ctx.drawImage(scoreGameOv, 220, 230, 65, 70);
      ctx.fillStyle = 'purple';
      ctx.fillText(this.point * 100, 290, 285);
      document.getElementById("button2").style.display = "block";
      document.getElementById("gameover").style.display = "block";
    }
  };

  eatSnakeFood (snakeX, foodX, snakeY, foodY, food1){
    if (snakeX == foodX && snakeY == foodY) {
      let coordinate = {
        x: Math.floor(Math.random() * 15) * box,
        y: Math.floor(Math.random() * 16 ) * box
      };
      const length = food1.length;
      var randomFood = food1[Math.floor(Math.random() * length)];

      this.point++;
      food.food.unshift(coordinate);
      food.food.pop();
      snake.snake.push(food.food);
      food.drawFood.pop();
      food.drawFood.push(randomFood);
      return food.drawFood;
    }
  };

  eatSnake(head, snake, level){
    for (let i = 1; i < snake.length; i++) {
      if (head.x == snake[i].x && head.y == snake[i].y) {
        clearInterval(level);
        ctx.font = "50px Lakki Reddy";
        ctx.drawImage(scoreGameOv, 220, 230, 65, 70);
        ctx.fillStyle = 'purple';
        ctx.fillText(game.point * 100, 290, 285);
        document.getElementById("button2").style.display = "block";
        document.getElementById("gameover").style.display = "block";
      }
    }
  };

  draw(){
    ctx.clearRect(0, 0, 610, 576);
    game.board();
    game.eatSnakeFood(snake.snake[0].x, food.food[0].x, snake.snake[0].y, food.food[0].y, food.foodImg);
    ctx.drawImage(food.drawFood[0], food.food[0].x, food.food[0].y);
    let snakeX = snake.snake[0].x;
    let snakeY = snake.snake[0].y;

    snake.snake.pop();
    if(dir == 'left'){
      document.getElementById("button").style.display = "none";
      snakeX -= box;
    }
    if(dir == 'right'){
      document.getElementById("button").style.display = "none";
      snakeX += box;
    }
    if(dir == 'down'){
      document.getElementById("button").style.display = "none";
      snakeY += box;
    }
    if(dir == 'up'){
      document.getElementById("button").style.display = "none";
      snakeY -= box;
    }
    let newHead = {
      x: snakeX,
      y: snakeY
    };

    snake.snake.unshift(newHead);

    for (let i = 0; i < snake.snake.length; i++) {

      if (dir == 'left') {
        snake.gradient(snake.snake[i].x + 28, snake.snake[i].y);
        ctx.fillRect(snake.snake[i].x + 28,snake.snake[i].y, box, box);
        ctx.drawImage(headLeft,snake.snake[0].x, snake.snake[0].y, box, box);
      }
      if (dir == 'down') {
        snake.gradient(snake.snake[i].x, snake.snake[i].y - 28);
        ctx.fillRect(snake.snake[i].x,snake.snake[i].y - 28, box, box);
        ctx.drawImage(head,snake.snake[0].x, snake.snake[0].y, box, box);
      }
      if (dir == 'right') {
        snake.gradient(snake.snake[i].x - 28, snake.snake[i].y);
        ctx.fillRect(snake.snake[i].x - 28,snake.snake[i].y, box, box);
        ctx.drawImage(headRight,snake.snake[0].x, snake.snake[0].y, box, box);
      }
      if (dir == 'up') {
        snake.gradient(snake.snake[i].x, snake.snake[i].y + 28);
        ctx.fillRect(snake.snake[i].x,snake.snake[i].y + 28, box, box);
        ctx.drawImage(headUp,snake.snake[0].x, snake.snake[0].y, box, box);
      }
      points.textContent = this.point * 100;

    }
  };

  key(){
    event.preventDefault();
    if(event.keyCode == 37 && dir != 'right'){
      button.disabled = true;
      dir = 'left';
    }
    if(event.keyCode == 38 && dir != 'down'){
      dir = 'up';
    }
    if(event.keyCode == 39 && dir != 'left'){
      dir = 'right';
    }
    if(event.keyCode == 40 && dir != 'up'){
      dir = 'down';
    }
  };

  mouse (){
    if(event.x < 716 && dir != 'right'){
      dir = 'left';
    }
    if(event.x > 716 && dir != 'left'){
      dir = 'right';
    }
  };
}

const game = new Game;

export default game;
