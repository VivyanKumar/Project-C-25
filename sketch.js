
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ballImage;
var bin, binImage;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(200,450,70);
	ground = new Ground(600,700,1200,25);
	bin1 = new Bin(1000,650,250,20);
	bin2 = new Bin(875,600,20,100);
	bin3 = new Bin(1125,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ball.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:-250});
	}
}