const diceArtist = DiceArtistFactory();
const gameManager = new GameManager(
  new Player("Player One"),
  new Player("Player Two"),
  new Aggregator(),
  15
);

let canvas,
    rollButton,
    holdButton,
    buttonsDiv,
    scoresDiv,
    playerOneScoreDiv,
    playerTwoScoreDiv;


function rollDice(){
  count = random([1,2,3,4,5,6]);
  return count;
}

function rollButtonAction(){
  gameManager.processDiceRoll(rollDice());
}

function holdButtonAction(){
  gameManager.hold();
}

function scoreText(player){
  return `${player.name} score: ${player.scoreGet()}`;
}

function winnerAlert(player){
  alert(`The winner is ${player.name}`);
  return;
}

// TODO: Move out of loop
function updatePlayerScoreText(gameManager){
  playerOneScoreDiv.elt.innerHTML = scoreText(gameManager.p1);
  if(gameManager.currPlayer.name === "Player One"){
    playerOneScoreDiv.elt.setAttribute("class", "green");
  } else{
    playerOneScoreDiv.elt.removeAttribute("class", "green");
  }
  playerTwoScoreDiv.elt.innerHTML = scoreText(gameManager.p2);
  if(gameManager.currPlayer.name === "Player Two"){
    playerTwoScoreDiv.elt.setAttribute("class", "green");
  } else{
    playerTwoScoreDiv.elt.removeAttribute("class", "green");
  }
}

function setup() {
  canvas = createCanvas(800, 600);
  rollButton = createButton('Roll');
  holdButton = createButton('Hold');

  scoresDiv = createDiv('');
  playerOneScoreDiv = createDiv(scoreText(gameManager.p1));
  playerTwoScoreDiv = createDiv(scoreText(gameManager.p2));
  scoresDiv.child(playerOneScoreDiv);
  scoresDiv.child(playerTwoScoreDiv);

  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(holdButton);
  holdButton.mousePressed(holdButtonAction);
  rollButton.mousePressed(rollButtonAction);
}

let gameOver = false;

function draw() {
  if(gameOver){
    return;
  }
  background(255);
  gameManager.aggregator.draw();
  diceArtist.draw(gameManager.diceValue, width/3, height/3);
  updatePlayerScoreText(gameManager);
  if(gameManager.gameOver()){
    winnerAlert(gameManager.winner);
    gameOver = true;
  }
}
