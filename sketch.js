var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;

var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg;

var redBubbleGroup, redBubbleGroup, bulletGroup;
var bow

var life =3;
var score=0;
var gameState=1
//preload any image that you want to 
function preload(){
  gunImg = loadImage("gun1.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
  bowImg= loadImage("angelbow.png")
  arrowImg= loadImage("arrow1.png")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2
  
  bow= createSprite(100, height/2, 50,50);
  bow.addImage(bowImg)
  bow.scale=0.2

  bulletGroup = createGroup();
  arrowGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

}
if(keyIsDown("w")){
 bow.y===bow.y+1
}
if(keyIsDown("s")){
  bow.y===bow.y-1
 }
gun.y=mouseY 
    if (frameCount % 80 === 0) {
      drawblueBubble();
    }
    if (frameCount % 100 === 0) {
      drawredBubble();
    }
    if(keyDown("space")){
      shootBullet();
    }
    if(keyDown("shift")){
      shootArrow();
    }
    if (blueBubbleGroup.collide(backBoard)){
      handleGameover(blueBubbleGroup);
    }
    if (redBubbleGroup.collide(backBoard)) {
      handleGameover(redBubbleGroup);
    }
    /*if(blueBubbleGroup.(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }*/

    /*if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision();
    }*/
    
    /*if(blueBubbleGroup.collide()){
      handleBubbleCollision(blueBubbleGroup);
    }*/
    
    if(blueBubbleGroup.collide(bulletGroup)){
      handleBubbleCollision(blueBubbleGroup);
    }
    if(redBubbleGroup.collide(arrowGroup)){
      handleBubbleCollision(redBubbleGroup);
    }
    drawSprites();
  
    
  


function drawblueBubble(){
  bluebubble = createSprite(800,random(20,780),40,40);
  bluebubble.addImage(blueBubbleImg);
  bluebubble.scale = 0.1;
  bluebubble.velocityX = -8;
  bluebubble.lifetime = 400;
  blueBubbleGroup.add(bluebubble);
}
function drawredBubble(){
  redbubble = createSprite(800,random(20,780),40,40);
  redbubble.addImage(redBubbleImg);
  redbubble.scale = 0.1;
  redbubble.velocityX = -8;
  redbubble.lifetime = 400;
  redBubbleGroup.add(redbubble);
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= gun.y-20
  bullet.addImage(bulletImg)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}


function shootArrow(){
  arrow1= createSprite(150, width/2, 50,20)
  arrow1.y= bow.y-20
  arrow1.addImage(arrowImg)
  arrow1.scale=0.12
  arrow1.velocityX= 8
  arrowGroup.add(arrow1)
}

function handleBubbleCollision(bubbleGroup){
    if (life > 0) {
       score=score+1;
    }

 arrowGroup.destroyEach()
    arrowGroup.destroyEach()
    bubbleGroup.destroyEach()
}

function handleGameover(bubbleGroup){
  
    life=life-1;
    bubbleGroup.destroyEach();

     /*life=life+1;
    bubbleGroup.destroyEach();*/

     /*life=life-1;
    bubbleGroup.destroy();*/

     /*life=life-1;
    bubble.destroyEach();*/
    

    if (life === 0) {
      gameState=2
      
     
    }
  
}