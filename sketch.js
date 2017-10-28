const diceArtist = DiceFactory();
const agg = new Aggregator();
const playerOne = new Player("Player One");
const playerTwo = new Player("Player Two");
const scoreToWin = 15;

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
  return count;
}

function processDiceRoll(r){
  if (r === 1){
    agg.reset();
    togglePlayer();
  } else{
    agg.add(r);
  }
}

function rollButtonAction(){
  processDiceRoll(rollDice());
}

function scoreText(player){
  return `${player.name} score: ${player.scoreGet()}`;
}

function winnerAlert(player){
  alert(`The winner is ${player.name}`);
  return;
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

function win(){
  if (playerOne.scoreGet() >= scoreToWin){
    return playerOne;
  } else if (playerTwo.scoreGet() >= scoreToWin){
    return playerTwo;
  } else{
    return null;
  }
}

function updatePlayerScoreText(){
  playerOneScoreDiv.elt.innerHTML = scoreText(playerOne);
  if(currPlayer === playerOne){
    playerOneScoreDiv.elt.setAttribute("class", "green");
  } else{
    playerOneScoreDiv.elt.removeAttribute("class", "green");
  }
  playerTwoScoreDiv.elt.innerHTML = scoreText(playerTwo);
  if(currPlayer === playerTwo){
    playerTwoScoreDiv.elt.setAttribute("class", "green");
  } else{
    playerTwoScoreDiv.elt.removeAttribute("class", "green");
  }
}

function setup() {canvas = createCanvas(800, 600); rollButton = createButton('Roll');
  holdButton = createButton('Hold');
  scoresDiv = createDiv('');
  playerOneScoreDiv = createDiv(scoreText(playerOne));
  playerTwoScoreDiv = createDiv(scoreText(playerTwo));
  scoresDiv.child(playerOneScoreDiv);
  scoresDiv.child(playerTwoScoreDiv);
  buttonsDiv = createDiv('');
  buttonsDiv.child(rollButton);
  buttonsDiv.child(holdButton);
  holdButton.mousePressed(hold);
  rollButton.mousePressed(rollButtonAction);
}

let gameOver = false;

function draw() {
  if(gameOver){
    return;
  }
  background(255);
  agg.draw();
  diceArtist.draw(count, width/3, height/3);
  updatePlayerScoreText();
  if((winner = win()) != null){
    winnerAlert(winner);
    gameOver = true;
  }
}
