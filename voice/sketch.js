var mic, fft;    //micphone input and the fft analysis

var E =[];       //variable 'E' is the collection of all the dots
var b = 0;       //the rotation angle of all the dots
var Lr = 0;      //the color of the center lines
var m = false;   //if there is any sound above threshold 'm' is true, otherwise it is false
var l = 0;       //dots' color changing possibility, which is decided by the sound level
function setup() {
   createCanvas(windowWidth,windowHeight);
   st =millis();
   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
	for(var i =0; i<12; i++){  //create the dots
		 var a = TWO_PI/12;
		 E[i] = new Elps(cos(a*i)*height*0.3,sin(a*i)*height*0.3);
  }
	
}

function draw() {
   background(0);
	 noStroke();
   var spectrum = fft.analyze();  //get sound input spectrum values
    
	if(spectrum[20]>2){  //use the 20nd spectrum value to evaluate the sound input
     b += map(spectrum[20],1,50,0.001,0.02);
		 l = map(spectrum[20],1,50,0.005,0.1);
		 m = true;
  }else{
	   m = false;	
	}
	for(var i=0;i<E.length;i++){  //show all the dots
   E[i].display();
	}
	
   
	 noFill();
	 strokeWeight(4);
	if(spectrum[20]>10){  //if the 20nd spectrum value big enough, change the center line color
	  Lr=color(random(255),random(255),random(255));
	}
	 stroke(Lr);
   beginShape();
   for (i = 0; i<spectrum.length-800; i++) {   //draw the part of the spectrum value, because the last 800 value change too small
    vertex(i+width*0.4, map(spectrum[i], 0, 255, height*0.55, height*0.3) );
   }
   endShape();
}

function Elps(_x,_y){  //the colorful dot class
	this.x = _x;
	this.y = _y;
	this.r;
	this.g;
	this.b;
	
	this.display = function(){
			if(random(1)<l & m){   //if there is any sound and random(1) smaller than the new possibility value 'l'
			this.r=random(255);    //change the color randomly
			this.g=random(255);
		  this.b=random(255);
			}
		 fill(this.r,this.g,this.b);
		push(); 
	  translate(width*0.48, height*0.5);
	  rotate(b);
		ellipse(this.x,this.y,50,50);  //draw the dot
	  pop();
	   
	}
}
