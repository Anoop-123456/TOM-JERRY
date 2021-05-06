var cat,catImage,catRunningImage,catImage2;
var mouse,mouseImage,mouseTeasingImage,mouseImage2;
var garden,gardenImage;
    
function preload(){

catImage=loadAnimation("images/cat1.png");
catRunningImage=loadAnimation("images/cat2.png","images/cat3.png");
catImage2=loadAnimation("images/cat4.png");

mouseImage=loadAnimation("images/mouse1.png");
mouseTeasingImage=loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImage2=loadAnimation("images/mouse4.png");

gardenImage=loadImage("images/garden.png");

}

function setup() {

 //Load canvas of sides 500 
createCanvas(1000,800);
  
//Create an animated cat
cat=createSprite(850,600);
cat.addAnimation("catSitting",catImage);
cat.scale=0.2;
 
//Create an animated mouse
mouse=createSprite(200,600)
mouse.addAnimation("mouseStanding",mouseImage);
mouse.scale=0.2
}

function draw() {

//Load background 
background(gardenImage);
  
if (cat.x-mouse.x < (cat.width-mouse.width)/2){
cat.velocityX=0;
cat.x=275;
cat.addAnimation("cat final img",catImage2);
cat.changeAnimation("cat final img");
 
mouse.addAnimation("mouse last Img",mouseImage2);
mouse.changeAnimation("mouse last Img");

}

//keyPressed();

drawSprites()
}

function keyPressed(){
if (keyCode===LEFT_ARROW){
cat.velocityX=-4;  
cat.addAnimation("catrunning",catRunningImage);
cat.changeAnimation("catrunning");

mouse.addAnimation("mouse teasing",mouseTeasingImage);
mouse.changeAnimation("mouse teasing");
}
}