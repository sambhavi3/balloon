var balloon;

function preload(){
  bg= loadImage("Hot Air Ballon-01.png")
  balloon= loadImage("Hot Air Ballon-02.png");
}
function setup() {
  createCanvas(500,500);
  balloon= createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg); 
  
  if (keyDown(LEFT_ARROW)){
balloon.x=balloon.x -10;
  }
  else if (keyDown(RIGHT_ARROW)){
    balloon.x=balloon.x +10;
      }
      else if (keyDown(UP_ARROW)){
        balloon.x=balloon.x -10;
          }
        else if (keyDown(DOWN_ARROW)){
            balloon.x=balloon.x +10;
              }
  drawSprites();
}
