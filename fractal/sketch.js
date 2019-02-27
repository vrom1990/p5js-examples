let cotes, position;
let ra,divis;
let x,y,tx,ty;


function setup() {
	createCanvas(windowWidth,windowHeight);
	cotes=300;
	divis = -3;
	var ra=-800;	
	position = createVector(ra,ra);
	smooth();
	tx=0;
	ty=1000;
	tw = 0;
}

function draw() {
	background("#343838");
	
	translate(width/2,height/2);
	
	//random walk
	x = map(noise(tx),0,1,-width*2,width*2);
	y = map(noise(ty),0,1,-height*2,height*2);
	
	scale(0.4,0.4);
	noFill();//fill(255,167,78,10);
	
	

	tx += 0.01;
	ty += 0.01;
	tw += 0.01;
	

	
// visible random walker
//	fill(255);
//	ellipse(x,y,10,10);
//	stroke(255);
//	line(-width*4,y,width*4,y);
//	line(x,-height*4,x,height*4);
	
	noFill();
	for(var i=0; i < cotes; i++){
		var p1 = cos(i*(TWO_PI/cotes))*position.x/2; 
		var p2 = sin(i*(TWO_PI/cotes))*position.x/2;
		var p3 = cos((i+1)*(TWO_PI/cotes))*position.x/4;
		var p4 = sin((i+1)*(TWO_PI/cotes))*position.x/4;
		rotate(PI/divis);
		//blendMode(ADD);
		stroke(0,95,107);
		curve(map(y,0,width,-6000,6000),p1,-width/2,map(y,0,height,-height/2,height/2),width/2,p4,width,map(x,0,height,-4000,4000));
		curve(map(p1,0,width,-6000,6000),x,-width/2,map(x,0,height,-height/2,height/2),width/2,p3,width,map(y,0,height,-4000,4000));		
		stroke(0,223,252);
		curve(x,map(p1,0,width,-200,6000),-width/2,map(x,0,height,-height/2,height/2),width/2,p2,width,map(y,0,height,-20,20));
		blendMode(BLEND);

  }
	
}
