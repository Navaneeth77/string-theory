var object
function setup() {
  createCanvas(800,400);
  object = createSprite(400, 200, 50, 50);
  object.velocityX = random(-20,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  //if (e>0){
 // velocityX = object.x + 10
 // }
 //else {
  // object.x-10
 //}
}