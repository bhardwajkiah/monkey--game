var monkey, monkey_running;
var bananaImage,foodGroup;
var obstaclesGroup,obstacleImage;
var banana, obstacle;
var score = 0;
var survivalTime = 0;
var ground;


function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600, 400);
  
  //creating monkey
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("Running", monkey_running);
  monkey.scale = 0.1;
 
  //creating ground
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  //console.log(ground.x);
  ground.visible=true;

  obstacleGroup = new Group();
  foodGroup = new Group();
  survivalTime = 0;
  score = 0;
  
}


function draw() {
  background("white");

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

 
  bringbanana();
  bringobstacles();

  //monkey.collide(ground);
  
  stroke("black")
  textSize(20);
  fill("black");
  text("Score: " + score, 400, 50);

  stroke("black")
  textSize(20);
  fill("black");
  text("Survival Time: " + survivalTime, 100, 50);
   survivalTime = Math.ceil(frameCount / frameRate());

   if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
  drawSprites();
}
     

function bringbanana() {
  if (frameCount % 80 === 0){
    var banana = createSprite(600, 250, 40, 10);
    banana.y = random(120, 200);
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -3;
    //assigning lifetime to the group.
    banana.lifetime = 200;
    monkey.depth = banana.depth + 1;
    foodGroup.add(banana);
  }
  
}
function bringobstacles(){
    if(frameCount % 300 === 0){
    var obstacle = createSprite(800,350,10,40);
      obstacle.velocityX = -4;
      obstacle.addImage("running",obstacleImage);
      obstacle.scale = 0.2;
      obstacle.lifetime = 190;
      obstacleGroup.add(obstacle);
    }
  }
              
