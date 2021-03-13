var bg;
var greensprite,redsprite,yellowsprite,bluesprite;
var edges;



function setup(){
    createCanvas(400,400);
 bg=createSprite(200,200,400,400);
 bg.shapeColor="black"
 bg.scale=3

 

  greensprite = createSprite(50,350,100, 20);
  greensprite.shapeColor="green"

  redsprite = createSprite(150, 350, 100, 20);
  redsprite.shapeColor="red"

  yellowsprite = createSprite(250, 350,100, 20);
  yellowsprite.shapeColor="yellow"

  bluesprite = createSprite(350, 350,100, 20);
  bluesprite.shapeColor="blue"


  
  
 bouncingsprite=createSprite(200,200,15,15);
  bouncingsprite.shapeColor="white"
  bouncingsprite.velocityX=4;
 bouncingsprite.velocityY=3;

  
  
}

function draw() {

    background(255);
    
    if(greensprite.isTouching(bouncingsprite) && bouncingsprite.bounceoff(greensprite)){
      bouncingsprite.shapeColor="green"
    }
    if(redsprite.isTouching(bouncingsprite) && bouncingsprite.bounceoff(redsprite)){
      
      bouncingsprite.shapeColor="red"
      bouncingsprite.velocityX=0;
      bouncingsprite.velocityY=0;
    }
    if(yellowsprite.isTouching(bouncingsprite) && bouncingsprite.bounceoff(yellowsprite)){
    
      bouncingsprite.shapeColor="yellow"
    }
    if(bluesprite.isTouching(bouncingsprite) && bouncingsprite.bounceoff(bluesprite)){
      bouncingsprite.shapeColor="blue"
    }

    edges=createEdgeSprites();
    bouncingsprite.bounceOff(edges);
  drawSprites();
}
