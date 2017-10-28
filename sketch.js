const diceArtist = DiceFactory();
const aggregator = new Aggregator();
const p1 = new Player("Player One");
const p2 = new Player("Player Two");
const scoreToWin = 15;

function GameManager(p1, p2, aggregator, scoreToWin){
  this.p1 = p1;
  this.p2 = p2;
  this.winner = null;
  this.diceValue = null;
  this.aggregator = aggregator;
  this.currPlayer = this.p1;
  this.scoreToWin = scoreToWin;
  this.gameOverFlag = false;
}

GameManager.prototype.processDiceRoll = function(r){
  this.diceValue = r;
  if (r === 1){
    this.aggregator.reset();
    this.togglePlayer();
  } else{
    this.aggregator.add(r);
  }
};

GameManager.prototype.togglePlayer = function(){
  if(this.currPlayer === this.p1){
    this.currPlayer = this.p2;
  } else{
    this.currPlayer = this.p1;
  }
};

GameManager.prototype.hold = function(){
    this.currPlayer.scoreAdd(this.aggregator.getCount());
    this.togglePlayer();
    this.aggregator.reset();
};

GameManager.prototype.gameOver = function(){
    let ret = false;
    if(this.gameOverFlag){
        ret = true;
    } else if (this.p1.scoreGet() >= scoreToWin){
      this.gameOverFlag = ret = true;
      this.winner = this.p1;
    } else if (this.p2.scoreGet() >= scoreToWin){
      this.gameOverFlag = ret = true;
      this.winner = this.p2;
    }
    return ret;
};

let canvas,
    rollButton,
    holdButton,
    buttonsDiv,
    scoresDiv,
    playerOneScoreDiv,
    playerTwoScoreDiv;

gameManager = new GameManager(p1, p2, aggregator, scoreToWin);

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
