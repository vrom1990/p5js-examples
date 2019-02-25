String input = "";

float input1 = 0;
float input2 = 0;

boolean plus = false;
boolean minus = false;

int operator = 0;

PImage buugel;

void setup() {
  buugel = loadImage("http://i.imgur.com/46OAg86.jpg");
  background(255);
  size(750, 850);
  fill(69, 75, 79);
  noStroke();
  rect(0, height/4, width, height);
  fill(84, 121, 128);
  rect(width-width/3, height/4, width, height);
  fill(69, 173, 168);
  rect(width-width/9, 0, height, width+width);
  noStroke();
  textSize(110);
  frameRate(60);
  fill(255);
  text("1", 30, height/4+20, width, height);
  text("2", 30+175, height/4+20, width, height);
  text("3", 30+175*2, height/4+20, width, height);
  text("+", 30+175*3, height/4+20, width, height);

  text("4", 30, height/4+20 + 150, width, height);
  text("5", 30+175, height/4+20 + 150, width, height);
  text("6", 30+175*2, height/4+20 + 150, width, height);
  text("-", 30+175*3, height/4+20 + 150, width, height);

  text("7", 30, height/4+20 + 150*2, width, height);
  text("8", 30+175, height/4+20 + 150*2, width, height);
  text("9", 30+175*2, height/4+20 + 150*2, width, height);
  text("x", 30+175*3, height/4+20 + 150*2, width, height);

  text("C", 30, height/4+20 + 150*3, width, height);
  text("0", 30+175, height/4+20 + 150*3, width, height);
  text("=", 30+175*2, height/4+20 + 150*3, width, height);
  text("/", 30+175*3, height/4+20 + 150*3, width, height);
}

void draw() {
  fill(0);
  text(input, 30, 150);
  fill(69, 173, 168);
  rect(width-width/9, 0, height, width+width);
}

