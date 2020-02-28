const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,box3,box4,box5,box6,box7;
var ground1;


function setup() {
  createCanvas(400, 400);
  
   engine = Engine.create();
    world = engine.world;
  
  ground1=new Ground(200,380,400,20);
  box1= new Box(100,300,50,150);
  box2= new Box(300,300,50,150);
  box3= new Box(200,200,250,50);
  box4= new Box(250,165,20,120); 
  box5= new Box(150,165,20,120);
  box6= new Box(250,150,20,120,PI/4); 
  box7= new Box(150,150,20,120,PI/4);
  box8= new Box(150,150,20,120);
  box9= new Box(50,325,15,90);
}
function draw() {
  background(0);
  
  Engine.update(engine);
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display(); 
}