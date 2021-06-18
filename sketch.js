var canvas, bg;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;
function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    garden=createSprite(500,400);
   

    //create tom and jerry sprites here
    mouse=createSprite(80,100);
    mouse.scale=0.3;
    mouse.addAnimation(mouseImg1)
    cat=createSprite(100,100);
    cat.scale=0.3;
    cat.addAnimation(catImg2);

   
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    
     if(tom.x - jerry.x < (tom.width - jerry.width)/2)
     { 
         tom.velocityX=0;
         tom.addAnimation("tomLastImage", tomImg3);
         tom.x =300;
         tom.scale=0.2;
         tom.changeAnimation("tomLastImage");
         jerry.addAnimation("jerryLastImage", jerryImg3);
         jerry.scale=0.15;
         jerry.changeAnimation("jerryLastImage");
     }  
 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }

}
