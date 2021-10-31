// NAME spacing 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

//fardeen engine
	engine = Engine.create();

	// creating my world in my engine
	world = engine.world;
var ball_options={
	 isStatic :false,
	 restitution:0.3
	
 }
 bottom = new Ground(300,100,20,400);
  bottom2= new Ground(90,200,20,400);
 groundObj = new Ground(width/2,670,width,20)
 leftside = new Ground(1100,600,20,120);
	//Create the Bodies Here.
ball = Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.show()
  drawSprites();
  ellipse(ball.position.x,ball.position.y,20)
}

function keyPressed(){

	if (keyCode ===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.02,y:0})
	}
}

