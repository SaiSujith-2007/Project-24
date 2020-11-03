
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var paperBall, ground;
var wall1, wall2, wall3, wallGroup;

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;
    wallGroup=createGroup();
    
	engine = Engine.create();
	world = engine.world;
	
	ground=createSprite(380,650,900,20);
	ground.shapeColor="yellow";
	//Create the Bodies Here.
    
	paperBall=new paper(100,620,20);
    
	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  
  Engine.update(engine);
  wall();
  
  paperBall.display();
  drawSprites();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});
		
	}
   }

function wall(){
	wall1=createSprite(650,640,200,20);
	wall1.shapeColor="white";
	wall2=createSprite(550,600,20,100);
	wall2.shapeColor="white";
	wall3=createSprite(750,600,20,100);
	wall3.shapeColor="white";
	wallGroup.add(wall1,wall2,wall3);
}

