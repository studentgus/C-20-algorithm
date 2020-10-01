
var a, b;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600,400,50,80);
  a.shapeColor = "green";
  b = createSprite(400,200,80,30);
  b.shapeColor = "green";
}

function draw() {
  background(255,255,255); 
  b.x = mouseX;
  b.y = mouseY;


  if(b.x-a.x < b.width/2+a.width/2 &&
    a.x-b.x < b.width/2+a.width/2 &&
    b.y-a.y < b.height/2+a.height/2 &&
      a.y-b.y < b.height/2+a.height/2 )
  {
 
 a.shapeColor = "red";
 b.shapeColor = "red";
 
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  

  
   drawSprites();

}