void mousePressed() {
  // rad 1
  if (mouseX >= 0 && mouseX <= 0+150 && mouseY >= height/4 && mouseY<= height/4+150 ) {
    input = input + 1;
    fill(130);
    text("1", 30, height/4+20, width, height);
  } else if (mouseX >= 0+150 && mouseX <= 0+150+150 && mouseY >= height/4 && mouseY<= height/4+150) {
    input = input +2;
    fill(130);
    text("2", 30+175, height/4+20, width, height);
  } else if (mouseX >= 0+150+150 && mouseX <= 0+150+150+150 && mouseY >= height/4 && mouseY<= height/4+150) {
    input = input +3;
    fill(130);
    text("3", 30+175*2, height/4+20, width, height);
  } else if (mouseX >= 0+150+150+150 && mouseX <= 0+150+150+150+150+50 && mouseY >= height/4 && mouseY<= height/4+150) {
    println("+");
    input1 = parseInt(input);
    input = "";
    input = input + "+";
    operator = 1;
    fill(130);
    text("+", 30+175*3, height/4+20, width, height);
    fill(255);
    rect(0, 0, 667, 212);
    // rad 2
  } else if (mouseX >= 0 && mouseX <= 0+150 && mouseY >= height/4+150 && mouseY<= height/4+150+150 ) {
    input = input +4;
    fill(130);
    text("4", 30, height/4+20 + 150, width, height);
  } else if (mouseX >= 0+150 && mouseX <= 0+150+150 && mouseY >= height/4+150 && mouseY<= height/4+150+150 ) {
    input = input +5;
    fill(130);
    text("5", 30+175, height/4+20 + 150, width, height);
  } else if (mouseX >= 0+150+150 && mouseX <= 0+150+150+150 && mouseY >= height/4+150 && mouseY<= height/4+150+150 ) {
    input = input +6;
    fill(130);
    text("6", 30+175*2, height/4+20 + 150, width, height);
  } else if (mouseX >= 0+150+150+150 && mouseX <= 0+150+150+150+150+50 && mouseY >= height/4+150 && mouseY<= height/4+150+150 ) {
    println("-");
    input1 = parseInt(input);
    input = "";
    fill(255);
    rect(0, 0, 667, 212);
    input = input + "-";
    operator = 2;
    fill(130);
    text("-", 30+175*3, height/4+20 + 150, width, height);

    //rad 3
  } else if (mouseX >= 0 && mouseX <= 0+150 && mouseY >= height/4+150+150 && mouseY<= height/4+150+150+150 ) {
    input = input +7;
    fill(130);
    text("7", 30, height/4+20 + 150*2, width, height);
  } else if (mouseX >= 0+150 && mouseX <= 0+150+150 && mouseY >= height/4+150+150 && mouseY<= height/4+150+150+150 ) {
    input = input +8;
    fill(130);
    text("8", 30+175, height/4+20 + 150*2, width, height);
  } else if (mouseX >= 0+150+150 && mouseX <= 0+150+150+150 && mouseY >= height/4+150+150 && mouseY<= height/4+150+150+150 ) {
    input = input +9;
    fill(130);
    text("9", 30+175*2, height/4+20 + 150*2, width, height);
  } else if (mouseX >= 0+150+150+150 && mouseX <= 0+150+150+150+150+50 && mouseY >= height/4+150+150 && mouseY<= height/4+150+150+150 ) {
    println("x");
    input1 = parseInt(input);
    input = "";
    fill(255);
    rect(0, 0, 667, 212);
    input = input + "";
    operator = 3;
    fill(130);
    text("x", 30+175*3, height/4+20 + 150*2, width, height);

    //rad 4
  } else if (mouseX >= 0 && mouseX <= 0+150 && mouseY >= height/4+150+150+150 && mouseY<= height/4+150+150+150+150 ) {
    println("C");
    input = "";
    input1 = 0;
    input2 = 0;
    operator = 0;
    fill(255);
    rect(0, 0, 665, 200);
    fill(130);
    text("C", 30, height/4+20 + 150*3, width, height);
  } else if (mouseX >= 0+150 && mouseX <= 0+150+150 && mouseY >= height/4+150+150+150 && mouseY<= height/4+150+150+150+150 ) {
    input = input +0;
    fill(130);
    text("0", 30+175, height/4+20 + 150*3, width, height);
  } else if (mouseX >= 0+150+150 && mouseX <= 0+150+150+150 && mouseY >= height/4+150+150+150 && mouseY<= height/4+150+150+150+150 ) {
    println("=");
    input2 = parseInt(input);
    input = input + "=";
    fill(130);
    text("=", 30+175*2, height/4+20 + 150*3, width, height);
    fill(255);
    rect(0, 0, 667, 212);
    fill(0);

    if (operator == 1) {
      text(nf(input1 + input2), 30, 150);
      operator = 0;
    } else if (operator == 2) {
      text(nf(input1 + input2), 30, 150);
    } else if (operator == 3) {
      text(nf(input1 * input2), 30, 150);
    } else if (operator == 4) {
      text(nf(input1 / input2), 30, 150);
      if (input2 == 0)
        image(buugel, 0, 0, 667, 212);
    }
    input = "";
    input1 = 0;
    input2 = 0;
    operator = 0;
  } else if (mouseX >= 0+150+150+150 && mouseX <= 0+150+150+150+150+50 && mouseY >= height/4+150+150+150 && mouseY<= height/4+150+150+150+150 ) {
    text("/", 30+175*3, height/4+20 + 150*3, width, height);
    input1 = parseInt(input);
    input = "";
    fill(255);
    rect(0, 0, 667, 212);
    input = input + "";
    operator = 4;
    fill(130);
    text("/", 30+175*3, height/4+20 + 150*3, width, height);
  }
  println(input);
}

void mouseReleased() {
  fill(255);
  text("1", 30, height/4+20, width, height);
  text("2", 30+175, height/4+20, width, height);
  text("3", 30+175*2, height/4+20, width, height);
  text("+", 30+175*3, height/4+20, width, height);

  text("4", 30, height/4+20 + 150, width, height);
  text("5", 30+175, height/4+20 + 150, width, height);
  text("6", 30+175*2, height/4+20 + 150, width, height);
  text("-", 30+175*3, height/4+20 + 150, width, height);

  text("7", 30, height/4+20 + 150*2, width, height);
  text("8", 30+175, height/4+20 + 150*2, width, height);
  text("9", 30+175*2, height/4+20 + 150*2, width, height);
  text("x", 30+175*3, height/4+20 + 150*2, width, height);

  text("C", 30, height/4+20 + 150*3, width, height);
  text("0", 30+175, height/4+20 + 150*3, width, height);
  text("=", 30+175*2, height/4+20 + 150*3, width, height);
  text("/", 30+175*3, height/4+20 + 150*3, width, height);
}

