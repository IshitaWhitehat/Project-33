const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine=0, world;
var bg_img;
var peng_hug;
var peng_blue;
var snow=[],ground;
function preload(){
bg_img=loadImage("snow2.jpg");
peng_hug=loadImage("penguin1.png");
peng_blue=loadImage("penguin2.png");
}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(400,390,800,5)
    
}

function draw() {
  background(bg_img);  
  Engine.update(engine);
  if(frameCount%60===0){
    snow.push(new Snowflake(random(5,790),0,50));
  }
  for(var i=0;i<snow.length;i++){
    snow[i].display();
  }
  push();
    imageMode(CENTER)
    image(peng_hug,150,345,100,100);
    image(peng_blue,500,345,100,100);
    pop();

}