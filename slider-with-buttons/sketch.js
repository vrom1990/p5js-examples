let img = [];
let txt = [];
var index = 0;

 
function preload(){
 	OpenSans = loadFont('opensans.ttf');
  img[0] = loadImage("I82e0eMHBAA.jpg");
  img[1] = loadImage("1FqdWjJaqQE.jpg");
	img[2] = loadImage("andandand.jpg");
	txt[0] = "Слайд 1";
	txt[1] = "Слайд 2";
	txt[2] = "Слайд 3";
}
 
function setup(){
  createCanvas(400,400);
	button1 = createButton('<<');
  button1.position(200, 420);
  button1.mousePressed(Prev);
	button2 = createButton('>>');
  button2.position(250, 420);
  button2.mousePressed(Next);
	textSize(12);
	textFont(OpenSans);
	textAlign(CENTER);
}
 
function draw(){ 
background(255);
  image(img[index],0,0,width-50,height-50);
	fill(0);
  text(txt[index], 200, 375);
}
 
function Prev(){
	if (index === 0){
		index = 2;
	}
	else{
		index = index - 1;	
	}
}

function Next(){
	if (index === 2){
		index = 0;
	}
	else{
		index = index + 1;	
	}
}
