const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const strawberry = new Image();

strawberry.src = 'img/1844706_nutrition_strawberry_summer_food_icon (1).png';

const carrot = new Image();

carrot.src = 'img/2189593_carrot_food_spring_vegetable_icon.png';

const limon = new Image();

limon.src = 'img/2137825_food_fruit_lemon_organic_vegan_icon (1).png';

const lemon = new Image();

lemon.src = 'img/2250030_desert_food_fruit_holiday_melon_icon.png';

let box = 32;

class Food {
  constructor(){
    this.food = [];
    this.foodImg = [strawberry, carrot, limon, lemon];
    this.drawFood = [];
  }

  randomFood(){
    let coordinate = {
      x: Math.floor(Math.random() * 15) * box,
      y: Math.floor(Math.random() * 16 ) * box
    };

    this.food.push(coordinate);
  }

  randomImg(){
    const length = this.foodImg.length;
    const randomFoodimg = this.foodImg[Math.floor(Math.random() * length)];

    return this.drawFood.push(randomFoodimg);
  };
}
const food = new Food;

export default food;
