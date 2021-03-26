const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammar1,engine,world;
var stone1;
var ground1;
var rubber1;
var stone1;
var sand1;
var sand2;
var sand3;
var sand4;
var sand5;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  hammar1 = new HammarClass(400,300,100,50);

  ground1 = new GroundClass(400,680,800,10);
  rubber1 = new RubberClass(500,645,30);
  stone1 = new StoneClass(300,645,80,70);
  sand1 = new SandClass(100,650,10,10);
  sand2 = new SandClass(200,650,10,10);
  sand3 = new SandClass(600,650,10,10);
  sand4 = new SandClass(700,650,10,10);
  sand5 = new SandClass(780,650,10,10);
 
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
 hammar1.display();
 rubber1.display();
 stone1.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 ground1.display();

}