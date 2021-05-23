const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var backG;
var snowman, snowmanImage;
var aiengine;
var aiworld;
var snow;

function preload(){
backG = loadImage('snow1.jpg');
snowmanImage = loadImage('Screenshot 2021-05-22 165050.png');
}
function setup() {
  createCanvas(800,400);
  aiengine = Engine.create();
  aiworld = aiengine.world;
  snowman = createSprite(400, 300, 50, 50);
  snowman.addImage(snowmanImage);
  snowman.scale = 0.6;
  snowman.velocityX = 2;
  snow = new Snow();
}

function draw() {
  background(backG);
  if(snowman.x<=50){
    snowman.velocityX = 2;
  }
  if(snowman.x>=750){
    snowman.velocityX = -2;
  }
  snow.display();
  drawSprites();
}