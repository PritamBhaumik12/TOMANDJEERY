var cat ,cat1,cat2,cat3,cat4;
var cat1Img,cat2Img,cat3Img,cat4Img; 
var mouse,mouse1,mouse2,mouse3,mouse4;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
var background1,backgroundImg;
var PLAY = 1;
var END = 0;
var gameState= PLAY;
function preload() {
    //load the images here
   
   cat_running=loadAnimation("cat2.png","cat3.png");
   
   mouse_happy = loadAnimation("mouse2.png","mouse3.png");


   cat1=loadImage("cat1.png");
    cat4=loadImage("cat4.png");
   
    background1=loadImage("garden.png");
   
    mouse1=loadImage("mouse1.png");
    mouse4=loadImage("mouse4.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(710,600,20,50);
    //cat.addImage("cat1",cat1);
    cat.addAnimation("running",cat_running);
    cat.scale=0.2;
    




    mouse=createSprite(200,600,20,50);
   // mouse.addImage("mouse1",mouse1);
    mouse.addAnimation("happy",mouse_happy);
    mouse.scale=0.09;


    

    
    



}

function draw() {

    background(background1);
    //Write condition here to evalute if tom and jerry collide
   
    if(cat.x-mouse.x<=mouse.width/2+cat.width/2) {
        cat.velocityX=0;
        cat.addImage(cat4);
        cat.scale=0.2
        mouse.addImage(mouse4);
        mouse.scale=0.09
        
   }
   

 

 
   
    drawSprites();


}
function keyPressed(){
   
    if(keyCode===LEFT_ARROW) {
        cat.velocityX=-3;
        cat.changeAnimation("running",cat_running)
        mouse.changeImage("happy",mouse_happy);
        
   }
    

}
