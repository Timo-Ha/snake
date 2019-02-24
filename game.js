let w;
let snake;
let meal;

function setup() {
  createCanvas(600, 600)
  frameRate(5);
  w = width / 20
  snake = new SnakeClass();
  meal = new FoodClass();
  meal.piclokation();
}

function draw() {
  background("#FF4500");
  snake.show();
  snake.crawl();
  snake.teleport();
  meal.show();
  if (snake.EatingFood(meal)) {
    meal.piclokation();

  }
}

function SnakeClass() {
  this.FoodCounter = 0;
  this.x = 0;
  this.y = 0;
  this.tail = [];
  this.speedX = 0;
  this.speedY = 0;

  this.show = function() {
    fill("#FFD700");
    rect(this.x, this.y, w, w);

    for (let i = 0; i < this.tail.length; i++) {
      fill("#FFD700");
      rect(this.tail[i].x, this.tail[i].y, w, w);
    }
  };

  this.crawl = function() {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail = [i + 1];
    }

    this.tail[this.foodCounter - 1] = {
      x: this.x,
      y: this.y,
    };

    this.x += this.speedX * w;
    this.y += this.speedY * w;

    console.log("длинна массива" + this.tail.lensgth);
  };

  this.direction = function(dirX, dirY) {
    this.speedX = dirX;
    this.speedY = dirY;
  };

  this.teleport = function() {
    if (this.x >= width) {
      this.x = 0;
    };
    if (this.x < 0) {
      this.x = width - w;
    };
    if (this.y >= height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height - w;
    }
  };

  this.EatingFood = function(other) {
    if (this.x === other.x && this.y === other.y) {
      this.FoodCounter += 1;
      console.log("Переменная " + this.FoodCounter);
      return true;
    }
    return false;
  };
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.direction(0, -1);
  }
  if (keyCode === DOWN_ARROW) {
    snake.direction(0, 1);
  }
  if (keyCode === LEFT_ARROW) {
    snake.direction(-1, 0);
  }
  if (keyCode === RIGHT_ARROW) {
    snake.direction(1, 0);
  }
}


function FoodClass() {
  this.x = 0;
  this.y = 0;
  let rows = width / w;
  let cols = height / w;

  this.piclokation = function() {
    this.x = w * int(random(cols));
    this.y = w * int(random(rows));
  };

  this.show = function() {
    fill("255");
    rect(this.x, this.y, w, w);

  };
}