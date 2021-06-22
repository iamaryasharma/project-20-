var bgImg;
var cat,cat1Img,cat2Img,cat3Img,cat4Img;
var mouse,mouse1Img,mouse2Img,mouse3Img,mouse4Img;

function preload() {
    //load the images here
    cat1Img=loadImage("images/cat1.png");
    cat2Img=loadImage("images/cat2.png");
    cat3Img=loadImage("images/cat3.png");
    cat4Img=loadImage("images/cat4.png");

    mouse1Img=loadImage("images/mouse1.png");
    mouse2Img=loadImage("images/mouse2.png");
    mouse3Img=loadImage("images/mouse3.png");
    mouse4Img=loadImage("images/mouse4.png");
    bgImg=loadImage("images/garden.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600);
    cat.addAnimation("catSleeping", cat1Img);
    cat.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation("mouseStanding", mouse1Img);
    mouse.scale=0.2;
    
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
   
     cat.velocityX=0;
     cat.addAnimation("catRunning",cat3Img);
     cat.sclae=0.2;
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseHappy",mouse1Img);
    mouse.changeAnimation("mouseHappy");
    mouse.scale=0.2;


    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode=== LEFT_ARROW){
     cat.velocityX=-10;
     cat.addAnimation("catRunning",cat2Img);
    
      mouse.addAnimation("mouseTeasing",mouse3Img);
      mouse.frameDelay=25;
      mouse.changeAnimation("mouseTeasing");
    }
}
