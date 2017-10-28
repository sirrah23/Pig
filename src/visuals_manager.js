function VisualsManager(gameManager, rollDice, rollButton, holdButton, p1ScoreDiv, p2ScoreDiv){
  this.gameManager = gameManager;
  this.rollDice = rollDice;
  this.rollButton = rollButton;
  this.holdButton = holdButton;
  this.p1ScoreDiv = p1ScoreDiv;
  this.p2ScoreDiv = p2ScoreDiv;
  this.holdButton.mousePressed(this.holdButtonAction.bind(this));
  this.rollButton.mousePressed(this.rollButtonAction.bind(this));
  this.initializePlayerScoreText();
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

VisualsManager.prototype.initializePlayerScoreText = function(){
  this.p1ScoreDiv.elt.innerHTML = this.scoreText(this.gameManager.p1);
  this.p2ScoreDiv.elt.innerHTML = this.scoreText(this.gameManager.p2);
  this.toggleGreen(this.p1ScoreDiv.elt);
};

VisualsManager.prototype.updatePlayerScoreText = function(){
  this.p1ScoreDiv.elt.innerHTML = this.scoreText(this.gameManager.p1);
  this.p2ScoreDiv.elt.innerHTML = this.scoreText(this.gameManager.p2);
  this.toggleGreen(this.p1ScoreDiv.elt);
  this.toggleGreen(this.p2ScoreDiv.elt);
};

VisualsManager.prototype.aggregatorText = function(){
  const count = gameManager.aggregator.getCount();
  textSize(32);
  text(`${count}`, width-100, height-100);
};

VisualsManager.prototype.toggleGreen = function(elt){
  if(elt.hasAttribute('class', 'green')){
    elt.removeAttribute("class", "green");
  } else{
    elt.setAttribute("class", "green");
  }
};
