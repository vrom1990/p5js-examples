var img;
var cream;
var black;
var iced;
var frozen;
var hot;
var hotcup;
var creamcup;
var icedcup;
var frozencup;
var blackcup;
var data=[
  { cream: 5,
    black: 1,
    iced:1,
    frozen:3,
    hot:2,
    quantity: 1, 
    people: 5 },
    
  { cream: 5,
    black: 2,
    iced: 1,
    frozen: 0,
    hot: 6, 
    quantity: 2,
    people: 7 },
  
  { cream: 4,
    black: 2,
    iced: 1,
    frozen: 3,
    hot: 2,
    quantity: 3,
    people: 5},
    
  { cream: 6,
    black: 1,
    iced: 2,
    frozen: 1,
    hot: 4,
    quantity: 4,
    people: 7 },
    
  { cream: 4,
    black: 4,
    iced: 2,
    frozen: 0,
    hot: 6,
    quantity: 5,
    people: 8 },
    
  { cream: 7,
    black: 2,
    iced: 2,
    frozen: 1,
    hot: 6,
    quantity: 6,
    people: 9 },
    
  { cream: 12,
    black: 4,
    iced: 4,
    frozen: 0,
    hot: 12,
    quantity: 7,
    people: 16 },
    
  { cream: 3,
    black: 1,
    iced: 0,
    frozen: 1,
    hot: 3,
    quantity: 8,
    people: 4 },
  
  { cream: 5,
    black: 0,
    iced: 0,
    frozen: 1,
    hot: 4,
    quantity: 9,
    people: 5 },
    
  { cream: 12,
    black: 2,
    iced: 4,
    frozen: 0,
    hot: 10,
    quantity: 10,
    people: 14 }
];

function preload(){
	hotcup = loadImage("hotcup2.png");	
	creamcup = loadImage("creamcup.png");
	icedcup = loadImage("icedcup.png");
  blackcup =loadImage("blackcup.png");
  frozencup = loadImage("frozencup.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  cream = color(254, 254, 207);
  black = color(84, 55, 12);
  iced = color(12, 138, 219);
  frozen = color(159, 105, 42);
  hot = color(0, 0, 0);
}

function drawFrame(){
	push();
	stroke(0);
	strokeWeight(1);
	fill(255);
	rect( 230, 40, 380, 50 );
	pop();
}

		
function draw() {
  background(255);
  cupline(height-110);
  cupnum (height-110);
  pplline(70);
  pplnum (70);
  
  noStroke();
	push();
	textAlign(LEFT, CENTER);
	text("N\nU\nM\nB\nE\nR", 20, 180);
	text("O\nF", 20, 270);
	text("P\nE\nO\nP\nL\nE", 20, 370);
	pop();
  text("Количество чашек в неделю", windowWidth/2, windowHeight-30);

  
  stroke(0);
  strokeWeight(1);
  fill(cream);
  rect(windowWidth-200, 20, 20, 20);
  fill(black);
  rect(windowWidth-200, 50, 20, 20);
  fill(iced);
  rect(windowWidth-200, 80, 20, 20);
  fill(frozen);
  rect(windowWidth-200, 110, 20, 20);
  fill(hot);
  rect(windowWidth-200, 140, 20, 20);
  
  //key
  noStroke();
  fill(0);
  text("= Сливки", windowWidth-170, 35);
  text("= Чёрный", windowWidth-170, 65);
  text("= Охлаждённый", windowWidth-170, 95);
  text("= Мороженное", windowWidth-170, 125);
  text("= Горячий", windowWidth-170, 155);
  
  noStroke();
  for(var i=0;i<data.length; i++){
  fill(cream);
  var creamht = height-90-(data[i].cream*50);
  rect(140+i*80, creamht, 30, data[i].cream*50);
  fill(black);
  rect(140+i*80, creamht-data[i].black*50, 30, data[i].black*50);
  var icedht = height-90-(data[i].iced*50);
  fill(iced);
  rect(170+i*80, icedht, 30, (data[i].iced*50));
  fill(frozen);
  rect(170+i*80, icedht-data[i].frozen*50, 30, data[i].frozen*50)
  fill(hot);
  rect(170+i*80, icedht-data[i].frozen*50-data[i].hot*50, 30, data[i].hot*50);
  }
  
	textSize (15);

  
  if( red(cream) == red(get( mouseX, mouseY)) ){
		 for(var i = 140, k=0; i< 900; i+=80, k++){
     	 if( mouseX>i && mouseX< i+60) {	
				 		drawFrame();
				  	image( creamcup, 130, 25);
			 			text(data[k].cream +" людей добавляли сливки в кофе "+ (k+1) + " раз в неделю", 250, 65 );
			 }
		 }
  }
  else  if( red(black) == red(get( mouseX, mouseY)) ){
		 for(var i = 140, k=0; i< 900; i+=80, k++){
     	 if( mouseX>i && mouseX< i+60) {
				 		drawFrame();
				 		image( blackcup, 130, 25);
			 			text(data[k].black +" люди пили чёрный кофе "+ (k+1) + " ", 250, 65 );
			 }
		 }
  }
  else  if( red(iced) == red(get( mouseX, mouseY)) ){
     for(var i = 140, k=0; i< 900; i+=80, k++){
     	 if( mouseX>i && mouseX< i+60) {
				 		drawFrame();
				 		image(icedcup, 140, 10);
			 			text(data[k].iced +" люди пили охлаждённый кофе "+ (k+1) + " раз в неделю", 250, 65 );
			 }
		 }
  }
  else  if( red(frozen) == red(get( mouseX, mouseY)) ){
     for(var i = 140, k=0; i< 900; i+=80, k++){
     	 if( mouseX>i && mouseX< i+60) {
				 		drawFrame();
				 		image(frozencup, 140, 10);
			 			text(data[k].frozen +" людей добавляли мороженное "+ (k+1) + " раз в неделю", 250, 65 );
			 }
		 }
  }
  else  if( red(hot) == red(get( mouseX, mouseY)) ){
     for(var i = 140, k=0; i< 900; i+=80, k++){
     	 if( mouseX>i && mouseX< i+60) {
				 		drawFrame();
				 		image(hotcup, 130, 0);
			 			text(data[k].hot +" людей пили кофе горячим "+ (k+1) + " раз в неделю", 250, 65 );
			 }
		 }
  }
}


function cupline (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var x = 90; x < windowWidth; x += 80){
    line(x, ypos, x, ypos+40);
  }
}

function cupnum (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = 90, n=0; y < windowWidth; y += 80, n++){
    strokeWeight(4);
    line(y, ypos, y, ypos+40);
    noStroke();
    text(n.toString(), y, ypos+60);
  }
}

function pplline (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = windowHeight-90; y > 0; y -= 50){
    line(ypos, y, ypos+40, y);
  }
}

function pplnum (ypos) {
  stroke(0);
  strokeWeight(4);
  for( var y = windowHeight-90, n=0; y > 0; y -= 50, n++){
    strokeWeight(4);
    line(ypos, y, ypos+40, y);
    noStroke();
    text(n.toString(), ypos-20, y);
  }
}
