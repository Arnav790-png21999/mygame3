
var soldiersaluting,soldiersalutingimg;
var batman,batmanimg;
var background1,background1img;
var dialouge1,dialouge1img;
var dialouge2,dialouge2img;
var dialouge3,dialouge3img;
var pressStart,pressStartimg;
var newSoldier,newSoldierimg;
var Junglebackground,Junglebackgroundimg;
var enemies,enemiesimg;


function preload(){
soldiersaluting=loadImage("Soldiersaluting.png")
batman=loadImage("Batman.png");
background1=loadImage("Background.png");
dialouge1=loadImage("Dialouges/batdialouge.png");
dialouge2=loadImage("Dialouges/batdialouge1.png");
dialouge3=loadImage("Dialouges/Soldierdialouge.png");
pressStart=loadImage("Pressspace.png");
Junglebackground=loadImage("newJungle.jpg");
newSoldier=loadImage("Soldier.png");
enemies=loadImage("enemies.png");
}



function setup() {
  createCanvas(1000,1000);
 // engine=Engine.create();
 // world=engine.world;

 
 background1img=createSprite(500,400);
 background1img.addImage(background1);
 background1img.scale=2;
 

 soldiersalutingimg=createSprite(300,300);
  soldiersalutingimg.addImage(soldiersaluting);
  soldiersalutingimg.scale=0.3;

  batmanimg=createSprite(550,300);
  batmanimg.addImage(batman);
batmanimg.scale=0.2;

dialouge1img=createSprite(600,150);
dialouge1img.addImage(dialouge1);
dialouge1img.scale=0.25;
dialouge1img.lifetime=200;


}

function draw() {

  background("white");
 // Engine.update(engine); 

//if(Junglebackgroundimg.x<0){
//Junglebackgroundimg.x=Junglebackgroundimg.width/2;

//}
spawnEnemies();


 if(keyDown("A")){
  dialouge2img=createSprite(600,150);
dialouge2img.addImage(dialouge2);
dialouge2img.scale=0.25;
dialouge2img.lifetime=90;

  dialouge3img=createSprite(340,130);
  dialouge3img.addImage(dialouge3);
  dialouge3img.scale=0.25;

  pressStartimg=createSprite(400,700);
  pressStartimg.addImage(pressStart);
  pressStartimg.scale=1;


}


if(keyDown("space")){
Junglebackgroundimg=createSprite(500,400)
Junglebackgroundimg.addImage(Junglebackground);
Junglebackground.velocityX=-7;

newSoldierimg=createSprite(300,500);
newSoldierimg.addImage(newSoldier);
newSoldierimg.scale=0.3;




  dialouge2img.destroy();
  pressStartimg.destroy();
  dialouge3img.destroy();
  dialouge1img.destroy();
  batmanimg.destroy();
  background1img.destroy();
  soldiersalutingimg.destroy();

  drawSprites();


}
}
function spawnEnemies() {
 
  if (frameCount % 60 === 0) {
     Enemies= createSprite(600,100,40,10);
     Enemies.y = Math.round(random(10,60));
     Enemies.addImage(enemies);
     Enemies.scale = 0.5;
     Enemies.velocityX = -3;
    
     //Enemies.lifetime = 134;
    


   //cloudsGroup.add(cloud);
    }}
