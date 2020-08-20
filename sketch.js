var dustbin,dustbin1,dustbin2;
var ground,ball;
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

	ground=new Ground(200,540,1200,20);

	

	var dustbin=createSprite(500,470,10,100);
	dustbin.shapeColor="white"


	var dustbin1=createSprite(590,525,180,10);
	dustbin1.shapeColor="white"

	var dustbin2=createSprite(680,470,10,100);
	dustbin2.shapeColor="white"

	
	ball=Bodies.circle(100,510,20);
	World.add(world,ground);

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  fill(244);
  //ellipse.shapeColor("pink");

  ground.display();
  drawSprites();
 
}

function keypressed(){
	
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	   
	}
}

