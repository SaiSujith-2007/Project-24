
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall;
var wall1, wall2, wall3;
var ground;

function preload() {
	
}

function setup() {
	var canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1=createSprite(650,630,150,20);
	wall1.shapeColor="white";
	wall2=createSprite(580,580,20,150);
	wall2.shapeColor="white";
	wall3=createSprite(730,580,20,150);
	wall3.shapeColor="white";
    paperBall = new paper(100,620,20);
	ground = createSprite(400,650,800,20);
	ground.shapeColor="yellow";
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(180);
  paperBall.display();

 paperBall.collide=ground
	


  drawSprites();
}

function keyPressed(){
	if (keyCode === "UP_ARROW"){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
		
	}
}

