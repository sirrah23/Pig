const diceArtist = DiceFactory();
const agg = new Aggregator();
let count;

let canvas,
    rollButton,
    addPlayerButton,
    holdButton,
    buttonsDiv;

function rollDice(){
  count = random([1,2,3,4,5,6]);
  agg.add(count);
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
  rollButton.mousePressed(rollDice);
}

function draw() {
  background(255);
  agg.draw();
  diceArtist.draw(count, width/3, height/3);
}
