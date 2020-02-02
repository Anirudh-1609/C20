function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  moverect=createSprite(100,100,50,50);

}

function draw() {
  background(255,255,255);
  moverect.x=World.mouseX;
  moverect.y= World.mouseY;
  if(moverect.x-fixrect.x<moverect.width/2+fixrect.width/2 &&
   fixrect.x-moverect.x<moverect.width/2+fixrect.width/2 &&
   moverect.y-fixrect.y<moverect.height/2+fixrect.height/2 &&
   fixrect.y-moverect.y<moverect.height/2+fixrect.height/2 ) {
    fixrect.shapeColor="red";
    moverect.shapeColor="red";

  
 }
 else{
  fixrect.shapeColor="blue";
    moverect.shapeColor="blue"; 
 }
 
 drawSprites();
}