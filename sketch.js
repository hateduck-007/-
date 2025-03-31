let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let state=0;
function preload(){
  img1=loadImage('01_NavBar.png')
  img2=loadImage('02_AdBanner.png')
  img3=loadImage('03_Product.png')
  img4=loadImage('04_GNB.png')
  img5=loadImage('05_ai_icon.png')
  img6=loadImage('06_green.png')
}

function setup() {
  createCanvas(394,852);
}
function mouseClicked(){
  if(mouseX>=320 && mouseX<=380){
    if(mouseY>=688 && mouseY<=748){
      if(state==0){
        state=1;
      }else if(state==1){
        state=0;
      }
    }
  }
}

function draw() {
  background(225);

  
  if(state==0){
     image(img1,0,0,393,128);
  image(img2,0,128,393,284);
  image(img3,0,412,393,440);
  image(img4,0,724,393,104);
  image(img5,320,688,60,60);
  image(img2,0,128,393,284);
  } else if(state==1){//ai 대화모드
  image(img1,0,0,393,128);
  image(img2,0,128,393,284);
  image(img3,0,412,393,440);
  image(img4,0,724,393,104);
  image(img5,320,688,60,60);
  image(img6,0,612,393,152);
  }
}
