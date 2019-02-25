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
   color = red;
  }
 if (keyCode === 49) {
  color = blue;
 }  
}
