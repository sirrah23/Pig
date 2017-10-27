function Player(){
  this.score = 0;
}

Player.prototype.scoreGet = function(n){
  return this.score;
};

Player.prototype.scoreAdd = function(n){
  this.score += n;
};

Player.prototype.scoreReset = function(n){
  this.score = 0;
};
