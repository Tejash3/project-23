var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var boxsound;
var zombie1,zombie2,zombie3,zombie4;
var soldier;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zombie1IMG=loadImage("3.png")
	zombie2IMG=loadImage("22.png")
	zombie3IMG=loadImage("34.png")
	zombie4IMG=loadImage("1070345.png")
	soldierIMG=loadImage("soldier.png")
}
function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	zombie1=createSprite(200, 590, 10,10);
	zombie1.addImage(zombie1IMG)
	zombie1.scale=0.09

	zombie2=createSprite(690,600,10,10);
	zombie2.addImage(zombie2IMG)
	zombie2.scale=0.05

	zombie3=createSprite(600,600,10,10);
	zombie3.addImage(zombie3IMG)
	zombie3.scale=0.3

	zombie4=createSprite(70,590,10,10);
	zombie4.addImage(zombie4IMG)
	zombie4.scale=0.07

	soldier=createSprite(460,550,10,10);
	soldier.addImage(soldierIMG)
	soldier.scale=0.07;
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Redzone1 = new Redzone(250,600,20,120);
	 Redzone2 = new Redzone(385,651,250,35);
	 Redzone3 = new Redzone(500,600,20,120);
	 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  Redzone1.display();
  Redzone2.display();
  Redzone3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody,false);
  }
}