void keyPressed() {
  fill(130);
  if (key == '1') {
    input = input + 1;
    text("1", 30, height/4+20, width, height);
  }
  if (key == '2') {
    input = input +2;
    text("2", 30+175, height/4+20, width, height);
  }
  if (key == '3') {
    input = input +3;
    text("3", 30+175*2, height/4+20, width, height);
  }
  if (key == '+') {
    input1 = parseInt(input);
    input = "";
    input = input + "+";
    operator = 1;
    text("+", 30+175*3, height/4+20, width, height);
    fill(255);
    rect(0, 0, 667, 212);
  }
  if (key == '4') {
    input = input +4;
    text("4", 30, height/4+20 + 150, width, height);
  }
  if (key == '5') {
    input = input +5;
    text("5", 30+175, height/4+20 + 150, width, height);
  }
  if (key == '6') {
    input = input +6;
    text("6", 30+175*2, height/4+20 + 150, width, height);
  }
  if (key == '-') {
    input1 = parseInt(input);
    input = "";
    fill(255);
    rect(0, 0, 667, 212);
    input = input + "-";
    operator = 2;
    fill(130);
    text("-", 30+175*3, height/4+20 + 150, width, height);
  }
  if (key == '7') {
    input = input +7;
    text("7", 30, height/4+20 + 150*2, width, height);
  }
  if (key == '8') {
    input = input +8;
    text("8", 30+175, height/4+20 + 150*2, width, height);
  }
  if (key == '9') {
    input = input +9;
    text("9", 30+175*2, height/4+20 + 150*2, width, height);
  }
  if (key == 'x' || key == '*') {
    input = input +"";
    input1 = parseInt(input);
    input = "";
    text("x", 30+175*3, height/4+20 + 150*2, width, height);
    fill(255);
    rect(0, 0, 667, 212);
    input = input + "";
    operator = 3;
  }
  if (keyCode == BACKSPACE || key == 'c') {
    input = "";
    input1 = 0;
    input2 = 0;
    operator = 0;
    text("C", 30, height/4+20 + 150*3, width, height);
    fill(255);
    rect(0, 0, 667, 212);
  }
  if (key == '0') {
    input = input +0;
    text("0", 30+175, height/4+20 + 150*3, width, height);
  }
  if (keyCode == ENTER || key == '=' || keyCode == RETURN) {
    input2 = parseInt(input);
    input = input + "=";
    fill(255);
    rect(0, 0, 667, 212);
    fill(130);
    text("=", 30+175*2, height/4+20 + 150*3, width, height);
    fill(0);
    if (operator == 1) {
      text(nf(input1 + input2), 30, 150);
      operator = 0;
    } else if (operator == 2) {
      text(nf(input1 + input2), 30, 150);
    } else if (operator == 3) {
      text(nf(input1 * input2), 30, 150);
    } else if (operator == 4) {
      text(nf(input1 / input2), 30, 150);
      if (input2 == 0)
        image(buugel, 0, 0, 667, 212);
    }
    input = "";
    input1 = 0;
    input2 = 0;
    operator = 0;
  }
  if (key == '/') {
    input1 = parseInt(input);
    input = "";
    fill(255);
    rect(0, 0, 667, 212);
    input = input + "";
    operator = 4;
    fill(130);
    text("/", 30+175*3, height/4+20 + 150*3, width, height);
  }
}

void keyReleased() {
  fill(255);
  text("1", 30, height/4+20, width, height);
  text("2", 30+175, height/4+20, width, height);
  text("3", 30+175*2, height/4+20, width, height);
  text("+", 30+175*3, height/4+20, width, height);

  text("4", 30, height/4+20 + 150, width, height);
  text("5", 30+175, height/4+20 + 150, width, height);
  text("6", 30+175*2, height/4+20 + 150, width, height);
  text("-", 30+175*3, height/4+20 + 150, width, height);

  text("7", 30, height/4+20 + 150*2, width, height);
  text("8", 30+175, height/4+20 + 150*2, width, height);
  text("9", 30+175*2, height/4+20 + 150*2, width, height);
  text("x", 30+175*3, height/4+20 + 150*2, width, height);

  text("C", 30, height/4+20 + 150*3, width, height);
  text("0", 30+175, height/4+20 + 150*3, width, height);
  text("=", 30+175*2, height/4+20 + 150*3, width, height);
  text("/", 30+175*3, height/4+20 + 150*3, width, height);
}
