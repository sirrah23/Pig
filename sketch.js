const diceCircleSize = 20;

function drawOne(size, posX, posY){
  rect(posX, posY, size, size);
  push();
  translate(posX, posY);
  fill(0);
  ellipse(size/2, size/2, diceCircleSize, diceCircleSize);
  pop();
}

function drawTwo(size, posX, posY){
  rect(posX, posY, size, size);
  push();
  translate(posX, posY);
  fill(0);
  ellipse(size*(1/4), size/2, diceCircleSize, diceCircleSize);
  ellipse(size*(3/4), size/2, diceCircleSize, diceCircleSize);
  pop();
}

function drawThree(size, posX, posY){
  rect(posX, posY, size, size);
  push();
  translate(posX, posY);
  fill(0);
  ellipse(size*(1/4), size*(1/4), diceCircleSize, diceCircleSize);
  ellipse(size*(1/2), size*(1/2), diceCircleSize, diceCircleSize);
  ellipse(size*(3/4), size*(3/4), diceCircleSize, diceCircleSize);
  pop();
}


function drawFour(size, posX, posY){
  rect(posX, posY, size, size);
  push();
  translate(posX, posY);
  fill(0);
  ellipse(size*(1/4), size*(1/4), diceCircleSize, diceCircleSize);
  ellipse(size*(1/4), size*(3/4), diceCircleSize, diceCircleSize);
  ellipse(size*(3/4), size*(1/4), diceCircleSize, diceCircleSize);
  ellipse(size*(3/4), size*(3/4), diceCircleSize, diceCircleSize);
  pop();
}

function drawFive(size, posX, posY){
  rect(posX, posY, size, size);
  push();
  translate(posX, posY);
  fill(0);
  ellipse(size*(1/4), size*(1/5), diceCircleSize, diceCircleSize);
  ellipse(size*(1/4), size*(4/5), diceCircleSize, diceCircleSize);
  ellipse(size*(1/2), size*(1/2), diceCircleSize, diceCircleSize);
  ellipse(size*(3/4), size*(1/5), diceCircleSize, diceCircleSize);
  ellipse(size*(3/4), size*(4/5), diceCircleSize, diceCircleSize);
  pop();
}

function drawSix(size, posX, posY){
  rect(posX, posY, size, size);
  push();
  translate(posX, posY);
  fill(0);
  ellipse(size*(1/3), size*(2/8), diceCircleSize, diceCircleSize);
  ellipse(size*(1/3), size*(4/8), diceCircleSize, diceCircleSize);
  ellipse(size*(1/3), size*(6/8), diceCircleSize, diceCircleSize);
  ellipse(size*(2/3), size*(2/8), diceCircleSize, diceCircleSize);
  ellipse(size*(2/3), size*(4/8), diceCircleSize, diceCircleSize);
  ellipse(size*(2/3), size*(6/8), diceCircleSize, diceCircleSize);
  pop();
}

let canvas,
    rollButton,
    addPlayerButton,
    buttonsDiv;

function setup() {
	canvas = createCanvas(800, 600);
  rollButton = createButton('Roll');
  addPlayerButton = createButton('Add player');
  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(addPlayerButton);
}

function draw() {
  //drawOne(150, width/2, height/2);
  //drawTwo(150, width/2, height/2);
  //drawThree(150, width/2, height/2);
  //drawFour(150, width/2, height/2);
  //drawFive(150, width/2, height/2);
  drawSix(150, width/2, height/2);
}
