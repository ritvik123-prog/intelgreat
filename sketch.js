var fruit,fruit1,fruit2,fruit3,fruit4,fruit5,fruit6
var fruit7 ,bad,bad1,back,back1
var sword,sword1
var PLAY=1
var END=0
var gamestate=1
var playerscore=0;
function preload(){
  fruit=loadImage("fruit4.png")
 fruit1=loadImage("fruit3.png")
fruit3=loadImage("fruit1.png")
  fruit2=loadImage("fruit2.png")
  bad=loadImage("alien1.png")
  sword=loadImage("sword.png")
  back=loadImage("gameover.png")
  
}
function setup(){
  createCanvas(400,400)
fruit4 =new Group() 
  fruit5 =new Group() 
  fruit6 =new Group() 
  fruit7 =new Group() 
  sword1=createSprite(40,249)
  sword1.addImage(sword)
  sword1.scale=0.3
    back1=createSprite(0,0,1000,1000)
 back1.shapeColor="blue"
  back1.velocityY=2
   var fruit4 = createSprite(100,(Math.round(random(200, 350), 10, 10)));
     fruit4.addImage(fruit1)
  fruit4.scale=0.1

  var fruit5 = createSprite(120,(Math.round(random(50, 350),50, 10)));
    fruit5.addImage(fruit2)
   fruit5.scale=0.1
     var fruit7 = createSprite(120,(Math.round(random(50, 350), 10, 10)));
  fruit7.addImage(fruit)
  fruit7.scale=0.1
  var bad1=createSprite(120,(Math.round(random(50,350),10,10)));
  bad1.addImage(bad)
  bad1.scale=0.4

  
   }
function draw(){
sword1.y=World.mouseY
  sword1.x=World.mouseX;
 background("red")
background.velocityX=-7
  text(playerscore,200,20)

  createapple();
    createpear();
  createbanana();
  createorange();
  drawSprites()
 
}
function createapple(){
  if(World.FrameCount%80===0){
     
 
    fruit6.lifetime=100
    fruit6.velocityX=-7
     }
  }
function createpear(){
  if(World.FrameCount%80===0){
     
    fruit5.lifetime=100
     }
  }
function createbanana(){
    if(World.FrameCount%80===0){
    
 
    fruit4.lifetime=100
     } 
  }
function   createorange(){
  if(World.FrameCount%80===0){
 
    fruit7.addImage(fruit3)
    fruit7.lifetime=100
     } 
}