let penwidth = 1; //default
let pen = 1; //defalut:line
let r = 0,
  g = 0,
  b = 0; //color default:black
function drawRaindrop(penwidth,x,y)
{
  strokeWeight(penwidth);
  stroke(r,g,b);
  fill(r,g,b);
  ellipse(x,y,3 * penwidth,3 * penwidth);
  triangle(x-1.5*penwidth,y,x+1.5*penwidth,y,x,y-3 * penwidth);
}
function drawRainbow(penwidth, px, py, x, y) {
  strokeWeight(penwidth);
  stroke(255, 0, 0);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
  stroke(255, 128, 0);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
  stroke(255, 255, 0);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
  stroke(0, 255, 0);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
  stroke(0, 255, 255);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
  stroke(0, 64, 128);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
  stroke(128, 0, 128);
  line(px, py, x, y);
  py = py + penwidth;
  y = y + penwidth;
}

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  fill(0);
  stroke(0);
  strokeWeight(1);
  textSize(20);
  //area to select shapes
  noFill();
  rect(0, 20, 20, 20);
  rect(0, 40, 20, 20);
  rect(0, 60, 20, 20);
  rect(0, 80, 20, 20);
  rect(0, 100, 20, 20);
  rect(0, 120, 20, 20);
  fill(255, 0, 0); //red
  rect(0, 200, 20, 20);
  fill(255, 128, 0); //orange
  rect(0, 220, 20, 20);
  fill(255, 255, 0); //yellow
  rect(0, 240, 20, 20);
  fill(0, 255, 0); //green
  rect(0, 260, 20, 20);
  fill(0, 255, 255); //blue
  rect(0, 280, 20, 20);
  fill(0, 64, 128); //indigo
  rect(0, 300, 20, 20);
  fill(128, 0, 128); //purple
  rect(0, 320, 20, 20);
  fill(0); //purple
  rect(0, 340, 20, 20);

  noFill();
  rect(0, 530, 20, 20);
  rect(0, 550, 20, 20);
  rect(0, 570, 20, 20);
  stroke(r,g,b);
  fill(r,g,b);
  //shapes
  line(4, 24, 16, 36);
  ellipse(10, 50, 16, 12);
  rect(3, 64, 14, 12);
  fill(228, 160, 140);
  stroke(0);
  ellipse(10, 90, 12, 12);
  //TO DO//
  //RAIN
  drawRainbow(2, 4, 105, 16, 105);
  drawRaindrop(2,10,132);
  strokeWeight(1);
  //eara to select penwidth
  fill(0);
  stroke(0);
  ellipse(10, 540, 5, 5);
  ellipse(10, 560, 7.5, 7.5);
  ellipse(10, 580, 10, 10);


  if (mouseIsPressed) {
    var px = pmouseX,
      py = pmouseY,
      x = mouseX,
      y = mouseY;
    if (x < 20) {
      if (y > 530 && y < 550) penwidth = 1;
      else if (y > 550 && y < 570) penwidth = 3;
      else if (y > 570 && y < 590) penwidth = 5;
      else if (y > 20 && y < 40) pen = 1;
      else if (y > 40 && y < 60) pen = 2;
      else if (y > 60 && y < 80) pen = 3;
      else if (y > 80 && y < 100) pen = 4;
      else if (y > 100 && y < 120) pen = 5;
      else if (y > 120 && y< 140) pen = 6;
      //select color
      else if (y > 200 && y < 220) {
        r = 255;
        g = 0;
        b = 0; //red
      } else if (y > 220 && y < 240) {
        r = 255;
        g = 128;
        b = 0; //orange
      } else if (y > 240 && y < 260) {
        r = 255;
        g = 255;
        b = 0; //yellow
      } else if (y > 260 && y < 280) {
        r = 0;
        g = 255;
        b = 0; //green
      } else if (y > 280 && y < 300) {
        r = 0;
        g = 255;
        b = 255; //blue
      } else if (y > 300 && y < 320) {
        r = 0;
        g = 64;
        b = 128;
      } //indigo
      else if (y > 320 && y < 340) {
        r = 128;
        g = 0;
        b = 128;
      } //purple
      else if (y > 340 && y < 360) {
        r = 0;
        g = 0;
        b = 0;
      } //BLACK
    } else {//paint
      if (pen == 1) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        line(px, py, x, y);
      } else if (pen == 2) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        fill(r, g, b)
        ellipse(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 3) {
        strokeWeight(penwidth);
        stroke(r, g, b);
        fill(r, g, b)
        rect(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 4) {
        noStroke();
        fill(255);
        ellipse(x, y, 3 * penwidth, 3 * penwidth);
      } else if (pen == 5)
        drawRainbow(penwidth, px, py, x, y);
      else if (pen == 6)
        drawRaindrop(penwidth,x,y);
      
    }
  }
  //use esc to empty canvas
  if (keyIsPressed)
    if (keyCode == ESCAPE) {
      background(255);
    }
}
