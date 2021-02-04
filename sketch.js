const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
var score = 0;
var gameState = "start";

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 // ground = new Ground();
  stand = new Stand(800, 500, 300, 15);
  standA = new Stand(280, 580, 300, 15);

  stand1 = new Stand(560,400,250,10);
  stand2 = new Stand(950,300,200,10);

  polygon2 = Bodies.circle(260, 535, 20);
  this.polygon2.restitution = 0.3;
  this.polygon2.friction = 0.0085;
  World.add(world,polygon2);

  b1 = new Block(800,440,40,50);
  b2 = new Block(760,440,40,50);
  b3 = new Block(777.5,400,40,50);
 
  //level one
  block1 = new Block(470,375,30,40);
  block2 = new Block(500,375,30,40);
  block3 = new Block(530,375,30,40);
  block4 = new Block(560,375,30,40);
  block5 = new Block(590,375,30,40);
  block6 = new Block(620,375,30,40);
  block7 = new Block(650,375,30,40);
  //level two
  block8 = new Block(500,335,30,40);
  block9 = new Block(530,335,30,40);
  block10 = new Block(560,335,30,40);
  block11 = new Block(590,335,30,40);
  block12 = new Block(620,335,30,40);
  //level three
  block13 = new Block(530,295,30,40);
  block14 = new Block(560,295,30,40);
  block15 = new Block(590,295,30,40);
  //top
  block16 = new Block(560,255,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(890,275,30,40);
  blocks2 = new Block(920,275,30,40);
  blocks3 = new Block(950,275,30,40);
  blocks4 = new Block(980,275,30,40);
  blocks5 = new Block(1010,275,30,40);
  //level two
  blocks6 = new Block(920,235,30,40);
  blocks7 = new Block(950,235,30,40);
  blocks8 = new Block(980,235,30,40);
  //top
  blocks9 = new Block(950,195,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(220,350,16);
  this.polygon.restitution = 0.3;
  this.polygon.friction = 0.008;
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:220,y:350});

}

function draw() {
  background("black"); 
  //Engine.update(engine);
 /* fill(153, 110, 232);
  textSize(15);
  text(mouseX + ", " + mouseY, 30, 30); */
  if(gameState === "start"){
  fill(153, 110, 232);
  textFont("impact");
  textSize(50);
  text("Downtown Towers", 290, 70);
  textSize(30);
  text("Press 'P' to play", 290, 120);
  stand.display();
  standA.display();
  fill(93, 150, 332);
  b1.display();
  b2.display();
  b3.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon2.position.x,polygon2.position.y,50,50);
  forceapply();

  }
  if(gameState === "onSling" || gameState === "onSling2" || gameState === "launched" || gameState === "launched2"){
    fill(93, 150, 332);
    b1.display();
    b2.display();
    b3.display();
    fill("gold");
    imageMode(CENTER);
    image(polygon_img ,polygon2.position.x,polygon2.position.y,50,50);
 //   stand.display();
    fill(153, 110, 232);
  textFont("impact");
  textSize(30);
  stroke(5);
  text("Drag the stone and release it to destroy the blocks",290,40);
  text("Score: " + score, 950, 85);
//  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("blue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("lime");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("yellow");
  block13.display();
  block14.display();
  block15.display();
  fill("crimson");
  block16.display();

  fill("lime");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("yellow");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("crimson");
  blocks9.display();

  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  blocks1.score();
  blocks2.score();
  blocks3.score();
  blocks4.score();
  blocks5.score();
  blocks6.score();
  blocks7.score();
  blocks8.score();
  blocks9.score();

  }

 /* if(polygon.position.x > 255 && gameState === "onSling" || polygon.position.x > 255 && gameState === "onSling2" ){
    polygon.position.x = 225;
  } */

  keyPressed();
  end();
}

function mouseDragged(){
  if (gameState === "onSling" || gameState === "onSling2"){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  if (gameState === "onSling"){
    slingShot.fly();
    gameState = "launched";
  }
  if (gameState === "onSling2"){
    slingShot.fly();
    gameState = "launched2";
  }
}

function keyPressed(){
  if(gameState === "launched" && score < 500){
    fill(153, 110, 232);
    textSize(20);
    text("Wait until the score has finished updating. Then press 'SPACE' to get a second chance to play!",50 ,200);
  }

  if(keyCode === 32 && gameState == "launched" && score < 500){
    Matter.Body.setPosition(this.polygon, {x:220, y:350});
    slingShot.attach(this.polygon);
    gameState = "onSling2";
  }

  if(gameState == "launched" && score == 500){
    fill(153, 110, 232);
    textSize(20);
    text("What the--",50 ,200);
  }
}

function end(){
  if(gameState === "launched2"){
    fill(153, 110, 232);
    textSize(40);
    text("Final score: " + score, 80, 200);
    fill(153, 110, 232);
    textSize(15);
    text("Wait until the score has finished updating. Then reload your screen to try again", 80, 230);
  }
}

function forceapply(){
  if(keyCode === 80 && gameState == "start"){
    stand.body.isStatic = false;
    standA.body.isStatic = false;
    gameState = "onSling";
   // Matter.Body.applyForce(polygon2.body, polygon2.position, {x:105, y:-105});
  }
}