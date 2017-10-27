const dice = DiceFactory();
const agg = new Aggregator();

let canvas,
    rollButton,
    addPlayerButton,
    holdButton,
    buttonsDiv;

function rollDice(){
  return random([1,2,3,4,5,6]);
}

function drawNewDiceRoll(){
  x = rollDice();
  background(255);
  agg.add(x);
  dice.draw(x, width/3, height/3);
}

function setup() {
	canvas = createCanvas(800, 600);
  rollButton = createButton('Roll');
  holdButton = createButton('Hold');
  addPlayerButton = createButton('Add player');
  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(holdButton);
  buttonsDiv.child(addPlayerButton);
  rollButton.mousePressed(drawNewDiceRoll);
}

function draw() {
}
