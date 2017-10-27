const diceArtist = DiceFactory();
const agg = new Aggregator();
const playerOne = new Player();
const playerTwo = new Player();

let count;
let currPlayer = playerOne;

let canvas,
    rollButton,
    holdButton,
    buttonsDiv,
    scoresDiv,
    playerOneScoreDiv,
    playerTwoScoreDiv;

function rollDice(){
  count = random([1,2,3,4,5,6]);
  agg.add(count);
}

function scoreText(scoreStr, player){
  return `${scoreStr}: ${player.scoreGet()}`;
}

function togglePlayer(){
  if(currPlayer === playerOne){
    currPlayer = playerTwo;
  } else{
    currPlayer = playerOne;
  }
}

function hold(){
  currPlayer.scoreAdd(agg.getCount());
  togglePlayer();
  agg.reset();
}

function updatePlayerScoreText(){
  playerOneScoreDiv.elt.innerHTML = scoreText("Player One score", playerOne);
  playerTwoScoreDiv.elt.innerHTML = scoreText("Player Two score", playerTwo);
}

function setup() {
	canvas = createCanvas(800, 600);
  rollButton = createButton('Roll');
  holdButton = createButton('Hold');
  scoresDiv = createDiv('');
  playerOneScoreDiv = createDiv(scoreText("Player One score", playerOne));
  playerTwoScoreDiv = createDiv(scoreText("Player Two score", playerTwo));
  scoresDiv.child(playerOneScoreDiv);
  scoresDiv.child(playerTwoScoreDiv);
  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(holdButton);
  holdButton.mousePressed(hold);
  rollButton.mousePressed(rollDice);
}

function draw() {
  background(255);
  agg.draw();
  diceArtist.draw(count, width/3, height/3);
  updatePlayerScoreText();
}
