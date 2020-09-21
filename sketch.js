var bullet1,wall1;
var bullet2,wall3;
var bullet3,wall5;
var speed;
var thickness,speed,weight;

function setup(){
  createCanvas(1200,600);
  //centre line code
  wall2 = createSprite(400,150,1600,10);
  wall4 = createSprite(400,300,1600,10);
  wall6=createSprite(400,450,1600,10);
  wall6.shapeColor="white";
  wall4.shapeColor="white";
  wall2.shapeColor="white";
  //car creating code.
  bullet1=createSprite(50,70,30,20);
  bullet2=createSprite(1105,230,30,20);
  bullet3=createSprite(1105,370,30,20);
  bullet4=createSprite(1105,530,30,20);

  //giving color to cars.
  bullet1.shapeColor="white";
  bullet2.shapeColor="yellow";
  bullet3.shapeColor="blue";
  bullet4.shapeColor="green";
  //wall creating code.
  wall1=createSprite(1170,70,thickness,height/10);
  wall3=createSprite(1170,230,thickness,height/10);
  wall5=createSprite(1170,370,thickness,height/10);
  wall7=createSprite(1170,530,thickness,height/10);
wall1.shapeColor="green";
wall3.shapeColor="red";
wall5.shapeColor="red";
wall7.shapeColor="red";
}

function draw() {
  background(0);  
  drawSprites();
  speed=random(223,321);
  weight=random(30,52);
bullet1.velocityX=8;
 
 bullet1.debug=true;
}
function hasCollided(bullet1,wall1){

   bullet1RightEdge=bullet1.x+bullet1.width;
   wall1LeftEdge=wall1.x;
   if(bullet1RightEdge>=wall1LeftEdge)
   {
   return true 
   }
return false;
if(hasCollided(bullet1,wall1))
{
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
}
if(damage>10)
{
wall1.shapeColor=color(225,0,0);
}



if(damage<10)
{
wall1.shapeColor=(0,225,0);
}
}