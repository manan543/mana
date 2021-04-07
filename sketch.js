var bgImg;
var cat;

function preload() {
    //load the images here
    bgImg=loadImage("add image url here");
    catImg1=loadImage("image/cat1.png");
    mouseImg1=loadImage("image/mouse1.png");
    catImg2=loadImage("add cat2 and cat3 url here");
    mouseImg2=loadImage("add mouse2 and mouse3 url here");
    

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("add image variable here");
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){

//write code here to change animation
    }
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here

if(KeyCode===RIGHT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2);
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay =25;
}

if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouseTeasing",mouseImg2)
mouse.changeAnimation("mouseTeasing")
mouse.frameDelay=25;
}

cat.addAnimation("catRunning",catImg2)
cat.changeAnimation("catRunning")


}
