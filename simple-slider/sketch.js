var img = [];
var index = 0;
 
function preload(){
 
  img[0] = loadImage("I82e0eMHBAA.jpg");
  img[1] =  loadImage("1FqdWjJaqQE.jpg");
}
 
function setup(){
  createCanvas(400,400); 
}
 
function draw(){ 
  image(img[index],50,50,width,height);
}
 
function mouseReleased(){
 
    //ONLY if click registered inside image
    if(mouseX>50 && mouseY>50){
          index = index + 1;
          if (index == img.length){
              index = index - img.length;
          }
    }          
}
