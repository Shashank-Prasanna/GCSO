
var car; 
var wall; 
var speed, weight; 

function setup() {
  createCanvas(800,400);

  speed = random(55, 90); 
  weight = random(400, 1500); 

  car = createSprite(50, 200, 50, 50); 

  wall = createSprite(700, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80); 

  car.velocityX = speed;  
}

function draw() {
  background(0,0,0);  
  
  collision(); 

  drawSprites();
}

function collision () {
  if (wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0; 

    var deformation = 0.5*weight*speed*speed /22500;

    if(deformation<80) {
      car.shapeColor = color(0, 255, 0); 
    }

    else if(deformation > 80 && deformation < 180) {
      car.shapeColor = color(230, 230, 0); 
    }

    else {
      car.shapeColor = color(255, 0, 0); 
    }

  }
}