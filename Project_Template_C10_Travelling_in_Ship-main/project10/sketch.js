var seaimage,ship_moving
function preload(){
 seaimage=loadImage("sea.png")
 ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
 
}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaimage)
  sea.scale=0.5
 sea.velocityX = -4
 // sea=createSprite(0,0);
  //sea.addImage(seaimage)

  ship=createSprite(200,200);
  ship.addAnimation("moving",ship_moving)
  ship.scale=0.25
  
}



function draw() {
  background("blue");
 if (sea.x<0){
   sea.x=sea.width/8
 }


 drawSprites();
}