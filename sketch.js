var fixedRect,movingRect, fixedRect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fixedRect1= createSprite(600, 200, 50, 80);
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 && 
  fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2 && 
  fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
  {movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

}
else{movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}

if(movingRect.x-fixedRect1.x<fixedRect1.width/2+movingRect.width/2 && 
  fixedRect1.x-movingRect.x<fixedRect1.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect1.y<fixedRect1.height/2+movingRect.height/2 && 
  fixedRect1.y-movingRect.y<fixedRect1.height/2+movingRect.height/2)
  {movingRect.shapeColor="yellow";
  fixedRect1.shapeColor="yellow";

}
else{movingRect.shapeColor="green";
fixedRect1.shapeColor="green";

}




  drawSprites();
}
