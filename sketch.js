/*
[IMPORTANT]THE REASON THAT IT GLITCHES OUT IS AN ERROR IN
THE CODE: SOMEHOW THE FUNCTIONS FOR CREATING BANANAS AND THE 
FUNCTIONS FOR CREATING THE STONES ARE NOT WORKING, AND THE 
GAME GLITCHES OUT WHEN THE FUNCTIONS ARE ACTIVATED.

ALSO, THERE IS ANOTHER ERROR THAT MAKES THE SWITCH STATEMENT I MADE NOT WORK.
*/
var monkey, score, back, invisGround;
var obstacleImage, bananaImage, backgroundImage, monkeyRunning;
var obsGroup, frutGroup;       

function preload()
{
  obstacleImage = loadImage("stone.png");
  backgroundImage = loadImage("jungle.png");
  bananaImage = loadImage("banana.png");
  monkeyRunning = loadAnimation("Monkey_01.png","Monkey_02.png",
"Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

}
function setup() 
{
  
  createCanvas(400, 400);
  
  back = createSprite(0,200,800,400);
  back.addImage("normal", backgroundImage);
  back.scale = 2;
  back.x = back.width/2;
  back.velocityX = -3;
  
  
  monkey = createSprite(50,300,10,10);
  monkey.addAnimation("dhowei",monkeyRunning);
  monkey.scale = 0.1;
  
  invisGround = createSprite(200,342,400,20);
  invisGround.visible = false;
  
  var score = 0;
}

function draw() 
{
  stroke("white");
  textSize(20);
  fill("white");
  score = Math.ceil(World.frameCount/World.frameRate);
  
  monkey.collide(invisGround);
  monkey.velocityY++;
  
  if(keyDown("space")&& monkey.y>270)
  {
    monkey.velocityY = -10;
  }
  
  if(back.x<0)
  {
    back.x = back.width/2
  }
  
  if(monkey.isTouching(obsGroup))
  {
     monkey.scale = 0.07
  }
  
  if(monkey.isTouching(frutGroup))
  {
     frutGroup.destroyEach();
    score = score + 2;
  }
  switch(score)
  {
    case 10: monkey.scale = 0.12
      break;
    case 20: monkey.scale = 0.14
      break;
    case 30: monkey.scale = 0.16
      break;
    case 40: monkey.scale = 0.18
      break;
    default: break;
  }
  
  
  drawSprites();
  createBanana();
  createObstacle();
  text("Score: " + score,250,100);
}

function createBanana()
{
  if(World.frameCount%80 == 0)
  {
    var banana = createSprite(350,rand(200,250),50,50);
    banana.addImage("banana.png");
    banana.velocityX = -5;
    banana.scale = 0.05;
    banana.lifeTime = 400;
  frutGroup.add(banana);
  }
}

function createObstacle()
{
  if(World.frameCount%300 == 0)
  {
    var obstacle = createSprite(350,290,50,50);
    obstacle.addImage("stone.png");
    obstacle.scale = 0.13;
    obstacle.velocityX = -5;
    obstacle.lifeTime = 400;
    obsGroup.add(obstacle);
  }
}