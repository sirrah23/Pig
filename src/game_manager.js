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
  let success;
  this.diceValue = r;
  if (r === 1){
    this.aggregator.reset();
    this.togglePlayer();
    success = false;
  } else{
    this.aggregator.add(r);
    success = true;
  }
  return success;
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
    } else if (this.p1.scoreGet() >= this.scoreToWin){
      this.gameOverFlag = ret = true;
      this.winner = this.p1;
    } else if (this.p2.scoreGet() >= this.scoreToWin){
      this.gameOverFlag = ret = true;
      this.winner = this.p2;
    }
    return ret;
};
