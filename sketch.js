
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperBall, paperImage, dustbinImage;
var wall1, wall2, wall3;
var ground1;

function preload() {
	paperImage=loadImage("Sprites/paper.png");
	dustbinImage=loadImage("Sprites/dustbingreen.png");
}

function setup() {
	var canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;
	
	
	//Create the Bodies Here.
	wall1=new dustbin(650,630,150,20);
	wall2=new dustbin(580,580,20,150);
	wall3=new dustbin(730,580,20,150);
	
	paperBall = new paper(100,620,20);
	
	ground1 =new ground(400,650,800,20);
	ground1.shapeColor="yellow";
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(180);
  paperBall.display();
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();

  
	


  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position,{x:60,y:-60});
		
	}
}

