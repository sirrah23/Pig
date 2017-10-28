const diceArtist = DiceArtistFactory();
const gameManager = new GameManager(
  new Player("Player One"),
  new Player("Player Two"),
  new Aggregator(),
  15
);
let visualsManager;

function rollDice(){
  count = random([1,2,3,4,5,6]);
  return count;
}

function VisualsManager(gameManager, rollDice, rollButton, holdButton, p1ScoreDiv, p2ScoreDiv){
  this.gameManager = gameManager;
  this.rollDice = rollDice;
  this.rollButton = rollButton;
  this.holdButton = holdButton;
  this.p1ScoreDiv = p1ScoreDiv;
  this.p2ScoreDiv = p2ScoreDiv;
  this.holdButton.mousePressed(this.holdButtonAction.bind(this));
  this.rollButton.mousePressed(this.rollButtonAction.bind(this));
};

VisualsManager.prototype.rollButtonAction = function(){
  const success = this.gameManager.processDiceRoll(this.rollDice());
  if (!success){
    this.updatePlayerScoreText();
  }
};

VisualsManager.prototype.holdButtonAction = function(){
  this.gameManager.hold();
  this.updatePlayerScoreText();
};

VisualsManager.prototype.scoreText = function(player){
  return `${player.name} score: ${player.scoreGet()}`;
};

VisualsManager.prototype.winnerAlert = function(player){
  alert(`The winner is ${player.name}`);
  return;
};

VisualsManager.prototype.updatePlayerScoreText = function(){

  this.p1ScoreDiv.elt.innerHTML = this.scoreText(this.gameManager.p1);

  if(this.gameManager.currPlayer.name === "Player One"){
    this.p1ScoreDiv.elt.setAttribute("class", "green");
  } else{
    this.p1ScoreDiv.elt.removeAttribute("class", "green");
  }

  this.p2ScoreDiv.elt.innerHTML = this.scoreText(this.gameManager.p2);
  if(this.gameManager.currPlayer.name === "Player Two"){
    this.p2ScoreDiv.elt.setAttribute("class", "green");
  } else{
    this.p2ScoreDiv.elt.removeAttribute("class", "green");
  }

};

let rollButton,
    holdButton,
    buttonsDiv,
    scoresDiv,
    p1ScoreDiv,
    p2ScoreDiv;

function setup() {
  createCanvas(800, 600);

  scoresDiv = createDiv('');
  p1ScoreDiv = createDiv('');
  p2ScoreDiv = createDiv('');
  scoresDiv.child(p1ScoreDiv);
  scoresDiv.child(p2ScoreDiv);

  rollButton = createButton('Roll');
  holdButton = createButton('Hold');
  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(holdButton);

  visualsManager = new VisualsManager(gameManager, rollDice, rollButton, holdButton, p1ScoreDiv, p2ScoreDiv);
}

let gameOver = false;

function draw() {
  if(gameOver){
    return;
  }
  background(255);
  gameManager.aggregator.draw();
  diceArtist.draw(gameManager.diceValue, width/3, height/3);
  if(gameManager.gameOver()){
    visualsManager.winnerAlert(gameManager.winner);
    gameOver = true;
  }
}
