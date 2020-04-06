var fixedRect, movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(10,200,80,50);
  rect1.shapeColor="green";
  rect2=createSprite(1000,200,80,50);
  rect2.shapeColor="green";

  rect1.velocityX = +5;
  rect2.velocityX = -5;
}

function draw() {
  background(0,0,0);  


 bounceOff(rect1,rect2);
  drawSprites();
}
