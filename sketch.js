var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(600, 600);
	//rectMode(CENTER)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	//groundSprite=createSprite(width/2, height-20, width,10);
	//groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution : 1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 590, width, 30 , {isStatic:true} );
	World.add(world, ground);
	
	side1 = Bodies.rectangle(width/2, 570, 200, 20, {isStatic:true});
	World.add(world,side1);

	side2 = Bodies.rectangle(width/2+100, height-70, 20, 100, {isStatic:true});
	World.add(world,side2);

	side3 = Bodies.rectangle(width/2-100, height-70, 20, 100, {isStatic:true});
	World.add(world,side3);

	Engine.run(engine);
}

function draw() {

background(5);
  Engine.update(engine);
   
  rectMode(CENTER);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ; 

  fill("brown");
  rect(ground.position.x, ground.position.y, 600, 10);

  fill("red");
  rect(side1.position.x, side1.position.y, 200, 20);
  rect(side2.position.x, side2.position.y, 20, 100);
  rect(side3.position.x, side3.position.y, 20, 100);
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW)
 {// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
 }
}