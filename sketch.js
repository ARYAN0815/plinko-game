const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles = [];
var plinko = [];
var division = [];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var k=0; k<=width;k=k+80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
    }
    for(var j=40;j<=width;j=j+50){
    plinko.push(new Plinko(j,75,10));
    }
    for(var j=15;j<=width-10;j=j+50)
    {
    plinko.push(new Plinko(j,175,10))
    }
    
  
}
function draw() {
  Engine.update(engine);
  
  background(0);
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10,width/2+10),10,10))
  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();
  }
  for(var k=0;k<division.length;k++){
    division[k].display();
  }  
  for(var k=0;k<plinko.length;k++){
    plinko[k].display();
  }    
  drawSprites();
}
