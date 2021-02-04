var canvas;
var music;
var box
var surface1, surface2, surface3, surface4;
var invisible1, invisible2, invisible3, invisible4;

function preload(){

    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    
    surface1 = createSprite(100,590,180,20);
    surface1.shapeColor="blue";
    surface2 = createSprite(300,590,180,20);
    surface2.shapeColor="orange";
    surface3 = createSprite(500,590,180,20);
    surface3.shapeColor="pink";
    surface4 = createSprite(700,590,180,20);
    surface4.shapeColor="green";

    
    //invisible parts

    invisible1 = createSprite(0,605,2000,11);
    invisible2 = createSprite(0,-5,2000,11);
    invisible3 = createSprite(-1,0,1,2000);
    invisible4 = createSprite(799,0,1,2000);


    //create box sprite and give velocity

    box = createSprite(random(275,750),200,20,20);
    box.shapeColor="white";
    box.velocityX = -4;
    box.velocityY = 4;

}

function draw(){
    background("black")
    music.play();

    if(box.isTouching(surface1)){
        box.shapeColor="blue";

    }

    
    if(box.isTouching(surface2)){
        box.shapeColor="orange";
        box.velocityX = 0;
         box.velocityY = 0;
         music.stop();
    }

    if(box.isTouching(surface3)){
        box.shapeColor="pink";
    }

    if(box.isTouching(surface4)){
        box.shapeColor="green";
    }



    createEdgeSprites();
     box.bounceOff(surface1);
     box.bounceOff(surface2);
     box.bounceOff(surface3);
     box.bounceOff(surface4);
     box.bounceOff(invisible1);
     box.bounceOff(invisible2);
     box.bounceOff(invisible3);
     box.bounceOff(invisible4);


    drawSprites();
}