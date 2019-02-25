let cr = '#ffffff'

function setup() {
  createCanvas(710, 400);
  background(102);
}

function draw() {
  stroke(cr);
  
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
  if (keyCode === 48) {
   background(102);
  }
  if (keyCode === 49) {
   cr = 'blue';
	}	
  if (keyCode === 50) {
   cr = color('green');
	}
  if (keyCode === 51) {
   cr = color('yellow');
  }
		if (keyCode === 52) {
   cr = color('Fuchsia');
	}
  if (keyCode === 53) {
   cr = color('DarkGoldenRod');
	}
  if (keyCode === 54) {
   cr = color('GreenYellow');
	}
  if (keyCode === 55) {
   cr = color('#CC6600');
	}
  if (keyCode === 56) {
   cr = color('Lime');
 }
  if (keyCode === 57) {
   cr = 102;
 }
}
