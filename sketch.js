
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dust1,dust2,dust3;
var ball;


	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 dust1 = new Dustbin(425,600);
	 dust2 = new Dustbin(588,600);
	 
	 dust3 = new Bottomdustbin(510,640);
	 
	 ground = new Ground(500,652,800,15);

	 ball = new Paper(120,615,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dust1.display();
  dust2.display();
  dust3.display();

  ball.display();

  ground.display();

  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85})
	}
}



