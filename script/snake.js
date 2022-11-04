const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
let box = 32;

class Snake{
  constructor(){
    this.snake = [{
      x: 9 * box,
      y: 9 * box
    }];
  }

  gradient(x,y){
    let gradient = ctx.createLinearGradient(x, y, x + box, y - 2);

    gradient.addColorStop(0, "#136A0B");
    gradient.addColorStop(1, "#6EE163");
    ctx.arc(x, y, 50, 0, 2 * Math.PI);
    ctx.fillStyle = gradient;
  };
}
const snake = new Snake;

export default snake;
