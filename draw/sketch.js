let color = 255;

function setup() {
  createCanvas(710, 400);
  background(102);
}

function draw() {
  stroke(color);
  
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {
  if (keyCode === 49) {
   color = #FF0000;
  }
 if (keyCode === 49) {
  color = #0000FF;
 }  
}
