let img = [];
let index = 0;
let button1, button2;
function preload(){
 
  img[0] = loadImage("I82e0eMHBAA.jpg");
  img[1] =  loadImage("1FqdWjJaqQE.jpg");
  img[2] =  loadImage("andandand.jpg");
}
 
function setup(){
  createCanvas(400,400);
  button1 = createButton('<<');
  button1.position(200, 65);
  button1.mousePressed(Prev);
  button2 = createButton('>>');
  button2.position(250, 65);
  button2.mousePressed(Next);
}
 
function draw(){ 
  image(img[index],50,50,width,height);
}
 
function Prev(){
	if (index === 0){
		index = 2;
	}
	else{
		index = index +1;	
	}
}

function Next(){
	if (index === 2){
		index = 0;
	}
	else{
		index = index - 1;	
	}
}
