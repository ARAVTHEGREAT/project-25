
var redrop1,redrop2,redrop3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paperball = new paper(100,640,100)
	ground = new Ground(500,680,1200,20)

	redrop1 = new Dustbin(500,650,200,20);
	redrop2 = new Dustbin(590,600,20,400);
	redrop3 = new Dustbin(410,600,20,200);

	Engine.run(engine);

  
	

	
	 
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  paperball.display();
  ground.display();
  redrop1.display();
  redrop2.display();
  redrop3.display();


  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	
	Matter.Body.applyForce(paperball.body,paperball.body.position,{x:685,y:1966}) 
	
	}
	}
	
