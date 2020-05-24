var cari,carii;

function setup (){
createCanavas(1200,800);
cari = createSprite(600,400,50,50);
carii = createSprite(800,400,50,50);
cari.shapeColor = "red";
carii.shapeColor = "red";
}

function draw () {

background(0,0,0);

  movingRect.velocityX = -5;
  fixedRect.velocityY = +5;

 if(isTouching(carii,cari)){

cari.shapeColor = "green";
carii.shapeColor = "green";
 }
drawSprites();
}
