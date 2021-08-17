var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);

}
function draw() 
{
   background("white");
 
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    background("red");
  }
 
  if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    background("blue");
  }
  
  if (keyIsDown(UP_ARROW)) 
  {
    (box.position).y = box.position.y - 5;
    background("green");
    
  }
 
  if (keyIsDown(DOWN_ARROW)) 
  {
    (box.position).y = box.position.y + 5;
    background("orange");
  }
 
  drawSprites();
}





