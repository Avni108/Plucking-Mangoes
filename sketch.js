const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var Mango1,Mango2,Mango3,Mango4,Mango5,Mango6,Mango7,Mango8;
var tree;
var boy;
var chain;
var stone;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Mango1 = new Mango(680,420,40);
	Mango2 = new Mango(530,440,40);
	Mango3 = new Mango(555,310,40);
	Mango4 = new Mango(480,380,40);
	Mango5 = new Mango(730,360,40);
	Mango6 = new Mango(590,420,40);
	Mango7 = new Mango(640,300,40);
	Mango8 = new Mango(600,350,40);
	tree = new Tree(580,670,250,250);
	boy = new Boy(180,530,250,250);
	stone = new Stone(70,490,50,50);
  chain = new Chain(stone.body,{x:150,y:495});
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  //console.log(stone.body.position);

  tree.display();
  boy.display();
  Mango1.display();
  Mango2.display();
  Mango3.display();
  Mango4.display();
  Mango5.display();
  Mango6.display();
  Mango7.display();
  Mango8.display();
  chain.display();
  stone.display(); 

  detectCollision(stone,Mango1);
  detectCollision(stone,Mango2);
  detectCollision(stone,Mango3);
  detectCollision(stone,Mango4);
  detectCollision(stone,Mango5);
  detectCollision(stone,Mango6);
  detectCollision(stone,Mango7);
  detectCollision(stone,Mango8);
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:70, y:470}) 
	  chain.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
